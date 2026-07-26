#!/usr/bin/env bash
#
# import-guide.sh — pull the "Getting Started with Claude Code" guide from its
# source-of-truth repo into this website and render it with Starlight.
#
# Source of truth = bryanpcutsinger/claude-code-guide (authored in
# ~/Projects/claude-code-guide). This website holds a GENERATED copy under
# src/content/docs/ai/guide/ that must NEVER be hand-edited — edit the source,
# push, re-run this, rebuild. Uses `gh` (no local clone of the source needed),
# so the two project folders never reference each other on disk.
#
# Unlike import-topic.sh (which fetches named files), this pulls whole directory
# trees of mixed/unknown filenames, so it lists via the git trees API.
#
#   posts/**          → src/content/docs/ai/guide/**  (CLEAR-AND-REWRITE: site owns
#                                                       nothing here, so orphans from
#                                                       renamed/deleted source posts
#                                                       cannot linger as live pages)
#   guide.manifest.json → src/data/guide-sidebar.json  (overwrite; drives the sidebar)
#   public/**         → public/**                     (ADDITIVE: never delete site-owned
#                                                       files like favicon.svg, teaching/**)
#
# The guide is nested one level under /ai/guide/ (not /ai/, which is now a
# custom marketing page, src/pages/ai/index.astro — see CLAUDE.md) so every
# absolute /ai/... link the source repo writes (post cross-links, the sidebar
# manifest's slugs) is rewritten to /ai/guide/... below. The source repo has no
# idea this rewrite happens — it just writes plain /ai/ links — so this is a
# single unconditional pass over freshly-fetched, pristine content each run;
# it does not need to be idempotent against its own prior output.
#
# Usage:  npm run import:guide        (or: bash scripts/import-guide.sh)
# Env:    SRC_REPO  (default bryanpcutsinger/claude-code-guide)
#
set -euo pipefail

SRC_REPO="${SRC_REPO:-bryanpcutsinger/claude-code-guide}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AI_ROOT="$ROOT/src/content/docs/ai"
DOCS_DIR="$AI_ROOT/guide"
SIDEBAR_DEST="$ROOT/src/data/guide-sidebar.json"
PUBLIC_DEST="$ROOT/public"

echo "→ Importing guide from $SRC_REPO"

BRANCH="$(gh api "repos/$SRC_REPO" --jq '.default_branch')"

# Fetch one repo path's raw bytes to a local dest file (creating parent dirs).
fetch_to() {
  local path="$1" dest="$2"
  mkdir -p "$(dirname "$dest")"
  gh api "repos/$SRC_REPO/contents/$path?ref=$BRANCH" \
    -H "Accept: application/vnd.github.raw" > "$dest"
}

# List blob paths under a top-level dir via the recursive git trees API. Uses
# gh's built-in --jq (gojq) so no standalone `jq` is required on macOS.
list_blobs() {
  local prefix="$1"
  gh api "repos/$SRC_REPO/git/trees/$BRANCH?recursive=1" \
    --jq ".tree[] | select(.type==\"blob\") | select(.path | startswith(\"$prefix\")) | .path"
}

# Rewrite an absolute /ai/... link (Markdown, HTML href=, or YAML `link:`) to
# /ai/guide/... in-place. Captures an optional "/<slug>" so the bare overview
# link (/ai/) and per-post links (/ai/<slug>/) are both handled in one pass.
rewrite_ai_links() {
  perl -0pi -e 's{(\]\(|href="|link:\s*)/ai((?:/[^/)"\s]+)?/)}{$1/ai/guide$2}g' "$1"
}

# --- posts/** → src/content/docs/ai/guide/** (CLEAR-AND-REWRITE) -------------
# posts/index.mdx → ai/guide/index.mdx (the /ai/guide/ overview);
# posts/<x>.md → ai/guide/<x>.md. Clear the whole ai/ tree (not just guide/) so
# a stale top-level file from a prior layout can't linger.
rm -rf "$AI_ROOT"
mkdir -p "$DOCS_DIR"
POSTS=0
while IFS= read -r path; do
  [ -n "$path" ] || continue
  dest="$DOCS_DIR/${path#posts/}"
  fetch_to "$path" "$dest"
  rewrite_ai_links "$dest"
  echo "  post:  ${path#posts/}"
  POSTS=$((POSTS + 1))
done < <(list_blobs "posts/")

if [ "$POSTS" -eq 0 ]; then
  echo "✗ ABORT: no posts/ found in $SRC_REPO — refusing to leave /ai/guide/ empty" >&2
  exit 1
fi

# Fail closed: no guide post should still reference the old flat /ai/<slug>/
# path shape after the rewrite above (a missed link context, e.g. a new one
# the source repo starts using, would otherwise 404 silently in prod). BSD
# grep (macOS) has no PCRE lookahead, so exclude already-rewritten links with
# a second grep instead of a negative-lookahead pattern.
STRAY_LINKS="$(grep -rEn '(\]\(|href="|link: )/ai/' "$DOCS_DIR" | grep -v '/ai/guide/' || true)"
if [ -n "$STRAY_LINKS" ]; then
  echo "✗ ABORT: found un-rewritten /ai/ link(s) in the imported guide:" >&2
  echo "$STRAY_LINKS" >&2
  exit 1
fi

# --- guide.manifest.json → src/data/guide-sidebar.json (overwrite) -----------
fetch_to "guide.manifest.json" "$SIDEBAR_DEST"
# Rewrite manifest slugs "ai" / "ai/<x>" → "ai/guide" / "ai/guide/<x>" to match
# the nested route (single pass over pristine fetched content, see note above).
perl -0pi -e 's{"slug":\s*"ai((?:/[^"]*)?)"}{"slug": "ai/guide$1"}g' "$SIDEBAR_DEST"
echo "  sidebar: src/data/guide-sidebar.json"

# --- public/** → public/** (ADDITIVE) ----------------------------------------
ASSETS=0
while IFS= read -r path; do
  [ -n "$path" ] || continue
  fetch_to "$path" "$PUBLIC_DEST/${path#public/}"
  echo "  asset: ${path#public/}"
  ASSETS=$((ASSETS + 1))
done < <(list_blobs "public/")

echo "✓ Imported $POSTS post(s), $ASSETS asset(s) from $SRC_REPO@$BRANCH"
echo "  Generated files are committed to this repo; never hand-edit src/content/docs/ai/guide/."

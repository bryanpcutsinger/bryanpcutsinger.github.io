#!/usr/bin/env bash
#
# import-guide.sh — pull the "Getting Started with Claude Code" guide from its
# source-of-truth repo into this website and render it with Starlight.
#
# Source of truth = bryanpcutsinger/claude-code-guide (authored in
# ~/Projects/claude-code-guide). This website holds a GENERATED copy under
# src/content/docs/ai/ that must NEVER be hand-edited — edit the source, push,
# re-run this, rebuild. Uses `gh` (no local clone of the source needed), so the
# two project folders never reference each other on disk.
#
# Unlike import-topic.sh (which fetches named files), this pulls whole directory
# trees of mixed/unknown filenames, so it lists via the git trees API.
#
#   posts/**          → src/content/docs/ai/**      (CLEAR-AND-REWRITE: site owns
#                                                     nothing here, so orphans from
#                                                     renamed/deleted source posts
#                                                     cannot linger as live pages)
#   guide.manifest.json → src/data/guide-sidebar.json  (overwrite; drives the sidebar)
#   public/**         → public/**                   (ADDITIVE: never delete site-owned
#                                                     files like favicon.svg, teaching/**)
#
# Usage:  npm run import:guide        (or: bash scripts/import-guide.sh)
# Env:    SRC_REPO  (default bryanpcutsinger/claude-code-guide)
#
set -euo pipefail

SRC_REPO="${SRC_REPO:-bryanpcutsinger/claude-code-guide}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS_DIR="$ROOT/src/content/docs/ai"
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

# --- posts/** → src/content/docs/ai/** (CLEAR-AND-REWRITE) --------------------
# posts/index.mdx → ai/index.mdx (the /ai/ overview); posts/<x>.md → ai/<x>.md.
rm -rf "$DOCS_DIR"
mkdir -p "$DOCS_DIR"
POSTS=0
while IFS= read -r path; do
  [ -n "$path" ] || continue
  fetch_to "$path" "$DOCS_DIR/${path#posts/}"
  echo "  post:  ${path#posts/}"
  POSTS=$((POSTS + 1))
done < <(list_blobs "posts/")

if [ "$POSTS" -eq 0 ]; then
  echo "✗ ABORT: no posts/ found in $SRC_REPO — refusing to leave /ai/ empty" >&2
  exit 1
fi

# --- guide.manifest.json → src/data/guide-sidebar.json (overwrite) -----------
fetch_to "guide.manifest.json" "$SIDEBAR_DEST"
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
echo "  Generated files are committed to this repo; never hand-edit src/content/docs/ai/."

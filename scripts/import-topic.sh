#!/usr/bin/env bash
#
# import-topic.sh — publish one micro-principles topic into this PUBLIC website.
#
# This is the PRIMARY security boundary: it copies a topic's `post.md` with the
# `<!-- INSTRUCTOR NOTES ... -->` block REMOVED, so nothing sensitive ever enters
# this public repo's source or git history. (A render-time remark strip in
# astro.config.mjs + a postbuild grep gate are defense-in-depth, not the primary
# control.) Source content lives in the PRIVATE repo and is read via `gh`, so no
# local clone of it is required.
#
# What it does, per topic:
#   1. Fetches `post.md` from the source repo (via `gh api`, raw).
#   2. Strips every `<!-- ... INSTRUCTOR NOTES ... -->` comment block.
#   3. Rewrites relative figure refs  ](figures/x.svg)  ->  absolute public paths
#      ](/teaching/<course>/<slug>/figures/x.svg)  so the SVGs resolve when the
#      Markdown is rendered through a custom src/pages route (avoids astro#13512).
#   4. Copies the topic's figures/*.svg (NOT the .tex sources) into public/.
#   5. Writes the cleaned post to src/content/courses/<course>/<slug>/post.md.
#   6. Hard-fails if the INSTRUCTOR NOTES marker survives the strip.
#
# Usage:
#   scripts/import-topic.sh <topic-slug> [course]
# Example:
#   scripts/import-topic.sh t01-economic-way-of-thinking microeconomics
#
# Env overrides (rarely needed):
#   SRC_REPO   default: bryanpcutsinger/micro-principles
#   SRC_DIR    default: topics            (folder holding <topic-slug>/ in SRC_REPO)
#
set -euo pipefail

SLUG="${1:?usage: import-topic.sh <topic-slug> [course]}"
COURSE="${2:-microeconomics}"
SRC_REPO="${SRC_REPO:-bryanpcutsinger/micro-principles}"
SRC_DIR="${SRC_DIR:-topics}"

# Resolve repo root from this script's location (so it runs from anywhere).
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONTENT_DIR="$ROOT/src/content/courses/$COURSE/$SLUG"
PUBLIC_FIG_DIR="$ROOT/public/teaching/$COURSE/$SLUG/figures"
SRC_TOPIC="$SRC_DIR/$SLUG"

echo "→ Importing $SRC_REPO:$SRC_TOPIC  →  $COURSE/$SLUG"

mkdir -p "$CONTENT_DIR" "$PUBLIC_FIG_DIR"

# --- 1+2+3. post.md: fetch raw, strip notes, rewrite figure paths -------------
gh api "repos/$SRC_REPO/contents/$SRC_TOPIC/post.md" \
    -H "Accept: application/vnd.github.raw" \
  | perl -0777 -pe '
      # Remove any HTML comment that contains the INSTRUCTOR NOTES marker. The
      # tempered (?:(?!-->)...) ensures we start at the <!-- that actually opens
      # the notes block, not an earlier comment that closes before it.
      s/\n*<!--(?:(?!-->)[\s\S])*?INSTRUCTOR NOTES[\s\S]*?-->[ \t]*\n?//g;
      s/\s+\z/\n/;   # tidy trailing whitespace
    ' \
  | sed "s#](figures/#](/teaching/$COURSE/$SLUG/figures/#g" \
  > "$CONTENT_DIR/post.md"

# --- 6. fail fast if anything sensitive slipped through -----------------------
if grep -q "INSTRUCTOR NOTES" "$CONTENT_DIR/post.md"; then
  echo "✗ ABORT: 'INSTRUCTOR NOTES' survived the strip in $CONTENT_DIR/post.md" >&2
  rm -f "$CONTENT_DIR/post.md"
  exit 1
fi

# --- 4. figures: copy *.svg only (skip .tex sources) --------------------------
# Portable read loop (macOS ships bash 3.2, which has no `mapfile`).
FIGS=()
while IFS= read -r f; do
  [ -n "$f" ] && FIGS+=("$f")
done < <(
  gh api "repos/$SRC_REPO/contents/$SRC_TOPIC/figures" \
    --jq '.[] | select(.name | endswith(".svg")) | .name' 2>/dev/null || true
)
if [ "${#FIGS[@]}" -eq 0 ]; then
  echo "  (no .svg figures in source — nothing to copy)"
else
  for f in "${FIGS[@]}"; do
    gh api "repos/$SRC_REPO/contents/$SRC_TOPIC/figures/$f" \
      -H "Accept: application/vnd.github.raw" > "$PUBLIC_FIG_DIR/$f"
    echo "  figure: $f"
  done
fi

echo "✓ Imported $COURSE/$SLUG (notes stripped, $(wc -l < "$CONTENT_DIR/post.md" | tr -d ' ') lines, ${#FIGS[@]} figure(s))"
echo "  Set status:approved in the source to publish it to the live build."

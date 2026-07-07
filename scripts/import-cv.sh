#!/usr/bin/env bash
#
# import-cv.sh — pull the compiled CV PDF from its source-of-truth repo into
# this website's public/downloads/ so the Research page can offer it as a
# direct download.
#
# Source of truth = bryanpcutsinger/cv (authored in ~/Documents/CV): a
# self-contained LaTeX CV (cutsinger_CV.tex) plus its committed compiled
# cutsinger_CV.pdf. This website holds a GENERATED copy at
# public/downloads/cutsinger-cv.pdf that must NEVER be hand-edited — update the
# CV in the source repo (edit .tex → latexmk → commit the .pdf → push), then
# re-run this, rebuild, and commit here. Uses `gh` (no local clone needed), so
# the two project folders never reference each other on disk. CI never runs this
# — the generated PDF is committed and the hermetic build serves it as-is.
#
#   cutsinger_CV.pdf  →  public/downloads/cutsinger-cv.pdf  (overwrite)
#
# Usage:  npm run import:cv        (or: bash scripts/import-cv.sh)
# Env:    SRC_REPO  (default bryanpcutsinger/cv)
#         SRC_PDF   (default cutsinger_CV.pdf)
#
set -euo pipefail

SRC_REPO="${SRC_REPO:-bryanpcutsinger/cv}"
SRC_PDF="${SRC_PDF:-cutsinger_CV.pdf}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$ROOT/public/downloads/cutsinger-cv.pdf"

echo "→ Importing CV from $SRC_REPO"

BRANCH="$(gh api "repos/$SRC_REPO" --jq '.default_branch')"

mkdir -p "$(dirname "$DEST")"
TMP="$(mktemp)"
gh api "repos/$SRC_REPO/contents/$SRC_PDF?ref=$BRANCH" \
  -H "Accept: application/vnd.github.raw" > "$TMP"

# Guard: refuse to publish an empty/malformed file or a non-PDF (e.g. an error
# payload or an accidental LaTeX-source push) — better a stale CV than a broken
# download link.
BYTES="$(wc -c < "$TMP" | tr -d ' ')"
if [ "$BYTES" -lt 1000 ] || [ "$(head -c 5 "$TMP")" != "%PDF-" ]; then
  echo "✗ ABORT: fetched $SRC_PDF is not a valid PDF ($BYTES bytes) — leaving existing CV untouched" >&2
  rm -f "$TMP"
  exit 1
fi

mv "$TMP" "$DEST"
echo "✓ Imported $SRC_PDF ($BYTES bytes) → public/downloads/cutsinger-cv.pdf from $SRC_REPO@$BRANCH"
echo "  Generated file is committed to this repo; never hand-edit it — re-run this after a CV update."

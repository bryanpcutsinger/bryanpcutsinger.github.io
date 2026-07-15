#!/usr/bin/env bash
#
# import-cv.sh — pull the compiled CV PDF from its source-of-truth repo into
# this website's public/downloads/, AND regenerate src/data/publications.json
# from the CV LaTeX source using the CV repo's own parser.
#
# Source of truth = bryanpcutsinger/cv (authored in ~/Documents/CV): a
# self-contained LaTeX CV (cutsinger_CV.tex), its committed compiled
# cutsinger_CV.pdf, and scripts/generate_publications.py (a deterministic,
# fail-closed LaTeX→JSON compiler). This website holds GENERATED copies at
# public/downloads/cutsinger-cv.pdf and src/data/publications.json that must
# NEVER be hand-edited — update the CV in the source repo and push (the
# Publish CV Action regenerates + syncs both), or re-run this, rebuild, and
# commit here. Uses `gh` (no local clone needed), so the two project folders
# never reference each other on disk. CI never runs this — the generated files
# are committed and the hermetic build serves them as-is.
#
# The parser is FETCHED from the CV repo at run time — there is exactly one
# parser, never a drifting local copy. If it fails (an unrecognized CV entry),
# this script aborts before touching the committed JSON: fail-closed, a
# garbled citation must never publish.
#
#   cutsinger_CV.pdf                →  public/downloads/cutsinger-cv.pdf
#   cutsinger_CV.tex (via parser)   →  src/data/publications.json
#
# Usage:  npm run import:cv        (or: bash scripts/import-cv.sh)
# Env:    SRC_REPO  (default bryanpcutsinger/cv)
#         SRC_PDF   (default cutsinger_CV.pdf)
#
set -euo pipefail

SRC_REPO="${SRC_REPO:-bryanpcutsinger/cv}"
SRC_PDF="${SRC_PDF:-cutsinger_CV.pdf}"
SRC_TEX="cutsinger_CV.tex"
SRC_PARSER="scripts/generate_publications.py"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_PDF="$ROOT/public/downloads/cutsinger-cv.pdf"
DEST_JSON="$ROOT/src/data/publications.json"

echo "→ Importing CV from $SRC_REPO"

# Resolve the default branch to ONE commit SHA so the PDF, the .tex, and the
# parser all come from the same version (no mid-import race).
BRANCH="$(gh api "repos/$SRC_REPO" --jq '.default_branch')"
SHA="$(gh api "repos/$SRC_REPO/commits/$BRANCH" --jq '.sha')"
echo "  pinned to $SRC_REPO@${SHA:0:7}"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

fetch() { # fetch <repo path> <local file>
  gh api "repos/$SRC_REPO/contents/$1?ref=$SHA" \
    -H "Accept: application/vnd.github.raw" > "$2"
}

# --- 1. The compiled PDF -----------------------------------------------------
fetch "$SRC_PDF" "$WORK/cv.pdf"

# Guard: refuse to publish an empty/malformed file or a non-PDF (e.g. an error
# payload or an accidental LaTeX-source push) — better a stale CV than a broken
# download link.
BYTES="$(wc -c < "$WORK/cv.pdf" | tr -d ' ')"
if [ "$BYTES" -lt 1000 ] || [ "$(head -c 5 "$WORK/cv.pdf")" != "%PDF-" ]; then
  echo "✗ ABORT: fetched $SRC_PDF is not a valid PDF ($BYTES bytes) — leaving existing CV untouched" >&2
  exit 1
fi

# --- 2. publications.json via the CV repo's parser ---------------------------
fetch "$SRC_TEX" "$WORK/cv.tex"
fetch "$SRC_PARSER" "$WORK/generate_publications.py"

# The parser exits nonzero on any entry it cannot parse verbatim (fail-closed);
# set -e aborts here before the committed JSON is touched.
python3 "$WORK/generate_publications.py" "$WORK/cv.tex" --out "$WORK/publications.json"

# Guard: the output must be valid JSON carrying the GENERATED marker.
python3 - "$WORK/publications.json" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
assert "GENERATED" in data.get("_note", ""), "missing GENERATED note"
assert data["articles"], "no articles parsed"
PY

# --- 3. Install both (only after every guard passed) --------------------------
mkdir -p "$(dirname "$DEST_PDF")"
mv "$WORK/cv.pdf" "$DEST_PDF"
mv "$WORK/publications.json" "$DEST_JSON"
echo "✓ Imported $SRC_PDF ($BYTES bytes) → public/downloads/cutsinger-cv.pdf"
echo "✓ Regenerated src/data/publications.json from $SRC_TEX"
echo "  Generated files are committed to this repo; never hand-edit them — re-run this after a CV update."

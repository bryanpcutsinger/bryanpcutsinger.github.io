#!/usr/bin/env bash
#
# import-problems.sh — pull the Price Theory problem bank from its
# source-of-truth repo into this website as committed JSON data.
#
# Source of truth = bryanpcutsinger/price-theory. That repo is a PROBLEM BANK
# (not topic readers like micro-principles), so it does NOT use import-topic.sh.
# Its build pipeline (fetch_raw.py → collect_problems.js → build.py) regenerates
# derived/problems.json; this script copies that clean artifact (plus the
# taxonomy) into a GENERATED copy under src/data/price-theory/ that must NEVER be
# hand-edited — edit the source repo, re-run this, rebuild. Uses `gh` (no local
# clone needed).
#
#   derived/problems.json → src/data/price-theory/problems.json
#   taxonomy.json         → src/data/price-theory/taxonomy.json
#
# No instructor-notes strip / no figure copy: the source is public and text-only.
#
# Usage:  npm run import:problems        (or: bash scripts/import-problems.sh)
# Env:    SRC_REPO  (default bryanpcutsinger/price-theory)
#
set -euo pipefail

SRC_REPO="${SRC_REPO:-bryanpcutsinger/price-theory}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_DIR="$ROOT/src/data/price-theory"

echo "→ Importing Price Theory problem bank from $SRC_REPO"

BRANCH="$(gh api "repos/$SRC_REPO" --jq '.default_branch')"
mkdir -p "$DEST_DIR"

# Fetch one repo path's raw bytes to a local dest file.
fetch_to() {
  local path="$1" dest="$2"
  gh api "repos/$SRC_REPO/contents/$path?ref=$BRANCH" \
    -H "Accept: application/vnd.github.raw" > "$dest"
}

fetch_to "derived/problems.json" "$DEST_DIR/problems.json"
fetch_to "taxonomy.json" "$DEST_DIR/taxonomy.json"

# Summary + sanity check (problem count, per-topic counts). Fails if the pull
# produced an empty/malformed bank, so we never commit a broken import.
python3 - "$DEST_DIR/problems.json" <<'PY'
import json, sys
with open(sys.argv[1]) as f:
    doc = json.load(f)
problems = doc.get("problems", [])
if not problems:
    sys.exit("✗ ABORT: no problems found in the imported problems.json")
from collections import Counter
c = Counter(t for p in problems for t in p.get("topics", []))
print(f"✓ Imported {len(problems)} problem(s) from {len(set(p['source']['slug'] for p in problems))} source(s)")
for topic, n in sorted(c.items(), key=lambda x: -x[1]):
    print(f"    {n:>3}  {topic}")
PY

echo "  Generated files are committed to this repo; never hand-edit src/data/price-theory/."

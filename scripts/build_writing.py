#!/usr/bin/env python3
"""
build_writing.py — regenerate src/data/writing.json from Bryan's author RSS feeds.

Bryan's most frequent public writing lives on two outlets that each expose a
clean, AUTHOR-SCOPED RSS feed (verified 2026-07-19):

  - EconLog (Econlib):        his monthly Price Theory column
  - The Daily Economy (AIER): his CPI / Fed commentary

This script fetches both feeds, merges them, sorts newest-first, and writes the
`essays` list in src/data/writing.json. The Writing page and the home "Recent
work" list both read that file, so publishing on either outlet makes the pieces
appear on the site with no hand-editing.

INTEGRITY: every field is copied VERBATIM from the feed (title, link, date). The
script fabricates nothing. It FAILS CLOSED — if either feed is unreachable or
returns zero items, it aborts WITHOUT touching writing.json, so a transient feed
outage can never blank the list or publish a garbled entry.

`press` (interviews / podcast appearances) is NOT fed by these feeds; it is left
as an empty list for now (a future phase can source it from the CV's Selected
Media). Run via `npm run import:writing`; the scheduled refresh-writing Action
runs the same command weekly and commits any change.
"""
import json
import sys
import urllib.request
from email.utils import parsedate_to_datetime
from pathlib import Path
from xml.etree import ElementTree as ET

# Author-scoped RSS feeds. outlet/kind label each source in the site's voice.
FEEDS = [
    {
        "url": "https://www.econlib.org/author/bcutsinger/feed/",
        "outlet": "EconLog",
        "kind": "Column",
    },
    {
        "url": "https://thedailyeconomy.org/article/article-author/bryan-cutsinger/feed/",
        "outlet": "The Daily Economy",
        "kind": "Commentary",
    },
]

# Keep the file bounded; the home page shows the top few, the Writing page the rest.
MAX_ITEMS = 30

OUT = Path(__file__).resolve().parent.parent / "src" / "data" / "writing.json"


def fetch(url):
    """Fetch a URL as bytes with a real UA (some hosts 403 the default Python UA)."""
    req = urllib.request.Request(url, headers={"User-Agent": "bryancutsinger.com feed refresh"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def parse_feed(feed):
    """Return a list of normalized item dicts from one RSS feed, or raise on failure."""
    raw = fetch(feed["url"])
    root = ET.fromstring(raw)
    channel = root.find("channel")
    if channel is None:
        raise ValueError(f"no <channel> in feed: {feed['url']}")

    items = []
    for it in channel.findall("item"):
        title = (it.findtext("title") or "").strip()
        link = (it.findtext("link") or "").strip()
        pub = it.findtext("pubDate")
        if not (title and link and pub):
            continue
        dt = parsedate_to_datetime(pub)
        items.append({
            "date": dt.strftime("%b %Y"),          # display, e.g. "Jun 2026"
            "isoDate": dt.strftime("%Y-%m-%d"),     # sortable
            "title": title,
            "outlet": feed["outlet"],
            "url": link,
            "kind": feed["kind"],
        })
    if not items:
        raise ValueError(f"feed returned zero usable items: {feed['url']}")
    return items


def main():
    essays = []
    for feed in FEEDS:
        try:
            got = parse_feed(feed)
        except Exception as e:  # noqa: BLE001 — any failure must abort, never partial-write
            print(f"✗ ABORT: could not build from {feed['outlet']} feed: {e}", file=sys.stderr)
            print("  writing.json left unchanged (fail-closed).", file=sys.stderr)
            sys.exit(1)
        print(f"  {feed['outlet']}: {len(got)} items")
        essays.extend(got)

    # Newest first, then cap.
    essays.sort(key=lambda r: r["isoDate"], reverse=True)
    essays = essays[:MAX_ITEMS]

    payload = {
        "_note": (
            "GENERATED from author RSS feeds by scripts/build_writing.py — do not "
            "hand-edit; run `npm run import:writing` (the refresh-writing Action runs "
            "it weekly). `essays` is merged from the EconLog and The Daily Economy "
            "author feeds, newest first, copied verbatim. `press` is not yet wired to "
            "a source (future: CV Selected Media). INTEGRITY: never fabricate a title "
            "or URL; the script fails closed if a feed is unreachable."
        ),
        "essays": essays,
        "press": [],
    }

    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"✓ wrote {len(essays)} essays → {OUT.relative_to(OUT.parents[2])}")


if __name__ == "__main__":
    main()

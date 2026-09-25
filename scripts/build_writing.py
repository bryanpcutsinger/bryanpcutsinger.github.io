#!/usr/bin/env python3
"""
build_writing.py — regenerate src/data/writing.json from Bryan's public writing.

Three kinds of source feed the `essays` list (all copied VERBATIM, nothing invented):

  1. AUTHOR-SCOPED RSS feeds — every item is Bryan's:
       - EconLog (Econlib):          his monthly Price Theory column
       - The Daily Economy (AIER):   his CPI / Fed commentary
       - Tax Policy Network:         WordPress author feed (verified 2026-09-24)
  2. SITE-WIDE RSS feeds FILTERED BY BYLINE OR TITLE — the outlet has no author
     feed, but we can keep only the items that are Bryan's:
       - RealClearEducation: /articles/index.xml (original articles only; ~25-item
         rolling window), filtered on its <author> field via `author_match`. The
         author page itself blocks scripted fetches (403).
       - Macro Musings (Libsyn podcast RSS, full archive back to 2016), filtered on
         the episode title via `title_match` — Libsyn titles name the guests. These
         go to the `press` list, not `essays` (`section: "press"`).
  3. A HAND-CURATED file, src/data/writing-manual.json — for outlets with no
     usable feed at all (National Review, The Hill, City Journal, CapX, one-off
     op-eds) and for pieces that pre-date a feed's window. Bryan adds entries
     there by hand; every title/URL must be checked against the live page first.

ACCUMULATION: feeds are rolling windows (EconLog returns 10 items; RCE ~5 weeks),
so this script MERGES new items INTO the existing writing.json by URL and never
drops an item that was published before. The Writing page is therefore the full
record; the home page slices the top few itself.

INTEGRITY / FAIL-CLOSED: if any feed is unreachable, malformed, or returns zero
items in total, the script aborts WITHOUT touching writing.json. (For a
byline-filtered feed, zero MATCHING items is normal — Bryan simply hasn't
published there this window — and is not an error.) Same-URL collisions resolve
in favor of the fresh feed copy (still verbatim from the outlet).

`press` (interviews / podcast appearances) is built the same way — feed entries
with `section: "press"` plus a `press` list in writing-manual.json — and
accumulates by URL just like `essays`. Run via `npm run import:writing`; the
scheduled refresh-writing Action runs the same command weekly and commits any change.
"""
import json
import re
import sys
import urllib.request
from email.utils import parsedate_to_datetime
from pathlib import Path
from xml.etree import ElementTree as ET

# Feed sources. outlet/kind label each source in the site's voice.
#   author_match / title_match (optional): case-insensitive substrings; when set,
#   the feed is site-wide and only items whose <author>/<dc:creator> (resp. <title>)
#   contains the string are kept.
#   section (optional): "essays" (default) or "press" — which list the items join.
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
    {
        "url": "https://taxpolicynetwork.org/author/bryan-cutsinger/feed/",
        "outlet": "Tax Policy Network",
        "kind": "Commentary",
    },
    {
        "url": "https://www.realcleareducation.com/articles/index.xml",
        "outlet": "RealClearEducation",
        "kind": "Op-ed",
        "author_match": "cutsinger",
    },
    {
        "url": "https://macromusings.libsyn.com/rss",
        "outlet": "Macro Musings with David Beckworth",
        "kind": "Podcast",
        "title_match": "cutsinger",
        "section": "press",
    },
]

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "data" / "writing.json"
MANUAL = ROOT / "src" / "data" / "writing-manual.json"

DC_CREATOR = "{http://purl.org/dc/elements/1.1/}creator"


def fetch(url):
    """Fetch a URL as bytes with a real UA (some hosts 403 the default Python UA)."""
    req = urllib.request.Request(url, headers={"User-Agent": "bryancutsinger.com feed refresh"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def norm_url(url):
    """Canonical form for de-duplication only (the stored URL stays verbatim)."""
    url = url.strip().split("#", 1)[0].split("?", 1)[0]
    url = re.sub(r"^http://", "https://", url)
    return url.rstrip("/").lower()


def parse_feed(feed):
    """Return normalized item dicts from one RSS feed; raise on any failure."""
    raw = fetch(feed["url"])
    root = ET.fromstring(raw)
    channel = root.find("channel")
    if channel is None:
        raise ValueError(f"no <channel> in feed: {feed['url']}")

    raw_items = channel.findall("item")
    if not raw_items:
        raise ValueError(f"feed returned zero items: {feed['url']}")

    match = (feed.get("author_match") or "").lower()
    tmatch = (feed.get("title_match") or "").lower()
    items = []
    for it in raw_items:
        title = (it.findtext("title") or "").strip()
        link = (it.findtext("link") or "").strip()
        pub = it.findtext("pubDate")
        if not (title and link and pub):
            continue
        if match:
            byline = f"{it.findtext('author') or ''} {it.findtext(DC_CREATOR) or ''}".lower()
            if match not in byline:
                continue
        if tmatch and tmatch not in title.lower():
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
    if not items and not (match or tmatch):
        raise ValueError(f"feed returned zero usable items: {feed['url']}")
    return items


REQUIRED = ("date", "isoDate", "title", "outlet", "url")


SECTIONS = ("essays", "press")


def load_manual(section):
    """Hand-curated entries; validated (never silently skipped) so a typo can't publish."""
    if not MANUAL.exists():
        return []
    data = json.loads(MANUAL.read_text(encoding="utf-8"))
    rows = data.get(section, [])
    for i, r in enumerate(rows):
        missing = [k for k in REQUIRED if not r.get(k)]
        if missing:
            raise ValueError(f"writing-manual.json {section}[{i}] is missing {missing}")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", r["isoDate"]):
            raise ValueError(f"writing-manual.json {section}[{i}] isoDate must be YYYY-MM-DD")
    return [{k: r[k] for k in (*REQUIRED, "kind") if k in r} for r in rows]


def load_existing(section):
    """Items already published on the site — the accumulation base."""
    if not OUT.exists():
        return []
    # A corrupt file must abort (caught in main), never silently reset the record.
    return json.loads(OUT.read_text(encoding="utf-8")).get(section, [])


def main():
    fresh = {sec: [] for sec in SECTIONS}
    for feed in FEEDS:
        try:
            got = parse_feed(feed)
        except Exception as e:  # noqa: BLE001 — any failure must abort, never partial-write
            print(f"✗ ABORT: could not build from {feed['outlet']} feed: {e}", file=sys.stderr)
            print("  writing.json left unchanged (fail-closed).", file=sys.stderr)
            sys.exit(1)
        print(f"  {feed['outlet']}: {len(got)} items")
        fresh[feed.get("section", "essays")].extend(got)

    lists = {}
    counts = {}
    for sec in SECTIONS:
        try:
            manual = load_manual(sec)
            existing = load_existing(sec)
        except Exception as e:  # noqa: BLE001
            print(f"✗ ABORT: {e}", file=sys.stderr)
            print("  writing.json left unchanged (fail-closed).", file=sys.stderr)
            sys.exit(1)
        print(f"  writing-manual.json {sec}: {len(manual)} items")

        # Merge by URL. Order of precedence for a same-URL collision: existing copy
        # is overwritten by a manual entry, which is overwritten by the fresh feed copy.
        merged = {}
        for row in [*existing, *manual, *fresh[sec]]:
            merged[norm_url(row["url"])] = row
        lists[sec] = sorted(merged.values(), key=lambda r: r["isoDate"], reverse=True)
        counts[sec] = len(lists[sec]) - len({norm_url(r["url"]) for r in existing})

    payload = {
        "_note": (
            "GENERATED by scripts/build_writing.py — do not hand-edit; run `npm run "
            "import:writing` (the refresh-writing Action runs it weekly). Both lists "
            "ACCUMULATE: `essays` from the author feeds (EconLog, The Daily Economy, "
            "Tax Policy Network) + RealClearEducation's site feed filtered by byline; "
            "`press` from the Macro Musings podcast feed filtered by episode title; plus "
            "the hand-curated src/data/writing-manual.json — all merged by URL into the "
            "previous copy, newest first, copied verbatim — nothing is ever dropped when "
            "it ages out of a feed window. To add a piece from an outlet with no feed, "
            "add it to writing-manual.json (never here). INTEGRITY: never fabricate a "
            "title or URL; the script fails closed if a feed is unreachable."
        ),
        "essays": lists["essays"],
        "press": lists["press"],
    }

    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"✓ wrote {len(lists['essays'])} essays ({counts['essays']:+d}) and "
        f"{len(lists['press'])} press ({counts['press']:+d}) → {OUT.relative_to(ROOT)}"
    )


if __name__ == "__main__":
    main()

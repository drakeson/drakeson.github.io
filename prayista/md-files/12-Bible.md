# Prayista — Screen Spec: Bible (Offline)

**Flow:** Offline Bible home → Book selector → Chapter selector → Reader → Verse actions → Bookmarks → Search → Download

---

## 1. Offline Bible home

- Title: "Bible" + "Always available offline" badge
- "Continue reading" card: last-read reference (e.g. "Psalms 46") with a progress bar
- "Books" section header + "See all" link — quick grid of recent/frequent books (e.g. Genesis, Psalms, Matthew, John)
- Hint text: "Tap any book above to open its chapters"
- Curved bottom nav (shared with Home)

---

## 2. Book selector

- Title: "Books"
- Tabs: Old Testament (selected) / New Testament
- Vertical list of books (e.g. Genesis, Exodus, **Psalms** — active/highlighted, Proverbs)

---

## 3. Chapter selector

- Title: "Psalms — chapters" (updates to whichever book was picked)
- Grid of chapter number pills (e.g. 44, 45, **46** selected, 47, 48)

---

## 4. Reader (adjustable text)

- Back nav: "‹ Psalms 46"
- Top-right controls: "Aa" (text size) and a theme/brightness toggle
- Verse text body with superscript verse numbers
- One verse shown highlighted (yellow) — e.g. verse 10, likely because it's bookmarked or was the day's quote

---

## 5. Verse actions

- Selected verse shown large, underlined, at the top
- Bottom action bar: **Highlight**, **Bookmark**, **Share**

---

## 6. Bookmarks

- Title: "Bookmarks"
- List of bookmarked verses, each: reference (e.g. "Psalms 46:10") + quoted text

## 6b. Bookmarks — empty

- Icon (bookmark ribbon)
- Title: "No bookmarks yet"
- Description: "Tap the bookmark icon on any verse to save it here"

---

## 7. Search (results)

- Search input with active query (e.g. "peace")
- Result count (e.g. "14 results for 'peace'")
- Results list, each: reference (e.g. "John 14:27"), preview text snippet

---

## Open items / to confirm
- [ ] Download — the flow title mentions "download" but no distinct download screen/state is shown; is offline access automatic (whole Bible bundled) or per-book/translation download like Media's Downloads screen?
- [ ] Reader theme toggle (screen 4) — light/dark/sepia, or just light/dark?

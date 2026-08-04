# Prayista — Screen Spec: Cells (Small Groups)

**Flow:** Cells map → Cell detail → Add Cell form → My Cells → Cell joined confirmation

---

## 1. Cells map

- Search bar: "Search cells near 5 km" placeholder
- **Add Cell button** — right of the search bar (new, per feedback: lets a user create/register a cell without digging into a menu)
- Map view with pins:
  - Red people-pin(s) = cells near the user
  - Gold pin = a landmark/reference point (e.g. church location)
  - Blue dot = user's current location
- Below the map: "X cells near you" list — horizontal cards, each with:
  - Colored thumbnail
  - Cell name (e.g. "Young Adults Downtown")
  - Distance + meeting time (e.g. "0.4 mi · Tuesdays 7PM")
- Tapping a card/pin opens Cell detail

---

## 2. Cell detail

- Banner image/color block (top)
- Cell name (e.g. "Young Adults Downtown")
- Leader row: initials avatar, leader name (e.g. "Marcus J."), phone number
- Location row: pin icon + address
- Description text
- "Attend Cell" button (bottom) → opens Cell joined confirmation

---

## 3. Add Cell form

- Title: "Add a Cell"
- Fields, top to bottom:
  - Cell name
  - Location (address)
  - Phone
  - Church (which church this cell is affiliated with)
  - Description ("What's this cell about?")
- "Create Cell" button (bottom)

---

## 4. My Cells

- Title: "My Cells"
- List of cells the user is attending, each card with:
  - Thumbnail
  - Cell name
  - "Attending since [Month Year]"
- Empty state: "Join more cells to see them here"

---

## 5. Cell joined confirmation

- Centered checkmark icon
- Title: "You're in!"
- Description: names the leader who will follow up (e.g. "Marcus will reach out with the next meeting details.")
- "Go to My Cells" button

---

## Open items / to confirm
- [ ] Add Cell button icon/style (icon-only vs "+ Add Cell" label) next to search
- [ ] Whether Add Cell is available to any user or only cell leaders/admins

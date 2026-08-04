# Prayista — Screen Spec: Daily Quotes

**Flow:** Quotes list/carousel → Quote detail → Saved Quotes → Quote of the day (share card)

---

## 1. Quotes list / carousel

- Title: "Daily Quotes"
- Vertical list of quote cards, each with:
  - Date label (TODAY / YESTERDAY / "2 DAYS AGO", etc.)
  - Quote text (italic)
  - Reference (e.g. "Psalm 46:10")
- Today's card is visually highlighted (gradient background) vs. plain white cards for past days
- Tapping a card opens Quote detail

---

## 2. Quote detail

- Back nav: "‹ Back"
- Share/expand icon, top-right
- Quote text, large, italic
- Reference, styled/colored
- "Application in life" section — short paragraph applying the verse to daily life
- "Life lesson" section — short paragraph on the broader lesson
- Bottom buttons: **Save** (heart outline, toggles filled) and **Share**

---

## 3. Saved Quotes

- Title: "Saved Quotes"
- List of saved quote cards, each with a filled heart icon (tap to un-save)
- Empty state: "Save quotes to see them here"
- *(This is the screen the Home screen's new Saved Quotes button should open.)*

---

## 4. Quote of the day — share card

- Full-bleed maroon gradient card (image-style, meant for sharing outside the app)
- Quote text, large, centered
- Reference
- "PRAYISTA" wordmark/watermark at the bottom
- Buttons below the card: **Save image** / **Share**

---

## Note: Dark mode spot-check
- The original board includes a "Dark mode spot-check" label at the bottom of this file — this is a design QA note, not a screen. Flagging in case you want a dedicated dark-mode pass documented separately.

---

## Open items / to confirm
- [ ] Confirm this Saved Quotes screen is the single source shared between Home's new button, Profile's "Saved quotes" row, and this Daily Quotes flow — or if any of those are separate lists
- [ ] Share card (screen 4) — is this auto-generated for every quote, or only "quote of the day"?

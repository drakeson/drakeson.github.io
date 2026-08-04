# Prayista — Screen Spec: Pray & Testify

**Flow:** Feed → Detail/read more → Write → Post success → Report/moderation

---

## 1. Feed (Prayer Requests | Testimonies)

- Title: "Pray & Testify"
- Tabs: **Prayer Requests** (default selected) / Testimonies
- Feed cards, each with:
  - Avatar initials + poster name
  - Timestamp (e.g. "2h ago")
  - Post text
  - Reaction pill: "🙏 Amen · [count]" (tappable, increments count)
- Floating **"+" button**, bottom-right → opens Write screen
- Tapping a card opens Detail / read more

---

## 2. Testimony card (feed variant)

- Same feed screen, **Testimonies** tab selected
- Card style shifts to a green accent (vs. the neutral/maroon prayer-request card)
- Reaction pill reads "Blessed · [count]" instead of "Amen"

---

## 3. Detail / read more

- Back nav: "‹ Back"
- Full post: avatar, name, church affiliation, timestamp, full post text
- Reaction pill (Amen/Blessed) with count
- "COMMENTS" section header
- Comment list (name + comment text, e.g. "Praying for you and your family 🙏 — Grace")

---

## 4. Write screen

- Close "X" (top-left), "Post" button (top-right)
- Toggle: Prayer Request / Testimony (choose post type)
- Text area, placeholder: "Share what's on your heart…"

---

## 5. Post success

- Checkmark icon
- Title: "Posted!"
- Description: "Your church family will be praying with you."
- "Back to feed" button

---

## 6. Report / moderation

- Bottom sheet, drag handle at top
- Title: "Report this post"
- Options list: Spam, Inappropriate content, Harassment (styled in red, likely the most severe/flagged option)

---

## Open items / to confirm
- [ ] Is the report sheet triggered by a long-press or an overflow (•••) menu on each card? Not shown in the current screens.
- [ ] Do comments support replies, or is it a flat single-level list?

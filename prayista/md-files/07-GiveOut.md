# Prayista — Screen Spec: Give Out

**Flow:** Select type → Select church → Amount → Payment method → Confirm & review → Processing → Success receipt → Gratitude badges

---

## 1. Give Out entry — select type

- Title: "Give Out"
- Subtitle: "What would you like to give?"
- Option list (radio-style rows), each with icon + label + short description:
  - **Tithe** — "Regular giving to your church"
  - **Offertory** — "Sunday service offering"
  - **Donate** — "A specific cause or campaign"
  - **Give to Us** — "Support the Prayista platform"

---

## 2. Select church

- Back nav: "‹ Tithe" (reflects the type chosen in step 1)
- Title: "Select church"
- List of followed churches, each with a checkmark when selected (e.g. Grace Community, Riverside House)

---

## 3. Amount selection

- Back nav: "‹ Grace Community"
- Label: "Tithe amount"
- Large editable dollar amount display (e.g. "$100")
- Preset amount pills: $25 / $50 / $100 / $250 (tapping fills the display above)
- "Continue" button

---

## 4. Payment method

- Title: "Payment method"
- List of saved methods, each with icon + label + checkmark if selected (e.g. "Visa •••• 4021")
- "Bank transfer" option
- "+ Add new method" row
- "Continue" button

---

## 5. Confirm & review

- Title: "Review your gift"
- Summary card: Type, Church, Payment method, **Total** (bold, larger)
- "Give $[amount]" button (button label updates with the total)

---

## 6. Processing

- Centered spinner
- Caption: "Processing your gift…"

---

## 7. Success receipt

- Checkmark icon
- Title: "Thank you for giving"
- Amount, large (e.g. "$100.00")
- Receipt line: "Tithe to Grace Community · Receipt #GT-8842"
- "Download receipt" button

---

## 8. Gratitude badges earned

- Title: "Gratitude Badges"
- Badge grid, each with icon + label:
  - First Gift (unlocked)
  - Faithful Giver (unlocked)
  - Cheerful Heart (locked/greyed out — not yet earned)

---

## Open items / to confirm
- [ ] Does every gift trigger the badges screen, or only when a new badge is unlocked?
- [ ] "Give to Us" flow — does it skip the "Select church" step since it's platform-directed?

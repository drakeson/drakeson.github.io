# Prayista — Screen Spec: Shop

**Flow:** Grid → Item detail → Cart → Checkout → Confirmation → Tracking

---

## 1. Shop grid

- Title: "Shop"
- 2-column grid of products, each with: thumbnail, name, price (e.g. "Grace Tee — $24.00")

---

## 2. Item detail

- Banner image
- Product name (e.g. "Grace Tee")
- Price, bold (e.g. "$24.00")
- Size pills: M / L / XL (selectable, one active at a time)
- Description text
- "Add to cart" button

---

## 3. Cart

- Title: "Cart ([count])"
- Line items, each: thumbnail, name + variant (e.g. "Grace Tee · M"), price, quantity (e.g. "×1")
- Subtotal row (bold, bottom)
- "Checkout" button

---

## 4. Checkout (delivery + payment)

- Title: "Checkout"
- "Delivery address" field
- Payment method row (saved card, e.g. "Visa •••• 4021", selected/checkmarked)
- "Place order · $[total]" button

---

## 5. Order confirmation

- Checkmark icon
- Title: "Order placed!"
- Detail line: order number + delivery estimate (e.g. "Order #4041 · Arriving in 5–7 days")
- "Track order" button

---

## 6. Order tracking / status

- Title: "Order #[number]"
- Vertical timeline: Order placed ✓ (date), Shipped ✓ (date), Delivered (estimated date, pending/unchecked)

---

## Open items / to confirm
- [ ] Is "Add new payment method" available here too (like Give Out), or is checkout limited to already-saved cards?
- [ ] Multiple delivery addresses — saved list, or single address field each time?

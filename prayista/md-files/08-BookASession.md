# Prayista — Screen Spec: Book a Session

**Flow:** Browse pastors → Pastor detail → Select date & time → Session topic & fee → Booking confirmation → My Sessions → Empty state

---

## 1. Browse pastors

- Title: "Book a Session"
- List, each row: initials avatar, pastor name, church, specialty tags (e.g. "Grief", "Marriage"), fee (e.g. "$25")

---

## 2. Pastor detail (bio, availability)

- Initials avatar (large), name, church
- Bio text (e.g. "15 years pastoring, focused on grief counseling and marriage restoration.")
- "Available this week" — day pills (e.g. Wed selected, Thu, Fri)
- "Book · $[fee]" button

---

## 3. Select date & time slot

- Title: "Select date & time"
- Date pills (e.g. 21, 22, **23** selected, 24, 25)
- "Available times" — time pills (e.g. 9:00 AM, **2:00 PM** selected, 4:30 PM)
- "Continue" button

---

## 4. Session type / topic & review & fee

- Title: "Session topic"
- Text input, placeholder: "e.g. Marriage counseling"
- Summary row: pastor name, date/time
- Fee line (bold, e.g. "$25.00")
- "Continue to payment" button

---

## 5. Booking confirmation

- Checkmark icon
- Title: "Session booked"
- Detail line (e.g. "Pastor Lee · Wed, Jul 23 · 2:00 PM")
- "View my sessions" button

---

## 6. My Sessions (upcoming / past)

- Title: "My Sessions"
- Tabs: Upcoming / Past
- List, each row: pastor name, date/time, format (e.g. "Video call")

---

## 7. Empty state (no sessions)

- Icon (calendar-style)
- Title: "No sessions yet"
- Description: "Book a prayer session with a pastor from your followed churches."
- "Browse pastors" button

---

## Open items / to confirm
- [ ] Where does the payment step happen — after "Continue to payment," is it the same Payment method screen as Give Out, reused?
- [ ] Can a session be cancelled/rescheduled from "My Sessions," and if so what's that flow?

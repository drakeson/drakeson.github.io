# Prayista — Screen Spec: Events & Livestream

**Flow:** Events list → Event detail → Livestream (live) → Livestream (offline)

---

## 1. Events list

- Title: "Events"
- List of event cards, each with:
  - Colored thumbnail
  - Date + time (e.g. "AUG 3 · 6:00 PM")
  - Event title (e.g. "Youth Night")
  - Church + location (e.g. "Grace Community · Main Hall")

---

## 2. Event detail

- Banner image (gradient)
- Title (e.g. "Youth Night")
- Calendar icon + date/time row
- Pin icon + location row
- Description text
- "+ Add to calendar" button

---

## 3. Livestream (live)

- "LIVE" badge, top-left, red
- Video embed area (YouTube embed)
- Below the player: stream title (e.g. "Sunday Service"), church + live viewer count (e.g. "Grace Community · 1,204 watching")

---

## 4. Livestream (offline state)

- Dark screen, muted icon
- Title: "No stream right now"
- Description with the next scheduled service (e.g. "Grace Community's next service starts Sunday at 9:00 AM.")
- "Remind me" button — sets a notification reminder for when the stream goes live

---

## Open items / to confirm
- [ ] Is the Livestream screen reached only from the Home LIVE banner, or also from a church's detail page / Events list?
- [ ] Does "Remind me" require the notifications permission, and where does the reminder show up (push notification → Notification detail screen)?

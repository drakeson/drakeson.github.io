# Prayista — Screen Spec: Home

**Flow:** Home → Notifications list → Notification detail → Search

---

## 1. Home

**Header**
- Avatar (initials badge, e.g. "JD")
- Greeting text, two lines: "Good morning" / "Jane" (first name, bold)
- Three quick-icons, right-aligned:
  - Bible icon → opens Bible tab
  - Book Session icon (calendar/session glyph) → opens Book a Session flow
  - Notifications icon (bell) → opens Notifications list

Top to bottom, below header:

**1. LIVE banner**
- Full-width maroon banner
- Live pulse dot + label: "LIVE · Sunday Service"
- "Watch ›" button, right-aligned
- Tapping opens the Livestream screen
- Only shows for churches the user follows; hidden entirely when no followed church is live

**2. Daily Quote — horizontal card row**
- Section header: "Daily Quote" (left) + **Saved Quotes button** (right) — bookmark/heart icon button that opens the user's Saved Quotes list
- Below the header: a **horizontal scrollable row of quote cards** (not a single static card)
  - Each card contains:
    - Quote text (italic, in quotation marks)
    - Reference (e.g. "Psalm 46:10")
  - Cards are swipeable left/right; first card is today's quote, followed by recent quotes (yesterday, 2 days ago, etc.)
  - Tapping a card opens Quote detail (see Daily Quotes screen spec)

**3. Upcoming Events**
- Section header: "Upcoming Events" (left) + "See all" link (right)
- Horizontal scrollable row of event cards
  - Each card contains:
    - Colored image/placeholder thumbnail
    - Date label (e.g. "AUG 3")
    - Event title (e.g. "Youth Night")
  - Tapping a card opens Event detail

**4. Shop**
- Section header: "Shop" (left) + "See all" link (right)
- Horizontal scrollable row of product thumbnails (plain image squares, no text on Home — names/prices shown in full Shop screen)
- Tapping a thumbnail opens Item detail in Shop

**Bottom navigation — curved nav bar**
- 5 tabs: Home, Media, Pray, Bible, Profile (icon + label each)
- Active tab highlighted (icon + label in accent color)

**Vale FAB**
- Floating circular button, bottom-right, overlapping the nav bar
- Sparkle icon
- Tapping opens Vale (AI Voice Prayer Assistant)

---

## 2. Notifications list

- Header: "Notifications" (page title, no back arrow — this is a root-level screen reached from the bell icon)
- Vertical list of notification rows, each with:
  - Icon (varies by type: bell = livestream, praying hands = prayer activity, checkmark = confirmation, etc.)
  - Title text (e.g. "Grace Community is live now")
  - Timestamp (e.g. "2m ago")
- Tapping a row opens Notification detail

---

## 3. Notification detail

- Back navigation: "‹ Notifications" (top-left, returns to list)
- Centered icon avatar (bell in circle)
- Title (e.g. "Grace Community is live now")
- Description text (e.g. "Sunday Service just started streaming. Tap below to join in worship.")
- Primary CTA button (e.g. "Watch livestream") — action depends on notification type

---

## 4. Search

- Search input field, placeholder: "Search churches, quotes, sermons…"
- Filter chips below input: All (default selected), Churches, Sermons, Quotes
- "RECENT" section: list of recent searches, each with a small icon + search term/result name
- Tapping a filter chip narrows results to that category; tapping a recent item re-runs that search

---

## Open items / to confirm
- [ ] Daily Quote card row — confirm number of cards visible at once and whether it auto-scrolls or is manual-swipe only
- [ ] Saved Quotes button — confirm icon (heart vs. bookmark) and whether it shows a count badge

---
*This is a living spec — flagging anything above that doesn't match your intent, and I'll revise before we move to the next screen.*

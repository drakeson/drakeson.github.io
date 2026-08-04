# Prayista — Screen Spec: Vale (AI Voice Prayer Assistant)

**Flow:** Idle → Listening → Thinking → Speaking → Prayer mode → Settings
**Plus:** Response/transcript view, Session history, Prayer streak, Mic permission, Error state

---

## 1. Vale idle

- Dark full-screen background
- "Vale" title, top-center
- Center: glowing gradient orb (Vale's "presence")
- "Tap to talk with Vale" caption below orb
- Three quick-action pills at the bottom: **Guide me**, **Scripture**, **Reflect** — shortcuts into a themed conversation without free-form talking

---

## 2. Listening

- Same dark background + orb
- Small audio waveform icon under the orb
- "Listening…" caption
- Red circular **X (cancel)** button below — stops listening and returns to idle

---

## 3. Thinking

- Orb (static/pulsing, no waveform)
- Caption: "Vale is reflecting…"
- No user controls shown — transient state while a response is generated

---

## 4. Speaking + live transcription

- Orb animates while Vale speaks
- Live transcript bubble of what Vale is saying (e.g. "Let's take a breath together. Lord, thank You for this moment of stillness…")
- Circular **stop/pause** button below to interrupt

---

## 5. Prayer mode

- "PRAYER MODE" label, top
- Orb, center
- A scripture quote (italic) + reference, styled like a devotional card
- "Amen 🙏" button at the bottom — confirms/closes the prayer

---

## 6. Response with scripture reference (chat/transcript view)

- Back nav: "‹ Vale"
- Chat-style thread:
  - User message, right-aligned, maroon bubble (e.g. "I'm anxious about tomorrow's exam.")
  - Vale's response, left-aligned: reply text + an italic scripture citation with reference (e.g. "Do not be anxious about anything…" — Philippians 4:6)
- Text input at the bottom: "Ask Vale anything…" — lets the user type instead of speaking

---

## 7. Session history

- Title: "Vale History"
- List of past sessions, each row:
  - Session topic/title (e.g. "Anxious about exams")
  - Timestamp (e.g. "Today")
  - Message count (e.g. "5 messages")
- Tapping a row presumably reopens that transcript (same layout as screen 6)

---

## 8. Prayer streak + growth ring

- Title: "Your Journey"
- Circular progress ring with a percentage in the center (e.g. "72% growth")
- Below: streak counter with flame icon (e.g. "14-day streak")

---

## 9. Vale settings

- Title: "Vale settings"
- Rows:
  - Voice — e.g. "Warm (Female)" with chevron to change
  - "Wake on 'Hey Vale'" — toggle
  - "Save conversations" — toggle
  - Privacy & data — chevron link

---

## 10. Microphone permission request

- Dark background, microphone icon (muted style)
- Title: "Vale needs your microphone"
- Description: "To talk and pray with you, Vale listens only while you're speaking."
- "Allow microphone" button
- "Not now" text link

---

## 11. Error / no connection

- Dark background, warning icon
- Title: "Vale can't connect"
- Description: "Check your internet connection and try again."
- "Try again" button

---

## Open items / to confirm
- [ ] Does "Save conversations" off disable Session history entirely, or just stop saving new ones?
- [ ] What happens to the growth ring / streak if a day is missed — does the streak reset to 0 or pause?

# Prayista Glass — Design System

**Prayista** is a modern faith-tech platform for Christian communities — one home for prayer, worship, sermons, giving, cells (small groups) and connection with your church. Two products share this system:

- **User App** — the congregation-facing mobile app (daily quotes, prayer & testimony feed, cells, sermons/media, events, giving, shop, voice-AI prayer agent, offline Bible).
- **Church App** — the admin-facing app churches use to manage daily quotes, events, sermons, orders/items, cells and notifications for their congregation.

**Design system name:** Prayista Glass — a glassmorphism system (frosted, blurred glass cards on an adaptive light/dark backdrop) built around one signature move: a **concave-curved red header** on primary screens and a matching **curved bottom navigation bar**. Detail screens (login, write, settings-style flows) drop the curve for a standard flat header/nav.

## Sources
- **Figma**: "Prayista Platform.fig" (mounted; not a shareable URL) — pages `Users-App` (97 frames), `Churches-App` (16 frames), `Website` (5 frames, out of scope for this import). This file is the ground truth for components, layout geometry, colors and copy.
- **Uploads**: `design_system.md` (SwiftUI/Compose spec matching the brief exactly), `prayista_development_overview.md` (feature/architecture overview), `voice_ui_ux_design.md` (voice-AI prayer agent UI spec), `mvvm_architecture.md`, `mvvm_clean_architecture.md`, `local_storage_implementation.md`, `offline_bible.md` (engineering references, not design), `Prayista.pdf`, plus product photography (`1.png`–`6.png`, `mob.png`, `mobi.png`, `Artboardq.png`) and `logo.png` (the real brand mark).
- Scope for this import was narrowed to the **Users-App** and **Churches-App** frame trees; the **Website** page exists in the file but was left out of scope.

## Index
- `tokens/` — colors, typography, spacing, effects (glass/shadow/motion) → imported by root `styles.css`
- `components/core/` — reusable primitives materialized from Figma (list below)
- `assets/icons/` — the extracted glyph set (`Icon.jsx` + `icon-data.js`)
- `assets/logos/`, `assets/imagery/` — brand mark + photography
- `ui_kits/users-app/`, `ui_kits/churches-app/` — click-through screen recreations
- `guidelines/` — specimen cards for the Design System tab
- `SKILL.md` — Claude Code–portable skill version of this system

## Components
Materialized 1:1 from the Figma component sets (`components/core/`):
`Button`, `TextField`, `TextArea`, `SearchBar`, `Navbar` (body/bottom, light/dark, blur), `VerticalNavItem`, `BuildingBlocksNavItem`, `XTab`, `XHomeIndicator`, `IconWrapper`, `MetricItem`, `TextText`, `Close`, `Plus`, `Xmark`, `Cancel`, `Magnifyingglass`, `Mic`, `IMicAndroid`, `Gear`, `EyeInvisible`, `Icons01`, `Image`, `Image2`, `BuildingBlocksHeadline`, `BuildingBlocksSectionHeader`, `ReviewOrderAddressField`, `ReviewOrderDeliveryTimeField`, `AlphabeticLight` (the on-screen keyboard block), `HorizontalMiddleInset`.

Icon glyph set (`assets/icons/`, `Icon.jsx`): `IconSolidHome`, `IconSolidLocationMarker`, `IconSolidMail`, `IconSolidLightningBolt`, `IconSolidUserCircle`, `ChevronRight`, `StarFill`, `PlusCircle`, `PlusSquare`, `BxBxBible`, `EpShoppingCartFull`, `IconsFacebookFill`, `IconsTwitterFill`, `IconsInstagramFill`, `IconsYoutubeFill`, `IconsCopyrightLine`, `IconsSendPlane2Fill`, `IconsFillFacebookFill`, `IconsFillInstagramFill`, `IconsFillTwitterFill`, `IconsFillYoutubeFill`, `IconsFillBusinessSendPlane`, `Icons02`, `Icons03`, `Icons04`.

**Intentional additions** (not literal Figma components, needed to recreate the signature pattern): the concave **CurvedHeader** shape used inline on Home/Prayer/Cell/Write screens is not its own component in the file — it's redrawn per screen as an inline SVG path (`M 0 0 L 430.5 0 L 430.5 78.5 C 430.5 78.5 312.5 112 216 112 C 119.5 112 0 78.5 0 78.5 L 0 0 Z`, captured as `--curve-header-path` in `tokens/effects.css`) — the UI kits reuse this exact path rather than inventing a new curve. A generic `GlassCard` style (blur + gradient sheen + hairline border) is likewise a pattern, not a named component; it is only ever applied inline using the tokens below, matching how the Figma file itself repeats it.

**Not built** (in scope of the file but outside the user's Users-App/Churches-App scope): `App Store - eng`, `Google Play - eng` badges — these live only on the out-of-scope `Website` page. The `text/text` family (32 hierarchy/list/icon variants) is largely superseded by plain styled `<span>`s per screen in the source; only its default state was materialized as `TextText`.

## Fonts
No font binaries were attached and Figma exports no `@font-face`. Headings use **Helvetica Neue / SF Pro Display** and body uses **Lato / Roboto**, both declared with full system fallback stacks (they render correctly on iOS/macOS out of the box). Sacred text (verses, prayers) uses **Georgia / Noto Serif** — Georgia is a system font; Noto Serif is loaded from Google Fonts. Lato, Roboto, Inter and Poppins (used sparingly on the Churches-App shell) are loaded from Google Fonts in `tokens/typography.css`. **Ask:** if you have the real Helvetica Neue / SF Pro Display font files, attach them and I'll swap in true `@font-face` — until then those two render via their system-font fallback, which is visually very close on Apple devices but not guaranteed elsewhere.

## Content fundamentals
- **Address the reader directly and simply**: "Login With Phone Number," "Get SMS," "Select Prayer Request or Testimony," "Hi Prayista Church," "You have 4 pending Orders today." Second person, no jargon.
- **Two-tone headings** are the signature copy pattern: a neutral lead word set in `--gray-text`/`--text-tertiary`, with the topical word in **Primary Red** — e.g. *Daily Quotes*, *Colour Conference*. Section headers on Home/Prayer screens pair a plain label with a single emoji: "Daily Quotes 📜", "Upcoming Events 📆", "Shop 🏪", "Prayer Requests 🙏🏽", "Testimonies 😊".
- **Emoji are used, sparingly and consistently** — one trailing emoji per section title, plus small inline emoji as timestamp/status markers ("⏱️ 31 mins Ago", "📍 Watoto Church DW", "📅 21-11-2022", "📖 Read More", "🙏🏽 Pray that...", "☺️ I began attending...").
- **Marketing lockup**: "Pray | Testify | Grow" appears on hero/social imagery as the brand's three-word promise — reverent, plain, no exclamation points.
- **Tone**: warm and reverent without being formal or corporate; conversational but not casual/childish. Testimony and prayer copy is written in first person, unpolished and personal (real community voice), while UI labels stay short and directive ("View More", "Read More", "Write Prayer").
- **Casing**: sentence case for body copy and testimonies; title case for nav labels and section headers; no ALL CAPS except tiny badges (e.g. "NEW YORK TIMES BESTSELLER" in sourced photography, not UI chrome).

## Visual foundations
- **Colors**: Primary Red `#CF0723` (light) / `#FE6D73` (dark) is the only saturated brand color — used for headers, primary buttons, links-as-accents, and the floating action button ring. Background is off-white `#FDFFFC` in light mode; a 45° gradient `#5F5F5F → #161616` in dark mode. Text is `#000`/`#666` (light) or `#FFF`/`#CCC` (dark). Voice-agent states borrow four extra hues that appear nowhere else in the UI: Listening green `#4CAF50`, Thinking blue `#2196F3`, Speaking orange `#FF9800`, Prayer purple `#9C27B0` — reserve these strictly for the voice-AI prayer agent's state ring, never as general UI accents.
- **Type**: Headings in Helvetica Neue/SF Pro Display (bold, tight 100% line-height, often centered in the curved header); body in Lato/Roboto; sacred text (verses, prayers) in a serif (Georgia/Noto Serif) to visually separate scripture from UI chrome. Scale: display 32 bold, title1 28, title2 22, title3 20, body 16, caption 14, small 12.
- **Spacing/radius**: 4/8/16/24/32/48 spacing scale; radius 8 (buttons/inputs), 16 (cards), 24 (major containers), 32 (special/FAB elements), plus full-pill and full-circle for tabs and avatars.
- **Backgrounds**: no illustration or pattern system — full-bleed photography (event thumbnails, product shots, prayer/testimony avatars) inside glass cards, plus one full-screen radial "Glass Morphism" wash (`radial-gradient` white-to-transparent + `backdrop-filter: blur(42px)` + a near-invisible inset shadow) layered behind every primary screen to unify the glass cards sitting on top of it.
- **Glass cards**: `background: linear-gradient(~120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)`, `backdrop-filter: blur(42px)`, a 1px `rgba(137,138,141,0.2)` hairline border (via box-shadow), 16px radius, and either a soft `0 4px 4px rgba(0,0,0,0.25)` drop shadow or none depending on whether the card sits over photography. Product/shop cards use a bottom glass "shelf" (a partial-height gradient strip anchoring the price/name text) rather than a full-card glass fill.
- **The curved header**: every primary screen (Home, Prayer, Cell, Write, Media, Profile) opens with a Primary-Red header whose bottom edge is a smooth concave curve dipping toward the center — drawn as a single SVG path (`--curve-header-path`), not a CSS `border-radius`. Screen title is centered in white Helvetica Neue Bold 20px; a Bible icon sits at the far left, a context icon (play/edit/add) at the far right, both in off-white at 32×32.
- **Curved bottom nav**: the five-tab bottom nav (`Navbar`, type=bottom) floats as a single glass bar the width of the screen, home/cells/media/pray/profile icons in a light translucent tint with the active tab in solid white text+icon; a red circular floating action button overlaps the nav on tabs that support quick-create (write prayer, add cell).
- **Detail screens** (Login, Auth Code, Register, Write, Add-Cell) drop the curve for a flat header or none at all — full-bleed photography on Login, a plain red top band with centered title elsewhere — signaling "you've stepped out of the main tab flow."
- **Motion**: not specified in the source beyond standard state changes (hover/press → `Button`'s `state` variants: normal/hovered/active/disabled); treat transitions as simple opacity/scale (`scale(1.02)` on touch per `design_system.md`) at ~150–250ms, no bounce.
- **Imagery color vibe**: warm, low-key, slightly desaturated documentary photography (worship, community, prayer) — never bright/saturated stock-photo lighting; several hero images carry a subtle red or amber duotone wash that echoes the brand red.
- **Corner radii**: 8px buttons/inputs, 10px small photo thumbnails, 16px cards, 24px large containers, 50%/pill for avatars, tabs and the FAB.
- **Transparency & blur**: reserved for two situations — the full-screen ambient wash behind every primary screen, and glass cards/nav bars sitting above photography or the wash. Flat screens (login, detail forms) use solid backgrounds with no blur.

## Iconography
- The file defines a small custom glyph set (line icons, ~24×24–32×32, single-color, `currentColor`-able) rather than adopting a public icon font — copied verbatim into `assets/icons/icon-data.js` (see `Icon.jsx`). A few icons (bottom-nav bible/play/pen) are inlined per-screen as raw `<svg>` paths rather than componentized; the UI kits reuse those exact paths.
- No emoji-as-icon usage in navigation chrome; emoji appear only in copy (see Content fundamentals) as decorative markers, never as functional icons/buttons.
- No icon font, no Unicode symbol icons. Social icons (`Icons/fill/facebook-fill`, `twitter-fill`, `instagram-fill`, `youtube-fill`, `send-plane-2-fill`) exist for the Website footer (out of scope here) but were still extracted since the icon set was materialized as one file.
- The one real brand mark in the source is `assets/logos/prayista-mark.png` (uploaded, dark tile) plus `assets/logos/prayista-navbar-mark.png`, a small bitmap used repeatedly at 24×24 in navbars — copied verbatim, never redrawn. No other logo lockups (horizontal, monochrome, etc.) were provided.

## Voice-AI prayer agent
A cross-cutting feature, not a screen family in the Figma scope, but its four state colors are part of the token set (`--voice-listening`, `--voice-thinking`, `--voice-speaking`, `--voice-prayer`) per `voice_ui_ux_design.md`: green while listening, blue while the AI is thinking, orange while it speaks, purple during guided prayer. Reserve these exclusively for that state indicator.

## Caveats
- No Figma Variables collection and no named text/effect styles exist in this file — all tokens below are transcribed from raw fills/typography usage plus the explicit brand spec in `design_system.md` (which matches this brief verbatim).
- Two heading fonts (Helvetica Neue, SF Pro Display) have no attached font files — rendering on system fallback; ask the user for the real files if pixel-exact type is needed.
- `Website` page and its two badge components (`App Store - eng`, `Google Play - eng`) were out of the user's selected scope and were not built.

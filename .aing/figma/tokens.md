# Design Tokens — Figma Spec

> **Source note**: `get_metadata` only returns layer bounds / names, not fills or typography styles. The hex values and weights below are *inferred from existing tokens in `app/globals.css` + visual pattern in the file*. Confirm each color and type against a `get_design_context` pull (or Figma screenshot) on the listed reference nodes before locking.

## Grid & layout

| Token | Value | Source node |
|---|---|---|
| Page viewport | `1440px` | all top-level frames |
| Content max | `1200px` | `10:3900`, `10:4316`, `10:4381` … |
| Side gutter | `120px` (desktop) | gap between 1440 edge and 1200 content |
| Column count | 12 (inferred; hero decoration `10:3907` uses 10 columns in a smaller 789-wide decorative grid — not the layout grid) |
| Section vertical padding | `80–128px` top · `48–64px` bottom typical | see home.md |
| Inner section padding | `48–80px` all sides around the 1200 grid | `10:4090 x=120 y=80`, `10:4241 x=120 y=48` |

## Colors

Use these as a baseline; verify via design context call.

| Role | Candidate hex | Figma reference | Notes |
|---|---|---|---|
| `--bg` / page surface | `#FFFFFF` | most frames | |
| `--fg` / primary text | `#0B1220` or true black | Section titles, body on white | confirm — could be near-black |
| `--muted` | `~#6B7280` | captions, "Total 5", sub-copy | existing token |
| `--border` / hairline | `~#E5E7EB` | 1px dividers in Key Metrics section (`10:4041`) | |
| `--brand` | TBD — likely a saturated blue | Contact CTA background (Section 7 `10:4367`), hero right-card (`10:3953`), R&D Center background (`10:4241`), chip accents | **Most important** — pull `get_design_context` on `10:4367` to confirm. Current code uses `#2B4BFF` which looks close but verify. |
| `--brand-hover` | derivative darker blue | — | keep current `#1E3ADF` unless design says otherwise |
| `--ink` / dark surface | `#0B1220` or `#0F1224` | **Hero background likely dark**; but note — Figma home hero `10:3903` is NOT drawn with a dark fill at 680px. The grid-line decoration is on white. ⚠️ **Contradiction with current code**: the current `Hero.tsx` renders a dark hero (`bg-dark`), but Figma home hero appears to be light/white with a graph-paper overlay. Confirm with screenshot. |
| `--brand-kidsda` | soft pink | KidsDa portfolio card | current `#FFD4D4` plausible |
| `--brand-toky` | off-white cream | TOKY card | current `#F5F5F3` plausible |
| `--brand-qentix` | near-black | Qentix card | current `#0B1220` plausible |

### Accent / decorative

- Soft circle decorations (Contact CTA, R&D Center): **brand-tinted large blurred circles** (`600×600` and `800×800` rounded rects with `-300` negative offsets). In current code, these are implemented as `bg-brand/20 blur-[150px]` — keep that pattern.
- Hairline 1px dividers in Key Metrics and Footer: `border-soft` (`#F0F2F5`–`#E5E7EB`).
- `48×4` accent bars under metric numbers (e.g. `10:4049`): solid brand.
- `40×2` accent bars under card titles (e.g. `10:3990`): solid fg/ink color.

## Typography

Figma text node metadata exposes text *bounds* but not font-family / size / weight. These are best-guesses keyed to visual bounding boxes plus the spec rail's "Description" cues. Treat as a starting point.

**Font family (assumed):** Pretendard Variable (Korean + Latin) — keep current setup. Designers in KR generally use Pretendard for this type of corporate site.

### Type scale (inferred from frame heights)

| Role | Example node | Frame height | Approx font-size | Use |
|---|---|---|---|---|
| Display XXL (Hero H1) | `10:3947` "We Design Technology." | 183 | `~150px` / 1 | Home hero headline only |
| Display XL (Section H2) | `10:3977` "기술로 산업의 미래…" | 120 (3 lines) | `~64–72px` / 1.1 | "Business Portfolio." / "함께 성장할 파트너…" / Contact CTA |
| Display L | `10:4322` "WeGo Now." | 48 | `~40–48px` / 1.05 | smaller section H2 |
| Display M (metric number) | `10:4048` "200+" | 60 | `~56–60px` / 1 | KPI big numbers |
| Heading L (card title) | `10:3989` "On-Device AI", `10:4112` "KidsDa · 키즈다" | 32 | `~28–32px` / 1.2 | portfolio card title, industry card title |
| Heading M | `10:4064` "Security" (metric label) | 28 | `~24–26px` | metric labels |
| Body L | `10:4658`/`10:4665` philosophy copy | 24 | `~16–18px` / 1.5 | hero sub, description paragraphs |
| Body M | `10:3950` "기술을 설계하는 팀…" | 33 | `~14–16px` / 1.5 | card body |
| Body S | `10:4096` "위고컴퍼니는…" | 59 | `~13–15px` / 1.55 | captions, footer address |
| Caption | `10:3996` "PRIVACY FIRST" | 16 | `~11–12px` / 1.3, tracking 0.15–0.25em | eyebrow tags / chip labels |
| Eyebrow | `10:3945` "We Design Technology", `10:3975` "WHO WE ARE" | 20 | `~12–14px` uppercase, tracking 0.25–0.3em | section eyebrows |
| Tiny chip | `10:4108` "#AI_Education" | 17 | `~11–12px` | hashtag pills |

### Weights
- Display: 700 (Bold) or 800 (ExtraBold)
- Heading: 600–700 (SemiBold / Bold)
- Body: 400–500
- Eyebrow / chip: 600 uppercase with letter-spacing

### Letter-spacing
- Display: tight `-0.02em` to `-0.04em` (numbers are close-packed)
- Eyebrow / chip / nav: wide `0.15em–0.30em`
- Body: default or `-0.01em`

## Radii

| Token | Value | Evidence |
|---|---|---|
| `radius-chip` | `14–16px` | tag pill `10:4107` height 29, capsule feel |
| `radius-button-pill` | `full` (22px) | Contact Us button `10:4453` is `136×44` rounded-full |
| `radius-card` | `24px` | portfolio card edges (inferred from visual) |
| `radius-card-lg` | `28–32px` | hero right-card (`10:3955` 416-tall), Contact CTA panel |
| `radius-decoration-lg` | `300px+` | giant glow circles (`10:4368` 600×600 rounded) |

## Shadows / effects

Not present in metadata (shadow is a style effect, not a node). Based on the visual style (minimalist corporate):
- Cards: none or extremely subtle (`0 1px 2px rgba(0,0,0,.04)`)
- Glowing decorations use `blur` via the `600×600` rounded rects behind content, not CSS `box-shadow`
- Contact button: no shadow; relies on color contrast

## Icon sizes

| Size | Usage |
|---|---|
| `16×16` | inline icons inside labels, bullet checkmarks (e.g. `10:4120`), arrow icons in card footers |
| `20×20` | tag-pill trailing caret, partnership row arrow |
| `24×24` | industry card glyph (inside `48×48` tile), CTA button arrow |
| `28×28` | Tech Intro card glyph (inside `56×56` tile) |
| `36×36` | floating brand badge on portfolio cards (inside `80×80` circle) |

## Tokens to add to `globals.css` (new, not present)

None strictly required if current tokens are color-accurate. But consider adding:
- `--radius-xs: 14px; --radius-sm: 16px; --radius-md: 24px; --radius-lg: 28px; --radius-xl: 32px;` so card radii are explicit.
- `--tracking-eyebrow: 0.25em;`
- `--tracking-chip: 0.15em;`


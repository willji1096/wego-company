# Home Page — Figma Spec

**Node**: `10:3898` (위고 컴퍼니 홈페이지 (Type 1. Home)) — Screen ID `WEGO_HOME_001`
**Viewport**: `1440 × 5579` (outer), inner content grid `1200px` (120px side gutters)
**Screenshot URL helper**: `figma.com/design/cJprv3qyTg8biSgUJldrPU/?node-id=10-3898`

## Section order (top → bottom)

| # | Section | Figma frame | Y (in 5178 body) | Height |
|---|---|---|---|---|
| 0 | Global Header | `10:4429` | 0 | 81 |
| 1 | Hero | `10:3903` | 128 | 680 |
| 2 | WHO WE ARE / 3 pillar cards (Intro) | `10:3970` | 808 | 706 |
| 3 | Performance / Key Metrics (4 KPIs) | `10:4032` | 1514 | 450 |
| 4 | Our Works / Business Portfolio (3 brand cards) | `10:4089` | 1964 | 1088 |
| 5 | R&D Center / Partners grid (4 industry cards) | `10:4240` | 3052 | 689 |
| 6 | Updates / WeGo Now (4 news cards) | `10:4315` | 3741 | 653 |
| 7 | Contact CTA (full-bleed blue panel) | `10:4366` | 4394 | 736 |
| 8 | Footer | `10:4380` | 5178 | 401 |

Note: header is rendered LAST in Figma's XML but is positioned at top (`y=0`). In code it stays a global site chrome.

---

## 0. Header (`10:4429`)

- Height `80px`, full-width `1440`, inner `1264` (88px horiz. padding).
- **Left logo**: `WEGO` wordmark, 32px tall block, at `x=120 y=24` (= 32+88). No tagline word next to it.
- **Center nav**: 5 items in a `305px` pill, `40px` tall, starts at `x=533` in the inner. Order: **Home · About (with chevron) · NEWS (with chevron) · IR (with chevron)**. Chevrons suggest About/NEWS/IR are currently designed with sub-menu dropdowns (but no submenu frames exist — likely future state; render as small `16×16` chevron icons for visual parity).
- **Right CTA**: rounded-full button `136 × 44`, label **"Contact Us"** (no arrow icon), positioned at `x=1096`.
- **On Home only**: header overlays the hero, so text must be legible on dark hero background. Frame metadata doesn't say `position:fixed` explicitly, but the other page frames (About/IR/etc.) all start their content at `y=81` and the header band is `81` tall — so header is sticky/fixed on real site.

## 1. Hero (`10:3903`) — 680px tall

Two-column grid inside a `1200×600` group (`10:3904` at `x=120 y=0`):
- **Left column** `10:3905` `789×600` at `x=120 y=0` — contains a dense vertical+horizontal grid-lines decoration (`10:3907`, 10 columns × ~25 horizontal rulings, very light hairlines) positioned slightly bleed-negative (`x=-79 y=-60 w=946 h=720`) — it's a graph-paper backdrop.
  - Eyebrow pill: "We Design Technology" — `28px` tall, at `y=0` inside a `661px` content block (`10:3943` x=64 y=106).
  - **H1**: "We Design Technology." — `661×183` block at `y=59`. Huge display type.
  - Sub-copy stack at `y=273`:
    - line 1 (33px tall, 381px wide): "기술을 설계하는 팀, 산업의 미래를 디자인합니다."
    - line 2 (24px tall, 329px wide): "AI와 블록체인의 융합으로 새로운 가치를 창출합니다."
- **Right column** `10:3952` `379×600` at `x=941`:
  - **Big card** `10:3953` `379×416` (rounded rectangle `10:3955`, no image — solid/gradient surface). Bottom-left cluster (`10:3956` at `x=32 y=320`): `Since` label (20px) + `2018` big number (40px tall).
  - **Link block below card** `10:3961` `379×160`:
    - Label "Company Profile" (20px line-height)
    - CTA row: "View About" (32px tall, 127px wide) + `→` arrow in a 40×40 square on the right.

### Hero copy (verbatim)
```
Eyebrow: We Design Technology
H1:      We Design Technology.
Sub 1:   기술을 설계하는 팀, 산업의 미래를 디자인합니다.
Sub 2:   AI와 블록체인의 융합으로 새로운 가치를 창출합니다.
Card:    Since 2018 · Company Profile · View About →
```

## 2. WHO WE ARE — 3 pillar cards (`10:3970`) — 706px tall

Inner `10:3971` `1200×546` at `x=120 y=80`.

**Header row** `10:3972` `1200×152`:
- Left block `375×152`:
  - eyebrow "WHO WE ARE" (`20px`, 99px wide)
  - H2 `375×120`: "기술로 산업의 미래를 디자인합니다" (multi-line, body-copy sized huge heading)
- Right block `10:3978` at `x=752 y=46.5`, `448×59`:
  - "위고컴퍼니는 AI와 보안 기술의 융합으로 교육, 보안, 라이프스타일 산업의 미래를 설계하는 기술 전문기업입니다." (3 lines @ ~19px leading)

**3-card row** `10:3980` `1200×346` at `y=200`, three `384×346` columns (24px gaps):

| Card | Big numeral (76×72) | Icon (56×56) | Title (32px) | Body (13-16px, 103px block) | Tag pill |
|---|---|---|---|---|---|
| 01 | `01` | filled dark circle w/ 28×28 icon | **On-Device AI** | "클라우드 없이 기기에서 직접 작동하는 AI. 데이터 외부 유출 없는 Privacy First 기술로 실시간 경량화 솔루션을 제공합니다." | `PRIVACY FIRST` + arrow |
| 02 | `02` | same shape | **Innovation** | "위조 불가능한 디지털 신뢰 기술. AI 검증 + 워터마크 + 블록체인 3중 보안으로 복제·해킹을 원천 차단합니다." | `DIGITAL TRUST` + arrow |
| 03 | `03` | same shape | **Expansion** | "아이와 함께 성장하는 어린이 전용 AI. Peer+1 페르소나와 감정 분석으로 아이의 일상과 학습을 지원합니다." | `EDU-TECH` + arrow |

Card visual: white surface with a `240×240` rounded rectangle decoration (`10:3984` at `x=-80 y=186`) that bleeds off the bottom-left (it is a subtle off-canvas shape). There's a `40×2` accent rectangle under the title (divider). Tag pill has tiny caret/arrow (20×20) on the right edge.

## 3. Performance / Key Metrics (`10:4032`) — 450px tall

Inner `10:4033` `1200×354` at `x=120 y=48`; a further `10:4034` `1102×68` row at `(49, 49)`.

**Header row** `1102×68`:
- Left block `189×68`: eyebrow "Performance" (20px, 118px wide) + H2 **"Key Metrics"** (40px, 189px wide).
- Middle: thin horizontal rule (`10:4041` `615×1` — a 1px divider) starts at `x=189+48=237`.
- Right block `202×52` at `x=900`: body copy "데이터로 증명하는 위고컴퍼니의 압도적인 기술 퍼포먼스" (26×2 lines ≈ 52px).

**4-metric row** `10:4044` `1102×140` at `y=165`, each cell `≈240×140` with 48px gaps:

| # | Big number | Short title (28px) | Caption (20px) |
|---|---|---|---|
| 1 | **200+** | Patents | 특허 출원 및 등록 |
| 2 | **99.9%** | Security | QR 복제 공격 차단율 |
| 3 | **2W** | Onboarding | 계약 후 최단 도입 기간 |
| 4 | **2018** | Since | 위고컴퍼니 설립 |

Each metric has a `48×4` accent underline bar between the big number and the title (`10:4049` etc.). Number typography is `60px` tall block.

## 4. Our Works — Business Portfolio (`10:4089`) — 1088px tall

Inner `10:4090` `1200×928` at `(120, 80)`.

**Header** `10:4091` `1222×149`:
- Eyebrow "Our Works" (20px, 95px wide)
- H2 **"Business Portfolio."** — 2-line 96px tall, 175px wide
- Top-right `64×64` circle button (`10:4097` at `x=1150 y=85`) containing an `24×24` icon (arrow-up-right or arrow-right).

**Cards row** `10:4102` `1200×731` at `y=197`; three `379×731` cards spaced at `x=0 / x=410.5 / x=821.5`. Each card splits into:

- **Top image panel** `377×256`: image placeholder (dashed frame with no fill) — holds a product/lifestyle photo. Top-left a `122-174 × 29` rounded tag pill with a category hashtag.
- **Bottom content panel** `377×473`:
  - `313×344` text stack at `(32, 32)`:
    - Title (32px)
    - Sub-tagline (28–56px)
    - Description paragraph (52–68px block)
    - Feature bullet list (4 items, each `16×18` check icon + 20px line)
  - **Footer CTA row** `313×65` at `y=376`: "View Case Study" text + `40×40` arrow button
  - Floating `80×80` circle badge (`10:4141/4181/4225` at `x=265 y=-40`) overlapping the image panel boundary from the top (contains 36×36 icon, possibly brand logo).

### Card contents

**Card 1 — KidsDa**
- Tag: `#AI_Education`
- Title: **KidsDa · 키즈다**
- Sub: "Edu-Tech Platform / AI Journalism for Kids" (56px, 2 lines)
- Body: "아이가 매일 뉴스를 읽고, 영어 기사는 AI로 듣고, 생각을 기록하며 좋은 루틴을 만듭니다."
- Bullets:
  - SKT 키즈폰 ZEM 기본 탑재 (2026년 1월 출시)
  - 60년 전통 어린이 전문기자의 뉴스 + AI 요약 및 퀴즈
  - 키즈루틴 + AI 음성일기 + 부모용 감정 리포트
  - 읽고 이해하고 해결하는 기초 역량 교육

**Card 2 — TOKY**
- Tag: `#On-Device_AI`
- Title: **TOKY · 토끼**
- Sub: "On-Device AI Life Partner" (28px, 1 line)
- Body: "아이에게 처음으로 생기는 AI 친구. 함께 웃고, 함께 자랍니다."
- Bullets:
  - 7~13세 전용 Peer+1 페르소나
  - Privacy First — 온디바이스 처리, 외부 유출 없음
  - 감정 분석 + 장기 기억 RAG + 부모 감정 리포트

**Card 3 — Qentix**
- Tag: `#Blockchain_Security`
- Title: **Qentix · 큐엔틱스**
- Sub: "B2B Security-Tech Platform / Phygital Trust" (56px)
- Body: "QR코드로 복제·해킹·큐싱으로부터 귀사의 제품을 완전히 지킵니다."
- Bullets:
  - AI + 워터마크 + 블록체인 3중 보안 아키텍처
  - QR 복제 99.9% 차단 / 피싱 100% 차단
  - 계약 후 최단 2주 도입 · 전담 온보딩 매니저 배정

## 5. R&D Center / Partners (`10:4240`) — 689px tall

Inner `10:4241` `1200×593` at `(120, 48)` with a large `800×800` rounded circle decoration at `x=667 y=-267` (bleeds top-right of the section — a blue circle background).

Inside `10:4243` `1040×433` at `(80, 80)`, two columns:

**Left column `329×433`**:
- Pill `106×32` (rounded) with label **"R&D CENTER"** (16px, 74px wide, 8px top padding inside the pill)
- H2 `329×180`: **"함께 성장할 파트너를 찾습니다."** (huge — 4 lines @ ~45px)
- Body `329×88`: "위고컴퍼니는 교육·통신·보안·투자 각 분야의 파트너와 함께 AI 기술의 가치를 더 넓은 시장으로 확장해 나갑니다."
- Link row `298×29`: "파트너십 문의하기" (24px, 115px wide) + `20×20` arrow icon at `x=127`

**Right column `631×433`** — 2×2 grid of `304×208` cards with 24px gaps:

| | Left card | Right card |
|---|---|---|
| Row 1 | Icon + **교육 · 미디어** · "학교, 교육기관, 어린이 미디어사와 KidsDa를 통해 아이들의 문해력·루틴 교육을 혁신합니다." | Icon + **통신 · 하드웨어** · "통신사 및 스마트기기 제조사와 KidsDa · KUKI를 번들링해 아이 전용 AI 경험을 제공합니다." |
| Row 2 | Icon + **큐싱 방지 산업군** · "금융, 물류, 공공기관 등 QR 기반 피싱·해킹 위협이 높은 산업에서 Qentix로 100% 차단합니다." | Icon + **정품 인증 산업군** · "명품, 제약, 식품, 화장품 등 위조품 방지가 필요한 브랜드에 Phygital 정품 인증을 제공합니다." |

Card: 48×48 icon tile top-left, title `238×28` (28px), body `238×69` (23px × 3 lines).

## 6. WeGo Now — news teasers (`10:4315`) — 653px tall

Inner `10:4316` `1200×557` at `(120, 48)`. Header + 4 cards row.

**Header** `1038×80`:
- Eyebrow "Updates" (20px, 72px)
- H2 **"WeGo Now."** (48px, 239px)
- Right: small "View all" link element — `77.57×12` boolean-operation shape (arrow/chevron) + `16×16` icon = "→ more" style.

**4 cards** `1038×267` at `y=209`, four `242×267` (23-24px gap, total 4×241+3×24 = 1036):

Each card:
- Top image block `242×177` (contains a 65×27 rounded chip with category label at `(16, 16)`)
- Headline text `229-242×50` at `y=189` (2 lines, 25px line-height)
- Date `242×16` at `y=251` (16px, YYYY.MM.DD)

### WeGo Now content
| Chip | Headline | Date |
|---|---|---|
| AI NEWS | 위고 컴퍼니, 생성형 AI 기반 기업 자동화 플랫폼 베타 출시 | 2025.11.28 |
| TECH | 데이터 분석 AI 솔루션 도입 후 고객사 업무 효율 42% 향상 달성 | 2023.12.20 |
| PRESS | 위고 컴퍼니 AI 거버넌스 프레임워크, 국내 기업 표준 채택 사례 발표 | 2023.11.05 |
| Event | 위고 컴퍼니 AI 혁신 세미나 성료 — 150여 기업 관계자 참가 | 2023.10.28 |

## 7. Contact CTA (`10:4366`) — 736px tall

Inner `10:4367` `1200×640` at `(120, 48)` — a deep-color full-width panel (likely ink/dark background, confirmed by the two `600×600` rounded glowing-circle decorations: `10:4368` top-right `x=900 y=-300` and `10:4369` bottom-left `x=-300 y=340`).

Centered content `768×404` at `(216, 128)`:
- **H2** (`768×180`): "AI와 보안 기술로 함께 성장할 준비가 되셨나요?" — 180px tall, huge display (≈60-68px type)
- **Sub** (`542×56` centered inside a `768×82` row at `y=216.8`): "위고컴퍼니의 혁신적인 기술과 함께 새로운 비즈니스를 시작해보세요. 파트너십 · 투자 · 제품 문의 모두 환영합니다."
- **Primary button** `214×68` centered at `y=335.6`: "제휴 문의하기" (28px tall label, 98px wide) + 24×24 arrow icon on the right.

## 8. Footer (`10:4380`) — 401px tall

Inner `10:4381` `1200×273` at `(120, 64)`.

**Top row** `1200×176`:
- **Brand block** `368×176`:
  - `WEGO COMPANY` (32px wordmark, 368×32)
  - Address block `368×92`:
    - "서울시 서초구 바우뫼로27길 7-31, 예원빌딩 3F" (23px)
    - "wego@wegocompany.net" (23px)
    - "TEL. 02-3288-3455" (23px)
    - "FAX. 02-3288-3454" (23px)
- **Link columns** `784×176` at `x=416`, three `240×176` columns (32px gap):
  - **Company** (24px heading) → Home · About · NEWS · IR (each 20px line, 36px gap)
  - **Business** (24px heading) → KidsDa · QENTIX · ToKy
  - **Legal** (24px heading) → Privacy Policy · Terms of Service

**Bottom row** `1200×49` at `y=224`:
- Copyright (299×16 at `y=33`): "© 2026 WeGo Company. All rights reserved."

---

## Key copy summary (for QA)

- H1 hero: **"We Design Technology."**
- Company tagline short: **"기술을 설계하는 팀, 산업의 미래를 디자인합니다."**
- Section 2 H2: **"기술로 산업의 미래를 디자인합니다"** (no period; different from hero)
- Section 4 H2: **"Business Portfolio."**
- Section 5 H2: **"함께 성장할 파트너를 찾습니다."**
- Section 6 H2: **"WeGo Now."**
- Section 7 H2: **"AI와 보안 기술로 함께 성장할 준비가 되셨나요?"**
- Primary CTA label: **"제휴 문의하기"** (not "Contact Us")
- Footer wordmark: **WEGO COMPANY** (full name, not just "WEGO")
- Address line (verbatim): 서울시 서초구 바우뫼로27길 7-31, 예원빌딩 3F
- Email: wego@wegocompany.net
- TEL: 02-3288-3455 · FAX: 02-3288-3454

## Spacing / layout tokens for Home

- Page max width: `1440` → content `1200` → `120px` side gutters
- Vertical section rhythm (Y-offsets): 128 → 808 → 1514 → 1964 → 3052 → 3741 → 4394 → 5178 ⇒ inter-section ranges mostly ~450–1100px (Home is tall).
- Each "hero-block" section typically has `80–100px` top padding and `48px` inner padding to the 1200 grid.
- Card radius observed: `24–28px` on large surfaces (brand cards, contact panel glow rects), `32px` on the Hero side card (`10:3955` 416-tall), `16px` on chips (tags).

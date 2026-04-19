# Reusable Components — Figma Spec

All component bounds come from `get_metadata`. "Variants" here means observed instances across pages that share structure with small copy/state differences. Detailed styling (color, typography weight) should be confirmed via `get_design_context` on the reference node.

## Header (site chrome) — shared across all pages

**Reference nodes**: `10:4429` (Home), `10:4617` (About), `10:3591` (IR), `10:3661` (News detail), `10:5010` (News detail/IR detail), `10:5181` would be news list (similar)

**Structure**
```
Header  1440 × 80
└─ Inner 1264 × 80 at x=88
   ├─ Logo "WEGO"  67–71 × 32  at x=32 y=24
   ├─ Nav          305 × 40    at x=445–534 y=20
   │   ├─ Home  44×40   (no chevron)
   │   ├─ About 65×40  + 16×16 chevron at right
   │   ├─ NEWS  66×40  + 16×16 chevron at right
   │   └─ IR    34×40  + 16×16 chevron at right
   └─ Contact Us button  132–136 × 44  rounded-full  at x=1096
```
- Nav label type: 24px tall block → actual font ~14–15px semibold, wide letter-spacing (~0.1em)
- Logo width varies slightly (67 on Home, 71 on About, 66 on News/IR detail) — likely due to hinting, treat as `WEGO` text with one weight
- Logo appears as **"WEGO"** alone in the Figma header, **NOT** "WEGO" + "COMPANY" subtitle. ⚠️ Current code renders a two-word lockup — mismatch.
- Chevrons on About/NEWS/IR are design placeholders for dropdown menus (no submenu frames defined in this Figma file); can render as visual only.
- Home item does NOT have a chevron.

**Variants**
- Default (scrolled on white): dark text on white, subtle border-bottom
- Over dark hero: Figma home hero is light with grid decoration; header sits on white. So **there is no dark variant** implied by Figma. ⚠️ Current impl renders a dark hero with inverted header text — confirm with screenshot whether hero is dark or light in Figma.

## Footer — shared

**Reference nodes**: `10:4380` (Home), `10:4810` (About), `10:3542` (IR), `10:3810` (NEWS detail), `10:5091` (NEWS detail), etc. (all identical)

**Structure**
```
Footer  1440 × 401
└─ Inner 1200 × 273  at (120, 64)
   ├─ Top row 1200 × 176
   │   ├─ Brand 368 × 176
   │   │   ├─ "WEGO COMPANY"  368 × 32
   │   │   └─ Address block 368 × 92
   │   │       ├─ 서울시 서초구 바우뫼로27길 7-31, 예원빌딩 3F
   │   │       ├─ wego@wegocompany.net
   │   │       ├─ TEL. 02-3288-3455
   │   │       └─ FAX. 02-3288-3454
   │   └─ Links 784 × 176  at x=416
   │       ├─ Column "Company": Home / About / NEWS / IR
   │       ├─ Column "Business": KidsDa / QENTIX / ToKy
   │       └─ Column "Legal": Privacy Policy / Terms of Service
   └─ Bottom row 1200 × 49  at y=224
       └─ "© 2026 WeGo Company. All rights reserved."  299 × 16
```

- Brand logo is **"WEGO COMPANY"** (32px tall) in footer — full name unlike header's short "WEGO"
- Column heading: 24px tall block (~18–20px font)
- Column link: 20px tall block (~14–15px font)
- Line-height between links: 36px (items at y=48/84/120/156)
- Column width: 240px, gap 32px

## Button — Primary pill (brand)

Two size/style variants found:

**Variant A — "Contact Us" header button**
- Node: `10:4452` / `10:4640` etc.
- Size: `136 × 44`, rounded-full
- Label: `"Contact Us"` (72px × 20px — ~14–16px font)
- No icon
- Placement: header top-right

**Variant B — Small outline-ish text link**
- Node: `10:4603` (contact modal trigger)
- Size: `132 × 44` rounded-full, label `"Contact Us"` `68×20`
- Same as A — effectively the same button reused

**Variant C — Large CTA button (Contact CTA section)**
- Node: `10:4375` (Home), `10:4808` (About)
- Size: `214 × 68` (Home), `194 × 57` (About)
- Label "제휴 문의하기" (Home: 98×28 → ~28px; About: 119×25)
- Icon: `24 × 24` arrow on right (Home) / `→` glyph inline (About)
- Placement: centered in section

**Variant D — Submit button (modal)**
- Node: `10:4590` / `10:4590` inside modal
- Size: `300 × 56`, full-width inside form
- Label: "문의 신청하기" (105×18)
- Single primary button, no icon

## Button — Text link with arrow

Pattern used everywhere as "secondary CTA" / "view more":

**Reference**: `10:3965/3966/3968` (Hero "View About →"), `10:4256` (Home Section 5 "파트너십 문의하기"), `10:4134/4137` (portfolio card "View Case Study"), `10:4608` (modal trigger)

**Structure**
```
Row
├─ Label text         (20–32px tall block)
└─ Arrow square       (40 × 40 — icon is 15–24 × 16–24 centered)
```

Variants distinguished by label size (big "View About" 32px vs small "View Case Study" 20px vs medium "파트너십 문의하기" 24px).

## Chip / Tag pill

**Category chip (with fill)**
- Examples: `10:4334` AI NEWS 65×27, `10:4343` TECH 51×27, `10:4352` PRESS 55×27, `10:4361` Event 57×27, `10:4107` `#AI_Education` 122×29
- Height 27–29px, padding horizontal ~12–16px
- Rounded (likely `radius-chip` 14–16 = fully pill)
- Label: 11–15px font
- Used in: WeGo Now cards, News list cards, portfolio card top-left tag, IR list left side (공지/소식)

**Pill with trailing arrow (PRIVACY FIRST / DIGITAL TRUST / EDU-TECH)**
- Node: `10:3994`+`10:3995`+`10:3997` (Tech Intro cards, section 2)
- Width varies ~101–143, height 37 (content) with a 16×16 icon at right
- Text-only tag (no bg fill visible) — underline/border chip variant

**Navigation tab (news list filter)**
- Node: `10:5191` on NEWS list
- 7 pills: 전체 (60×32), AI NEWS (90×32), TECH (72×32), PRESS (77×32), EVENT (79×32), 공지 (60×32), 파트너십 (81×32)
- Height 32, padding 18–20px horizontal
- Selected vs unselected variants (confirm via screenshot)

**D-Day badge**
- Node: `10:3697` on IR detail
- `82×38`, label "D-14" (42×18) — accent color (probably red/brand)

**IR table category chip**
- Node: `10:3504/3512/3520` — tiny `37×24` label like "공지" / "소식" at left of IR list row

## Card — Portfolio brand card (Home section 4)

Reference: `10:4103/4146/4190` (3 instances for KidsDa / TOKY / Qentix)

```
Card  379 × 731
├─ Image panel  377 × 256
│   ├─ (image fills 377×256)
│   └─ Tag pill (top-left, 24,24) 119–174 × 29
└─ Content panel  377 × 473
    ├─ Text stack  313 × 344  at (32, 32)
    │   ├─ Title             313 × 32
    │   ├─ Sub-tagline       313 × 28–56
    │   ├─ Body paragraph    313 × 68
    │   └─ Bullet list       313 × 118   (4 items, each check + text)
    ├─ Footer CTA  313 × 65 at y=376
    │   ├─ "View Case Study" 107 × 20
    │   └─ 40 × 40 arrow button (right)
    └─ Floating badge  80 × 80  at (265, -40)   overlaps image/content boundary
```

## Card — Industry partner card (Home section 5)

Reference: `10:4263/4279/4296/4305` (4 instances)

```
Card  304 × 208
├─ Icon tile 48 × 48 at (33, 13)   containing 24×24 icon at (12,12)
├─ Title  238 × 40 at (33, 69)      (28px type)
└─ Body   238 × 69 at (33, 117)     (23px × 3 lines)
```
No CTA; card is purely informational.

## Card — KPI / Metric (Home section 3)

Reference: `10:4045/4056/4067/4078`

```
Cell  ~240 × 140
├─ Number         240 × 72   (60px type)
├─ Accent bar     48 × 4     (under number)
├─ Title          240 × 32   (28px type)
└─ Caption        240 × 20   (16–18px type)
```
No background; cells sit on white.

## Card — Tech Intro pillar card (Home section 2)

Reference: `10:3981/3998/4015`

```
Card  384 × 346
├─ Big numeral    76 × 72 at (280, 16)         (huge, probably 56px)
├─ Decoration    240 × 240 rounded at (-80, 186)  (bleeds off-corner)
├─ Icon tile     56 × 56 at (32, 32)           (holds 28×28 icon)
├─ Title          379 × 32 at (32, 112)
├─ Accent bar    40 × 2 at (32, 156)            (divider under title)
├─ Body          309 × 103 at (32, 190)         (15px × 4 lines)
└─ Tag row        379 × 37 at (32, 309)
    ├─ Pill text  101 × 16 (e.g. "PRIVACY FIRST")
    └─ Arrow icon 20 × 20 at right
```

## Card — News teaser (Home section 6 · also News list)

Reference Home: `10:4330/4339/4348/4357` (4 cards, 242×267)
Reference News list: `10:5207/5222/5238/...` (larger, 430×382–405)

Home variant (compact):
```
Card  242 × 267
├─ Image block  242 × 177   (with 65×27 chip at 16,16)
├─ Headline     229–242 × 50  at y=189
└─ Date         242 × 16 at y=251
```

News list variant (full):
```
Card  430 × 405
├─ Image block  428 × 200   (with chip at 24,26 — 39–90 wide)
└─ Content       428 × 180
    ├─ Chip     (re-placed inside content)
    ├─ Headline 380 × 23–45
    ├─ Body     380 × 42  (2-line excerpt)
    └─ Meta row 380 × 16
        ├─ Date 53–60 × 13
        └─ →    13 × 16 at right
```

## Card — Vision belief card (About page)

Reference: `10:4680/4687/4694` (3 cards)

```
Card  379 × 239
├─ Icon tile 48 × 48 at (40, 40)
├─ Title     299 × 21 at (40, 152)
└─ Body      299 × 42 at (40, 197)
```

## Card — History era (About page)

Reference: `10:4750/4763/4776/4789` (4 eras: 2018-2020 / 2021-2023 / 2024-2025 / 2026+)

```
Card  281–316 × 205–233
├─ Timeline dot  10 × 10 at top-left
├─ Era range     316 × 32   (32px type e.g. "2018 - 2020")
├─ Era label     316 × 28   (28px type e.g. "Beginning")
└─ Event list    316 × 76   (3 items, each 20px)
```

## Card — GOAL row (About page)

Reference: `10:4714/4722/4730` (3 rows)

```
Row  1200 × 155
├─ Big numeral "01/02/03"   59 × 53 at (39, 51)
├─ Content block  867 × 63 at (140, 45)
│   ├─ Title     250–325 × 21
│   └─ Body      747–815 × 17
└─ Small tag (KIDS / ENTERPRISE / SOCIETY)  71–122 × 35 at right
```

## Card — Job posting (IR detail)

Reference: `10:3763/3770/3777/3784/3791` + `10:3756` (6 cards in 2×3)

```
Card  316–318 × 154
├─ Category tag  44–73 × 20 at (24, 24)   (e.g. Tech / Design / Business / Marketing)
├─ Title         117–192 × 20 at (24, 56)
├─ Meta          78 × 14 at (24, 88)        (e.g. "신입 / 정규직")
└─ Action row    268–270 × 16 at (24, 114)  with 16×16 arrow icon at far right
```

## Form (Contact modal)

Reference: `10:4549` full modal frame `800 × 878`

```
Modal  800 × 878
├─ Header  680 × 60 at (60, 60)
│   ├─ Title "문의"   59 × 32
│   └─ Sub   444 × 16   "위고컴퍼니와 함께 혁신적인 미래를 만들어갈 파트너를 기다립니다."
├─ Form    680 × 518 at (60, 152)
│   ├─ Row1 (2 col)     성함 / 담당자명   +   회사명 / 소속
│   ├─ Row2 (2 col)     연락처            +   이메일
│   ├─ Row3 (full)      문의 유형 (select, with 16×16 chevron)
│   ├─ Row4 (full)      문의 제목
│   └─ Row5 (full, 142) 문의 내용 (textarea)
└─ Footer  680 × 116 at (60, 702)
    ├─ Checkbox row  315 × 20   [☐] 개인정보 수집 및 이용에 동의합니다.  [내용보기]
    └─ Submit button  300 × 56 centered   "문의 신청하기"
```

Each form field has:
- Label (14px tall block, ~12–13px font) above
- Input field 330 × 48 (2-col) or 680 × 48 (full-width) with 16px horizontal padding, 17px top padding for placeholder
- Placeholder text (14px tall block)

Placeholder copy:
- 이름을 입력해주세요
- 회사명을 입력해주세요
- 010-0000-0000
- example@email.com
- 제휴 / 투자 / 제품 문의 / 광고 / 기타 중 선택
- 제목을 입력해주세요
- 상세한 문의 내용을 입력해주세요. 확인 후 담당자가 연락드리겠습니다.

## Breadcrumb / Back link

Reference: `10:3688` (News detail), `10:5037` (News detail)
- Small "← 목록으로" text link, `64×16` inside a `96×39` padded row

## Search field (IR list)

Reference: `10:3493` (256×36)
- Rounded rectangle container with a `16×16` search icon at left (`x=12 y=10`)
- Placeholder "검색어를 입력하세요" (113×17)

## Pagination / Load more

No explicit paginator frame found on News or IR list. IR list shows a "Total 5" counter at top-left (`10:3492`, 64×28). News list has 10+ cards but no page controls in the captured frame; likely "load more" or infinite scroll (confirm with screenshot).


# WEGO COMPANY — Figma Overview

**File**: `cJprv3qyTg8biSgUJldrPU` ("제목 없음")
**Canvas / Page**: `10:3474` (Page 2) — the only page on the canvas
**Desktop viewport**: `1440 × auto` (frames render inside a 1920-wide outer board that includes a spec/description rail on the right; the actual product viewport is `1440` with a 1440 inner `Frame` under each page-level frame)
**Container inside viewport**: `1200px` wide, `120px` horizontal padding from 1440 edges

## 8 top-level page/screen frames

| Screen Name (raw) | Figma Node ID | Screen ID | Path | Viewport (inner W × H) |
|---|---|---|---|---|
| 위고 컴퍼니 홈페이지 (Type 1. Home) | `10:3898` | WEGO_HOME_001 | Home | 1440 × 5579 |
| 위고 컴퍼니 홈페이지 (Type 2. About) | `10:4614` | WEGO_ABOUT_001 | Home > About | 1440 × 4950 |
| 위고 컴퍼니 홈페이지 (Type 3. IR) | `10:3476` | WEGO_IR_001 | Home > IR (IR list / 공지·소식) | 1440 × 1348 |
| 위고 컴퍼니 홈페이지 (IR 상세) | `10:5007` | WEGO_NEWS_002 *(see note)* | Home > NEWS > NEWS 상세 (article detail) | 1440 × 2161 |
| 위고 컴퍼니 홈페이지 (NEWS) | `10:5179` | — | Home > NEWS (card grid) | 1440 × 2634 |
| 위고 컴퍼니 홈페이지 (NEWS 상세) | `10:3658` | WEGO_IR_002 *(see note)* | Home > IR > IR 상세 (채용공고 detail) | 1440 × 2631 |
| 위고 컴퍼니 홈페이지 (문의 모달) — on Home | `10:4512` | WEGO_HOME_002 | 홈 > 문의 (Contact overlay over Home) | 1920 × 1207 |
| 위고 컴퍼니 홈페이지 (문의 모달) — on About | `10:4910` | — | About > 문의 (same modal, placed over About) | 1920 × 1207 |

> **Note on mislabeled frames**: Figma's large title text on two detail frames is swapped vs. the description bar:
> - `10:3658` has big title "NEWS 상세" but its chapter/path says "IR 상세" and screen id `WEGO_IR_002`. The actual *content* is a 채용공고(신입사원 공채) detail — jobs/recruiting layout with 채용 개요 / 채용 절차 / 모집 부문 / 복지. Treat this as the **IR detail page** (채용/공고 상세).
> - `10:5007` has big title "IR 상세" but chapter/path says "NEWS 상세" and screen id `WEGO_NEWS_002`. The *content* is a press/article detail (long-form body, quote cards). Treat this as the **NEWS detail page** (보도/기사 상세).
> Follow the chapter bar + screen ID, not the big title. The frame naming is a designer typo.

## Contact modal

- Same modal content (`10:4549` / `10:4910` children) appears twice in the file: once overlaid on the Home hero (`10:4512`), once overlaid on the About hero (`10:4910`). Implement it once as a reusable modal, render from both pages' Contact Us triggers.

## Artboard layout (outside viewport, but useful)

Each page frame sits inside a larger annotation board (Chapter bar at `x=0 y=0 w=1500 h=68`, PlusX "Description" rail at `x=1500 y=0 w=420`, plus numbered overlay arrows `Description Num/Numline`). Those are PlusX spec-sheet chrome — ignore when building; they are design-doc decorations, not product UI.

## Raw Figma link shortcuts

- Home: `figma.com/design/cJprv3qyTg8biSgUJldrPU/?node-id=10-3898`
- About: `?node-id=10-4614`
- IR list: `?node-id=10-3476`
- IR detail (채용공고): `?node-id=10-3658`
- News list: `?node-id=10-5179`
- News detail (press): `?node-id=10-5007`
- Contact modal (on Home): `?node-id=10-4512`

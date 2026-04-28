# wego-company

위고컴퍼니 코퍼레이트 사이트.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Zustand, React Hook Form, Zod
- Framer Motion, Lenis

## 개발

```bash
npm install
npm run dev
```

http://localhost:3000

## 빌드

```bash
npm run build
npm run start
```

## 배포

Netlify (`netlify.toml`).
`@netlify/plugin-nextjs` 가 App Router 라우팅을 처리합니다.

## 디렉토리

```
app/                 라우트 (about, ir, news, privacy, terms, design-system)
components/
  layout/            Header, Footer, SiteChrome
  sections/          페이지별 섹션 (home, about)
  ui/                공용 UI (Counter, Tag, Reveal)
  contact/           문의 모달
  ir/                IR 로그인 모달
  news/              뉴스 목록/히어로
  legal/             약관 페이지
lib/
  data/              정적 콘텐츠 (news, ir, nav)
  stores/            Zustand 스토어
  validations/       Zod 스키마
public/              이미지/폰트
```

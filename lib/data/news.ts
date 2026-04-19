export const NEWS_CATEGORIES = [
  "전체",
  "AI/에듀테크",
  "TECH",
  "커리어뉴스",
  "인사혁신",
  "공지",
  "파트너십",
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export type NewsItem = {
  slug: string;
  category: Exclude<NewsCategory, "전체">;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  gradient: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "kidsda-v2-launch",
    category: "AI/에듀테크",
    title: "위고 컴퍼니, 생성형 AI 기반 키즈 맞춤 플랫폼 베타 출시",
    excerpt:
      "위고컴퍼니가 6세부터 13세 아이들을 위한 생성형 AI 기반 키즈 맞춤 플랫폼 KidsDa 2세대 베타를 출시한다.",
    content: `위고컴퍼니는 생성형 AI 기반 아동 맞춤 학습 플랫폼 KidsDa 2세대 베타를 출시했다.

본 베타는 6~13세 아이들의 연령별 수준에 맞춰 뉴스·도서·창작 콘텐츠를 AI가 개인화해 제공한다.

온디바이스 추론 기반이기 때문에 사용자의 데이터가 외부로 전송되지 않으며, 교육기관·학부모의 가장 큰 우려 포인트였던 프라이버시 이슈를 해결했다.`,
    date: "2026-04-15",
    gradient: "from-[#FFD4D4] via-white to-[#FFE4E4]",
  },
  {
    slug: "qentix-qr-blocking",
    category: "TECH",
    title: "데이터 분석 AI 솔루션 도입 후 고객사 평균 42% 영업 달성",
    excerpt:
      "Qentix QR 보안 솔루션을 도입한 파트너사 평균 영업 성과가 42% 향상됐다.",
    content: `Qentix는 블록체인 기반 QR 진품 인증 솔루션을 제공한다.

최근 3개월간 Qentix를 도입한 국내 유통·브랜드사 15곳을 분석한 결과, 평균 영업 성과가 기존 대비 42% 증가한 것으로 집계됐다.

복제·해킹·큐싱으로부터 제품을 완전히 보호하면서 동시에 소비자와의 신뢰를 구축한 것이 성과 상승의 주된 요인으로 분석된다.`,
    date: "2026-03-28",
    gradient: "from-[#1a2eb8] via-brand to-[#0b1220]",
  },
  {
    slug: "ifs25-conference",
    category: "파트너십",
    title: "위고 컴퍼니, AI 거버넌스 프레임워크, 미래 기업 포럼 세션 발표",
    excerpt:
      "Qentix가 국제 미래 보안 콘퍼런스 IFS25에 참가해 AI 거버넌스 세션을 발표했다.",
    content: `국제 미래 보안 콘퍼런스 IFS25에 참가하여 Qentix 솔루션을 글로벌 파트너들에게 소개했다.

위고컴퍼니는 자체 AI 거버넌스 프레임워크를 발표하며, 기업의 AI 도입 과정에서 발생하는 데이터 주권 이슈의 해결책을 제시했다.`,
    date: "2026-03-15",
    gradient: "from-[#0b1220] via-[#141b2e] to-brand",
  },
  {
    slug: "kidsda-150m-users",
    category: "AI/에듀테크",
    title: "위고 컴퍼니, AI 학생 세미나 설치 — 150억 기념 경제적 참가",
    excerpt:
      "위고컴퍼니의 AI 학생 세미나 설치로 150억 기념 경제적 참가가 진행된다.",
    content: `위고컴퍼니는 국내 초중등 대상 AI 학습 세미나를 전국 50개교에서 개최한다.

이번 세미나는 아동이 AI를 이해하고 활용하는 방법을 학습하는 것을 목표로 한다. 150억 규모의 교육 투자 계획의 일환이다.`,
    date: "2026-02-28",
    gradient: "from-[#FFD4D4] via-[#F5F5F3] to-white",
  },
  {
    slug: "2026-recruiting",
    category: "공지",
    title: "2026년 위고 컴퍼니 신입사원 공개채용 안내",
    excerpt:
      "세상을 움직이는 기술, 위고와 함께할 인재를 찾습니다. 6개 직군 동시 모집.",
    content: `2026년 위고 컴퍼니 신입사원 공개채용을 진행합니다.

[모집 기간]
2026.04.01(월) – 2026.04.20(토) 23:59 까지

[모집 직군]
AI 리서치 / 서버 / 프론트 / iOS / Android / PM

[지원 자격]
2026년 2월 졸업예정자 또는 기졸업자
자세한 내용은 채용 페이지를 참조해 주세요.`,
    date: "2026-03-15",
    gradient: "from-surface via-white to-surface-alt",
  },
  {
    slug: "skt-zem-kidsda",
    category: "파트너십",
    title: "SKT ZEM과 KidsDa 탑재",
    excerpt:
      "아동 AI 교육 플랫폼 KidsDa가 SK텔레콤 ZEM폰에 사전 탑재, 에듀테크 파트너십 체결.",
    content: `위고컴퍼니는 SK텔레콤과 파트너십을 체결하고 아동 AI 교육 플랫폼 KidsDa를 ZEM폰에 사전 탑재한다.

ZEM폰은 SK텔레콤의 키즈폰 브랜드로, 초등학생 대상 안전한 스마트폰 경험을 제공한다. 이번 협업으로 KidsDa는 기본 앱으로 내장되며, 더 많은 아이들이 안전한 AI 학습 경험을 접할 수 있게 된다.`,
    date: "2026-02-14",
    gradient: "from-[#FF6B6B] via-[#FFD4D4] to-[#1a2eb8]",
  },
  {
    slug: "qentix-patent-10",
    category: "TECH",
    title: "Qentix AI 특허 10여건 출원",
    excerpt:
      "On-Device AI 보안, 블록체인 인증 등 핵심 기술 특허 10여건 출원으로 기술력 입증.",
    content: `Qentix는 On-Device AI 보안, 블록체인 인증, QR 기반 원본 인증 등 핵심 기술 특허 10여건을 출원했다.

해당 특허들은 제품 복제·해킹·큐싱 방지 기술의 근간이 되며, 위고컴퍼니의 보안 기술 리더십을 공고히 한다.`,
    date: "2026-01-30",
    gradient: "from-[#0b1220] via-brand to-[#1a2eb8]",
  },
  {
    slug: "privacy-policy-update",
    category: "공지",
    title: "개인정보처리방침 변경 안내",
    excerpt:
      "법률 개정 및 서비스 개선에 따라 개인정보처리방침이 2026년 11월 15일 자로 변경됩니다.",
    content: `법률 개정 및 서비스 개선에 따라 개인정보처리방침이 2026년 11월 15일 자로 변경됩니다.

주요 변경 사항은 홈페이지 하단 개인정보처리방침 페이지를 참조해 주세요.`,
    date: "2026-01-15",
    gradient: "from-surface to-white",
  },
  {
    slug: "ai-research-center",
    category: "인사혁신",
    title: "차세대지능연구소 연구 등록",
    excerpt:
      "기업부설 신소재개발 '차세대지능연구소'가 정식 등록돼, 위고 R&D 역량 강화.",
    content: `위고컴퍼니의 기업부설 신소재개발 연구소 '차세대지능연구소'가 정식 등록되었다.

본 연구소는 On-Device AI 추론 최적화, 멀티모달 비전-언어 모델, AI 안전성 리서치를 수행한다.`,
    date: "2026-01-05",
    gradient: "from-surface-alt via-surface to-white",
  },
];

export function getNewsBySlug(slug: string) {
  return NEWS_ITEMS.find((item) => item.slug === slug);
}

export function getAdjacentNews(slug: string) {
  const idx = NEWS_ITEMS.findIndex((item) => item.slug === slug);
  return {
    prev: idx > 0 ? NEWS_ITEMS[idx - 1] : null,
    next: idx < NEWS_ITEMS.length - 1 ? NEWS_ITEMS[idx + 1] : null,
  };
}

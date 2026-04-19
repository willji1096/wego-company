export type IRItem = {
  slug: string;
  category: "공지" | "소식";
  title: string;
  excerpt: string;
  content: string;
  date: string;
  deadlineDate?: string;
  sections?: {
    overview?: { label: string; value: string }[];
    process?: { step: number; title: string; desc: string }[];
    positions?: { tag: string; title: string; type: string }[];
    benefits?: string[];
    benefitsImage?: string;
    tagline?: string;
  };
};

export const IR_ITEMS: IRItem[] = [
  {
    slug: "2026-new-hire-announcement",
    category: "공지",
    title: "2026 위고 컴퍼니 신입사원 공개채용 안내",
    excerpt: "세상을 움직이는 기술, 위고와 함께할 인재를 찾습니다.",
    date: "2026-03-15",
    deadlineDate: "2026-04-29",
    content: `세상을 움직이는 기술, 위고와 함께할 인재를 찾습니다.`,
    sections: {
      tagline: "세상을 움직이는 기술, 위고와 함께할 인재를 찾습니다",
      overview: [
        { label: "접수 기간", value: "2026.04.01(화) - 2026.04.29(토) 23:59 까지" },
        { label: "지원 자격", value: "기졸업자 또는 2026년 2월 졸업 예정자 (전공 무관)" },
        { label: "근무지", value: "위고 컴퍼니 서울 본사 (강남구 테헤란로)" },
        { label: "고용 형태", value: "정규직 (수습기간 3개월 포함)" },
      ],
      process: [
        { step: 1, title: "서류 전형", desc: "지원서 제출 및 포트폴리오" },
        { step: 2, title: "코딩/직무 테스트", desc: "온라인 테스트 (2주)" },
        { step: 3, title: "1차 면접", desc: "실무진 기술/직무 면접" },
        { step: 4, title: "2차 면접", desc: "경영진 인성 면접" },
        { step: 5, title: "최종 합격", desc: "건강검진 및 입사" },
      ],
      positions: [
        { tag: "Tech", title: "Software Engineer", type: "신입 / 정규직" },
        { tag: "Tech", title: "Data Scientist", type: "신입 / 정규직" },
        { tag: "Design", title: "UI/UX Designer", type: "신입 / 정규직" },
        { tag: "Business", title: "Product Manager", type: "신입 / 정규직" },
        { tag: "Marketing", title: "Marketing Specialist", type: "신입 / 정규직" },
        { tag: "Business", title: "Global Sales", type: "신입 / 정규직" },
      ],
      benefits: [
        "주 4일제 근무",
        "최신 장비 지원 (MacBook Pro)",
        "AI Tool (Claude Code) 제공",
        "점심 식대 지원",
        "자기 계발 서재 지원",
      ],
    },
  },
  {
    slug: "skt-zem-kidsda",
    category: "소식",
    title: "SKT ZEM폰 KidsDa 탑재",
    excerpt: "SK텔레콤 키즈폰(ZEM)에 KidsDa 앱이 기본 탑재됩니다.",
    content: `SK텔레콤 키즈폰 ZEM에 KidsDa 앱이 기본 탑재되어 2026년 1월부터 제공됩니다.

대한민국 어린이 전문 AI 플랫폼으로 KidsDa가 SKT와 함께 아이들의 일상 교육 경험을 혁신합니다.`,
    date: "2026-01-20",
  },
  {
    slug: "qentix-patent-10",
    category: "소식",
    title: "Qentix AI 특허 10여건 출원",
    excerpt: "AI + 워터마크 + 블록체인 3중 보안 기술 특허 출원 완료",
    content: `Qentix AI 보안 솔루션과 관련된 10여건의 특허를 출원했습니다.

- 온디바이스 AI 추론 경량화 기술
- 워터마크 기반 위조 탐지
- 블록체인 원본 인증
- QR 복제 방지 알고리즘`,
    date: "2025-12-05",
  },
  {
    slug: "privacy-policy-change",
    category: "공지",
    title: "개인정보처리방침 변경 안내",
    excerpt: "2025년 11월 1일부로 개인정보처리방침이 개정됩니다.",
    content: `안녕하세요. 위고컴퍼니입니다.

2025년 11월 1일부로 개인정보처리방침이 개정됨을 안내드립니다.

주요 변경 사항:
- 수집 항목 명시화
- 제3자 제공 동의 절차 개선
- 데이터 보관 기간 명확화`,
    date: "2025-11-01",
  },
  {
    slug: "rnd-center-relocation",
    category: "소식",
    title: "차세대지능연구소 변경 등록",
    excerpt: "위고컴퍼니 부설 차세대지능연구소가 확장 이전했습니다.",
    content: `위고컴퍼니 부설 차세대지능연구소가 확장 이전했습니다.

연구 분야:
- AI 경량화 및 온디바이스 추론
- 블록체인·제로트러스트 보안
- 어린이 전용 Peer AI 페르소나`,
    date: "2025-09-15",
  },
];

export function getIRBySlug(slug: string) {
  return IR_ITEMS.find((item) => item.slug === slug);
}

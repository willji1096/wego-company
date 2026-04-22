export type NavItem = {
  label: string;
  href: string;
  hasSubmenu?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", hasSubmenu: true },
  { label: "NEWS", href: "/news", hasSubmenu: true },
  { label: "IR", href: "/ir", hasSubmenu: true },
];

export const BRAND = {
  name: "WEGO COMPANY",
  shortName: "WEGO",
  description:
    "위고컴퍼니는 AI와 보안 기술의 융합으로 교육, 보안, 라이프스타일 산업의 미래를 설계하는 기술 전문기업입니다.",
};

export const COMPANY_INFO = {
  entity: "(주)위고컴퍼니",
  ceo: "김영기",
  region: "경기도 화성",
  address: "경기도 화성",
  tel: "02-3288-3455",
  fax: "02-3288-3454",
  email: "wego@wegocompany.net",
};

export const BUSINESS_LINKS = [
  { label: "KidsDa", href: "#kidsda" },
  { label: "QENTIX", href: "#qentix" },
  { label: "ToKy", href: "#toky" },
];

export const LEGAL_LINKS = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
];

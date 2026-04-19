import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";

export const metadata: Metadata = {
  title: {
    default: "WEGO COMPANY — AI·보안·에듀테크",
    template: "%s | WEGO COMPANY",
  },
  description:
    "위고컴퍼니는 온디바이스 AI 교육(KidsDa), 제로트러스트 보안(Qentix), 데이터 AI 플랫폼(WeGo DataAI)을 통해 미래 교육과 안전을 설계합니다.",
  keywords: [
    "위고컴퍼니",
    "WEGO COMPANY",
    "KidsDa",
    "키즈다",
    "Qentix",
    "AI 교육",
    "제로트러스트",
    "온디바이스 AI",
  ],
  openGraph: {
    title: "WEGO COMPANY",
    description: "AI·보안·에듀테크 기술로 미래 교육과 안전을 설계합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

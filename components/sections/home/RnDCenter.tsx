"use client";

import {
  ArrowRight,
  GraduationCap,
  Radio,
  ShieldAlert,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useContactStore } from "@/lib/stores/contact";

type IndustryCard = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const CARDS: IndustryCard[] = [
  {
    Icon: GraduationCap,
    title: "교육 · 미디어",
    desc: "학교, 교육기관, 어린이 미디어사와 KidsDa를 통해 아이들의 문해력·루틴 교육을 혁신합니다.",
  },
  {
    Icon: Radio,
    title: "통신 · 하드웨어",
    desc: "통신사 및 스마트기기 제조사와 KidsDa · KUKI를 번들링해 아이 전용 AI 경험을 제공합니다.",
  },
  {
    Icon: ShieldAlert,
    title: "큐싱 방지 산업군",
    desc: "금융, 물류, 공공기관 등 QR 기반 피싱·해킹 위협이 높은 산업에서 Qentix로 100% 차단합니다.",
  },
  {
    Icon: BadgeCheck,
    title: "정품 인증 산업군",
    desc: "명품, 제약, 식품, 화장품 등 위조품 방지가 필요한 브랜드에 Phygital 정품 인증을 제공합니다.",
  },
];

export function RnDCenter() {
  const openContact = useContactStore((s) => s.setOpen);
  return (
    <section className="relative py-8 md:py-20">
      <div className="container-base">
        <div className="relative overflow-hidden rounded-[16px] md:rounded-[32px] bg-ink text-white">
          {/* glow decoration */}
          <div
            aria-hidden
            className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-brand/40 blur-[180px] pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] rounded-full bg-brand/15 blur-[160px] pointer-events-none"
          />

          <div className="relative p-4 md:p-16 lg:p-20">
            <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-16">
              {/* Left copy */}
              <div className="flex flex-col">
                <span className="inline-flex h-8 items-center px-4 rounded-full bg-brand text-white text-[12px] font-semibold tracking-[0.22em] w-fit">
                  R&amp;D CENTER
                </span>
                <Reveal>
                  <h2 className="mt-3 md:mt-6 font-display font-bold text-[clamp(24px,4vw,48px)] leading-[1.1] tracking-[-0.02em]">
                    함께 성장할
                    <br />
                    파트너를 찾습니다.
                  </h2>
                </Reveal>
                <p className="mt-6 text-[14px] md:text-[16px] leading-[1.75] text-white/70 max-w-md">
                  위고컴퍼니는 교육·통신·보안·투자 각 분야의 파트너와 함께 AI
                  기술의 가치를 더 넓은 시장으로 확장해 나갑니다.
                </p>
                <button
                  type="button"
                  onClick={() => openContact(true)}
                  className="mt-10 group inline-flex items-center gap-2 text-[16px] md:text-[16px] font-semibold tracking-[-0.01em] text-white w-fit"
                >
                  파트너십 문의하기
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>

              {/* Right grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {CARDS.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.08}>
                    <div className="h-full rounded-[12px] md:rounded-2xl bg-white/5 border border-white/10 p-4 md:p-7 backdrop-blur-sm transition-colors hover:bg-white/10">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <c.Icon size={22} className="text-white" />
                      </span>
                      <h3 className="mt-3 md:mt-5 text-[16px] md:text-[20px] font-bold tracking-[-0.01em]">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-[14px] md:text-[14px] leading-[1.65] text-white/70">
                        {c.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

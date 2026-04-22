"use client";

import { motion } from "framer-motion";
import { Baby, Briefcase, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Pillar = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const PILLARS: Pillar[] = [
  {
    Icon: Baby,
    title: "아이의 일상",
    desc: "KidsDa와 KUKI로 아이들의 매일을 더 풍요롭고 안전하게 연결합니다.",
  },
  {
    Icon: Briefcase,
    title: "산업의 현장",
    desc: "Qentix로 기업과 소비자가 신뢰로 연결되는 산업 환경을 만듭니다.",
  },
  {
    Icon: ShieldCheck,
    title: "보이지 않는 신뢰",
    desc: "눈에 보이지 않지만 반드시 필요한 신뢰의 영역을 기술로 설계합니다.",
  },
];

export function ConnectPeople() {
  return (
    <section className="py-12 md:py-28 bg-surface">
      <div className="container-base">
        <p className="flex items-center gap-3 text-[14px] md:text-[14px] font-semibold tracking-[3px] uppercase text-brand">
          <span className="h-px w-8 bg-brand" />
          Vision
        </p>
        <Reveal>
          <h2 className="mt-3 md:mt-6 font-display font-bold text-[26px] md:text-[40px] leading-[1.1] tracking-[-1px]">
            AI로 사람과 세상을
            <br />
            <span className="text-brand">연결합니다.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-[16px] md:text-[16px] leading-[1.75] text-muted max-w-xl">
            아이의 일상에서, 산업의 현장에서, 그리고 보이지 않는 신뢰의 영역까지
            <br className="hidden md:block" /> 우리는 기술을 통해 더 나은 연결을
            만듭니다.
          </p>
        </Reveal>

        <div className="mt-5 md:mt-16 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-[16px] md:rounded-[24px] bg-white border border-border p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-brand-soft text-brand">
                  <p.Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 md:mt-7 text-[18px] md:text-[22px] font-bold tracking-normal text-foreground leading-[1.25]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[14px] leading-[1.7] text-muted">
                  {p.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

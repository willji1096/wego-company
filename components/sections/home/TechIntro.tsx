"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Lightbulb, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Card = {
  num: string;
  title: string;
  desc: string;
  tag: string;
  Icon: LucideIcon;
};

const CARDS: Card[] = [
  {
    num: "01",
    title: "On-Device AI",
    desc: "클라우드 없이 기기에서 직접 작동하는 AI. 데이터 외부 유출 없는 Privacy First 기술로 실시간 경량화 솔루션을 제공합니다.",
    tag: "PRIVACY FIRST",
    Icon: Layers,
  },
  {
    num: "02",
    title: "Innovation",
    desc: "위조 불가능한 디지털 신뢰 기술. AI 검증 + 워터마크 + 블록체인 3중 보안으로 복제·해킹을 원천 차단합니다.",
    tag: "DIGITAL TRUST",
    Icon: Lightbulb,
  },
  {
    num: "03",
    title: "Expansion",
    desc: "아이와 함께 성장하는 어린이 전용 AI. Peer+1 페르소나와 감정 분석으로 아이의 일상과 학습을 지원합니다.",
    tag: "EDU-TECH",
    Icon: TrendingUp,
  },
];

export function TechIntro() {
  return (
    <section className="relative py-8 md:py-24 bg-white">
      <div className="container-base">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 mb-6 md:mb-20">
          <div>
            <p className="text-[14px] md:text-[14px] font-semibold tracking-[0.22em] uppercase text-brand">
              Who We Are
            </p>
            <Reveal>
              <h2 className="mt-3 md:mt-5 font-display font-bold text-[26px] md:text-[40px] lg:text-[56px] xl:text-[64px] leading-[1.1] tracking-[-0.02em] text-foreground">
                기술로 산업의 미래를
                <br />
                디자인합니다
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="md:pt-12 text-[16px] md:text-[16px] leading-[1.75] text-muted md:justify-self-end md:max-w-[420px]">
              위고컴퍼니는{" "}
              <span className="text-brand underline decoration-brand/40 underline-offset-[6px]">
                AI와 보안 기술의 융합
              </span>
              으로 교육, 보안, 라이프스타일 산업의 미래를 설계하는 기술
              전문기업입니다.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                className="group relative overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#1C1831] text-white p-4 md:p-10 md:min-h-[340px] flex flex-col"
              >
                {/* bottom-left blue glow */}
                <div
                  aria-hidden
                  className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-brand/30 blur-[32px] mix-blend-screen pointer-events-none"
                />

                {/* 01/02/03 big numeral top-right */}
                <div className="absolute right-4 md:right-7 top-3 md:top-4 font-mono font-bold text-[56px] md:text-[72px] leading-none tracking-[-0.04em] text-white/5 select-none pointer-events-none">
                  {c.num}
                </div>

                {/* icon tile top-left */}
                <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-[16px] bg-white/10 border border-white/5 backdrop-blur-sm">
                  <c.Icon size={26} className="text-white" strokeWidth={1.5} />
                </div>

                {/* title + accent bar */}
                <div className="relative mt-4 md:mt-12">
                  <h3 className="text-[18px] md:text-[28px] font-bold tracking-[-0.02em] leading-[1.2]">
                    {c.title}
                  </h3>
                  <div className="mt-4 h-[2px] w-10 bg-brand" />
                </div>

                {/* body */}
                <p className="relative mt-4 md:mt-6 text-[16px] md:text-[18px] leading-[1.62] text-white/70 flex-1">
                  {c.desc}
                </p>

                {/* footer row */}
                <div className="relative mt-3 md:mt-7 pt-3 md:pt-5 border-t border-white/10 flex items-center justify-between opacity-80">
                  <span className="font-mono text-[12px] md:text-[12px] tracking-[0.2em] uppercase text-white/50">
                    {c.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

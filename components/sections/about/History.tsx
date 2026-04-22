"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

type Chapter = {
  period: string;
  title: string;
  events: string[];
};

const CHAPTERS: Chapter[] = [
  {
    period: "2018 – 2020",
    title: "Beginning",
    events: [
      "위고컴퍼니 법인 설립",
      "기업부설연구소 설립",
      "메인넷 출시 및 DApp R&D",
    ],
  },
  {
    period: "2021 – 2023",
    title: "Growth",
    events: [
      "기술 발표회",
      "SBS Biz Pre-IPO 참가 및 블록체인 QR 지원",
      "MFTM, STO, QR 등 레퍼런스 축적",
    ],
  },
  {
    period: "2024 – 2025",
    title: "Expansion",
    events: [
      "AI 융합 기술 상용화",
      "On-Device AI 솔루션 개발",
      "키즈다 플랫폼 런칭",
    ],
  },
  {
    period: "2026+",
    title: "Global",
    events: [
      "키즈다 콘텐츠 확장 및 대규모 시장 진출",
      "키즈다 앱 SK텔레콤 키즈폰(ZEM) 기본앱 탑재 출시",
      "어린이 AI친구 베타 출시",
      "피지털 정품인증 QR AI 시장 진출",
    ],
  },
];

export function History() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-12 md:py-28 bg-surface">
      <div className="container-base">
        <p className="flex items-center gap-3 text-[14px] md:text-[14px] font-semibold tracking-[0.22em] uppercase text-brand">
          <span className="h-px w-8 bg-brand" />
          Company History
        </p>
        <Reveal>
          <h2 className="mt-3 md:mt-6 font-display font-bold text-[26px] md:text-[40px] lg:text-[56px] xl:text-[64px] leading-[1.1] tracking-[-0.02em]">
            우리가 걸어온
            <br />
            <span className="text-brand">주요 발자취</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-[14px] md:text-[16px] text-muted leading-[1.7]">
            2018년 설립부터 현재까지, 위고컴퍼니의 도전과 성장의 핵심 순간들입니다.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-5 md:mt-20">
          {/* horizontal line with dots — hidden on mobile where grid is 1-col */}
          <div className="hidden sm:block relative h-px bg-border-soft mb-8 md:mb-14">
            <motion.div
              className="absolute left-0 top-0 h-px bg-brand"
              style={{ width: lineWidth }}
            />
            <div className="absolute inset-x-0 -top-[5px] grid grid-cols-4">
              {CHAPTERS.map((c) => (
                <div key={c.period} className="flex justify-start">
                  <span className="h-[11px] w-[11px] rounded-full bg-brand ring-4 ring-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {CHAPTERS.map((ch, ci) => (
              <Reveal key={ch.period} delay={ci * 0.08}>
                <div>
                  <p className="text-[16px] md:text-[16px] font-semibold text-brand">
                    {ch.period}
                  </p>
                  <h3 className="mt-3 font-display font-bold text-[18px] md:text-[24px] leading-[1.25] tracking-[-0.01em] text-foreground">
                    {ch.title}
                  </h3>
                  <ul className="mt-3 md:mt-5 space-y-2 md:space-y-2.5">
                    {ch.events.map((e) => (
                      <li
                        key={e}
                        className="flex gap-2 text-[14px] md:text-[14px] leading-[1.65] text-muted"
                      >
                        <span className="mt-[8px] h-[3px] w-[3px] rounded-full bg-muted shrink-0" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

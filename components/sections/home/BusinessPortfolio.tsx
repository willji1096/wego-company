"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Brand = {
  id: string;
  name: string;
  korean: string;
  tagline: string;
  tag: string;
  desc: string;
  bullets: string[];
  image: string;
  icon: string;
  badgeBg: string;
};

const BRANDS: Brand[] = [
  {
    id: "kidsda",
    name: "KidsDa",
    korean: "키즈다",
    tagline: "Edu-Tech Platform / AI Journalism for Kids",
    tag: "#AI_Education",
    desc: "아이가 매일 뉴스를 읽고, 영어 기사는 AI로 듣고, 생각을 기록하며 좋은 루틴을 만듭니다.",
    bullets: [
      "SKT 키즈폰 ZEM 기본 탑재 (2026년 1월 출시)",
      "60년 전통 어린이 전문기자의 뉴스 + AI 요약 및 퀴즈",
      "키즈루틴 + AI 음성일기 + 부모용 감정 리포트",
      "읽고 이해하고 해결하는 기초 역량 교육",
    ],
    image: "/brands/kidsda.jpg",
    icon: "/brands/kidsda-icon.svg",
    badgeBg: "#dbeafe",
  },
  {
    id: "toky",
    name: "TOKY",
    korean: "토끼",
    tagline: "On-Device AI Life Partner",
    tag: "#On-Device_AI",
    desc: "아이에게 처음으로 생기는 AI 친구. 함께 웃고, 함께 자랍니다.",
    bullets: [
      "7~13세 전용 Peer+1 페르소나",
      "Privacy First — 온디바이스 처리, 외부 유출 없음",
      "감정 분석 + 장기 기억 RAG + 부모 감정 리포트",
    ],
    image: "/brands/toky.jpg",
    icon: "/brands/toky-icon.svg",
    badgeBg: "#e0e7ff",
  },
  {
    id: "qentix",
    name: "Qentix",
    korean: "큐엔틱스",
    tagline: "B2B Security-Tech Platform / Phygital Trust",
    tag: "#Blockchain_Security",
    desc: "QR코드로 복제·해킹·큐싱으로부터 귀사의 제품을 완전히 지킵니다.",
    bullets: [
      "AI + 워터마크 + 블록체인 3중 보안 아키텍처",
      "QR 복제 99.9% 차단 / 피싱 100% 차단",
      "계약 후 최단 2주 도입 · 전담 온보딩 매니저 배정",
    ],
    image: "/brands/qentix.jpg",
    icon: "/brands/qentix-icon.svg",
    badgeBg: "#e2e8f0",
  },
];

export function BusinessPortfolio() {
  return (
    <section className="relative py-8 md:py-24 bg-white">
      <div className="container-base">
        <div className="flex items-end justify-between gap-6 mb-6 md:mb-16">
          <div>
            <p className="text-[14px] md:text-[14px] font-semibold tracking-[0.22em] uppercase text-brand">
              Our Works
            </p>
            <Reveal>
              <h2 className="mt-3 font-display font-bold text-[26px] md:text-[40px] lg:text-[56px] xl:text-[64px] leading-[1.05] tracking-[-0.02em]">
                Business
                <br />
                Portfolio.
              </h2>
            </Reveal>
          </div>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.06 }}
            aria-label="About WEGO COMPANY"
            className="hidden md:inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-foreground text-white"
          >
            <ArrowRight size={20} />
          </motion.a>
        </div>

        <div className="grid gap-6 lg:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                className="group relative rounded-[20px] md:rounded-[32px] overflow-hidden bg-white border border-border flex flex-col"
              >
                {/* image panel */}
                <div className="relative h-[180px] md:h-[240px] overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-5 left-5 inline-flex items-center h-7 px-3 rounded-full bg-white/90 backdrop-blur text-[12px] font-bold tracking-[0.08em] uppercase text-foreground shadow-sm">
                    {b.tag}
                  </span>
                </div>

                {/* content */}
                <div className="relative flex flex-col flex-1 p-4 md:p-8 pt-8 md:pt-10">
                  {/* floating badge */}
                  <span
                    className="absolute right-5 md:right-8 -top-8 md:-top-10 flex h-20 w-20 items-center justify-center rounded-[12px] md:rounded-[16px] ring-4 ring-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
                    style={{ backgroundColor: b.badgeBg }}
                  >
                    <Image
                      src={b.icon}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9"
                    />
                  </span>

                  <h3 className="text-[18px] md:text-[24px] font-bold tracking-[-0.01em] text-foreground leading-[1.3]">
                    {b.name} · {b.korean}
                  </h3>
                  <p className="mt-2 text-[16px] md:text-[16px] leading-[1.55] text-muted-soft">
                    {b.tagline}
                  </p>

                  <p className="mt-3 md:mt-5 text-[16px] md:text-[16px] leading-[1.6] text-muted">
                    {b.desc}
                  </p>

                  <ul className="mt-3 md:mt-5 space-y-2 md:space-y-2.5 flex-1">
                    {b.bullets.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-[14px] md:text-[14px] leading-[1.55] text-muted"
                      >
                        <Check
                          size={14}
                          className="mt-[3px] shrink-0 text-brand"
                          strokeWidth={2.5}
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border-soft flex items-center justify-between">
                    <span className="text-[14px] md:text-[14px] text-foreground">
                      View Case Study
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-border transition-colors group-hover:bg-brand group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

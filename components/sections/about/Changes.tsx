"use client";

import { Reveal } from "@/components/ui/Reveal";

const CHANGES = [
  {
    num: "01",
    title: "아이에게는 더 좋은 습관을",
    desc: "KidsDa와 KUKI로 아이들이 매일 뉴스를 읽고, 생각을 기록하고, 좋은 루틴을 만들어 가도록 돕습니다.",
    badge: "KIDS",
    badgeClass: "bg-[#dbeafe] text-[#1d4ed8]",
  },
  {
    num: "02",
    title: "기업에는 더 효율적인 시스템을",
    desc: "Qentix로 복제·해킹·큐싱으로부터 제품과 브랜드를 완전히 보호하고, 더 신뢰받는 비즈니스 환경을 구축합니다.",
    badge: "ENTERPRISE",
    badgeClass: "bg-[#d1fae5] text-[#047857]",
  },
  {
    num: "03",
    title: "사회에는 더 신뢰할 수 있는 환경을",
    desc: "보이지 않는 곳에서 작동하는 AI와 보안 기술로, 사람이 더 안심하고 살아갈 수 있는 세상을 설계합니다.",
    badge: "SOCIETY",
    badgeClass: "bg-[#ede9fe] text-[#6d28d9]",
  },
];

export function Changes() {
  return (
    <section className="py-12 md:py-28 bg-white">
      <div className="container-base">
        <p className="flex items-center gap-3 text-[14px] md:text-[14px] font-semibold tracking-[0.22em] uppercase text-brand">
          <span className="h-px w-8 bg-brand" />
          Goal
        </p>
        <Reveal>
          <h2 className="mt-3 md:mt-6 font-display font-bold text-[26px] md:text-[40px] lg:text-[56px] xl:text-[64px] leading-[1.1] tracking-[-0.02em]">
            우리가 만들어갈
            <br />
            <span className="text-brand">변화</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-[14px] md:text-[16px] text-muted leading-[1.7]">
            우리의 목표는 기술을 만드는 것이 아니라{" "}
            <b className="text-foreground">변화를 만드는</b> 것입니다.
          </p>
        </Reveal>

        <div className="mt-5 md:mt-14 border-t border-border-soft">
          {CHANGES.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08}>
              <div className="grid gap-4 md:grid-cols-[80px_minmax(0,1fr)_auto] md:gap-8 items-start md:items-center py-6 md:py-10 border-b border-border-soft">
                <span className="font-display font-bold text-[40px] md:text-[48px] leading-none text-muted/40">
                  {c.num}
                </span>
                <div>
                  <h3 className="text-[16px] md:text-[18px] font-bold tracking-[-0.01em] text-foreground leading-[1.25]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[14px] leading-[1.7] text-muted">
                    {c.desc}
                  </p>
                </div>
                <span
                  className={`inline-flex h-8 items-center px-4 rounded-full text-[12px] font-bold tracking-[0.15em] justify-self-start md:justify-self-end ${c.badgeClass}`}
                >
                  {c.badge}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

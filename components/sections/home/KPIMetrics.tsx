"use client";

import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const METRICS = [
  { value: 200, suffix: "+", label: "Patents", desc: "특허 출원 및 등록" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Security", desc: "QR 복제 공격 차단율" },
  { value: 2, suffix: "W", label: "Onboarding", desc: "계약 후 최단 도입 기간" },
  { value: 2018, label: "Since", desc: "위고컴퍼니 설립" },
];

export function KPIMetrics() {
  return (
    <section className="relative py-12 md:py-28 bg-white">
      <div className="container-base">
        <div className="relative rounded-[12px] md:rounded-[32px] bg-surface px-6 py-8 md:px-16 md:py-16 lg:px-20">
          {/* Header row */}
          <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-end md:gap-10 mb-8 md:mb-16">
            <div>
              <p className="text-[14px] md:text-[14px] font-semibold tracking-[3px] uppercase text-brand">
                Performance
              </p>
              <Reveal>
 <h2 className="mt-3 md:mt-6 font-display font-bold text-[26px] md:text-[40px] leading-[29px] md:leading-[44px] tracking-[-1px]">
                  Key Metrics
                </h2>
              </Reveal>
            </div>
            <div className="hidden md:block h-px bg-muted/30 self-end mb-3" />
            <Reveal delay={0.12}>
 <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[27px] text-muted md:text-right md:max-w-[240px]">
                데이터로 증명하는 위고컴퍼니의
                <br className="hidden md:block" /> 압도적인 기술 퍼포먼스
              </p>
            </Reveal>
          </div>

          {/* 4-metric row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-12">
            {METRICS.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <div className="font-display font-bold text-[28px] md:text-[56px] lg:text-[60px] leading-[1] tracking-[-2px] text-brand">
                    <Counter
                      value={m.value}
                      decimals={m.decimals}
                      suffix={m.suffix}
                    />
                  </div>
                  <p className="mt-3 md:mt-5 text-[16px] md:text-[20px] font-bold tracking-normal text-foreground">
                    {m.label}
                  </p>
 <p className="mt-2 text-[12px] md:text-[14px] text-muted leading-[19px] md:leading-[22px]">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

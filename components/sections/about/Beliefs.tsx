"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Beliefs() {
  return (
    <section className="py-12 md:py-28 bg-white">
      <div className="container-base">
        <p className="flex items-center gap-3 text-[14px] md:text-[14px] font-semibold tracking-[3px] uppercase text-brand">
          <span className="h-px w-8 bg-brand" />
          Philosophy
        </p>

        <Reveal>
          <h2 className="mt-3 md:mt-6 font-display font-bold text-[26px] md:text-[40px] lg:text-[56px] xl:text-[64px] leading-[1.1] tracking-[-1px]">
            위고컴퍼니가
            <br />
            <span className="text-brand">믿는 것들</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 md:mt-16 rounded-[12px] md:rounded-[28px] bg-surface p-6 md:p-14 lg:p-16">
            <p className="text-[16px] md:text-[24px] font-bold tracking-normal text-foreground leading-[1.6]">
              기술은 사람을 위해 존재해야 합니다.
            </p>
            <div className="mt-4 space-y-2 text-[14px] md:text-[16px] leading-[1.75] text-muted">
              <p>
                우리는 복잡한 기술을 드러내기보다, 자연스럽게 스며드는 경험을
                만듭니다.
              </p>
              <p>
                AI는 더 똑똑해지는 것이 아니라, 사람을 더 이해하는 방향으로
                나아가야 한다고 믿습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

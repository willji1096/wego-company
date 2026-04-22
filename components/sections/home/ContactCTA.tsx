"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContactStore } from "@/lib/stores/contact";

export function ContactCTA() {
  const setOpen = useContactStore((s) => s.setOpen);

  return (
    <section className="py-12 md:py-28">
      <div className="container-base">
        <div className="relative overflow-hidden rounded-[14px] md:rounded-[32px] bg-brand text-white px-4 py-12 md:py-24 lg:py-32">
          <div
            aria-hidden
            className="absolute -top-[300px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/15 blur-[140px] pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-[300px] left-[-100px] w-[600px] h-[600px] rounded-full bg-white/10 blur-[140px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-bold text-[30px] md:text-[40px] lg:text-[48px] xl:text-[60px] leading-[1.15] tracking-[-1px] text-balance"
            >
              AI와 보안 기술로
              <br />
              함께 성장할 준비가 되셨나요?
            </motion.h2>

            <p className="mt-3 md:mt-8 text-[14px] md:text-[16px] leading-[1.75] text-white/70 max-w-2xl">
              위고컴퍼니의 혁신적인 기술과 함께 새로운 비즈니스를 시작해보세요.
              <br className="hidden md:block" />
              파트너십 · 투자 · 제품 문의 모두 환영합니다.
            </p>

            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 md:mt-12 inline-flex items-center gap-3 h-14 md:h-16 pl-6 md:pl-8 pr-2.5 rounded-full bg-white text-brand font-semibold text-[15px] md:text-[16px] tracking-normal transition-colors hover:bg-white/95"
            >
              제휴 문의하기
              <span className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-brand text-white">
                <ArrowRight size={16} />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

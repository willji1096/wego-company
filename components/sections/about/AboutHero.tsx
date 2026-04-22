"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white pt-28 md:pt-40 pb-16 md:pb-36">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-brand/20 blur-[160px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-base relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-[14px] md:text-[14px] font-semibold tracking-[0.22em] uppercase text-brand"
        >
          <span className="h-px w-8 bg-brand" />
          Company Overview
        </motion.p>

        <h1 className="mt-8 font-display font-medium leading-[1.05] tracking-[-0.025em] text-[36px] md:text-[64px] lg:text-[88px] xl:text-[120px]">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="inline-block"
            >
              We <span className="text-brand">Design</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
              className="inline-block"
            >
              Technology.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 md:mt-10 text-[16px] md:text-[18px] leading-[1.8] text-white/70 max-w-xl"
        >
          AI와 보안 기술로 산업의 미래를 디자인합니다.
          <br />
          We design tomorrow&apos;s industry
          <br className="hidden sm:block" /> with AI and security technology.
        </motion.p>
      </div>
    </section>
  );
}

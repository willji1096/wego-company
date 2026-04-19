"use client";

import { motion } from "framer-motion";

export function NewsHero({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  return (
    <section
      className={`relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-28 ${
        isDark ? "bg-ink text-white" : "bg-white text-foreground"
      }`}
    >
      {isDark && (
        <>
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[540px] h-[540px] rounded-full bg-brand/20 blur-[140px] pointer-events-none"
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
        </>
      )}

      <div className="container-base relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex items-center gap-3 text-[14px] md:text-[14px] font-semibold tracking-[0.22em] uppercase ${
            isDark ? "text-white/70" : "text-muted"
          }`}
        >
          <span
            className={`h-px w-8 ${isDark ? "bg-white/60" : "bg-muted/60"}`}
          />
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mt-6 md:mt-8 font-display font-bold text-[clamp(32px,6vw,80px)] leading-[1.05] tracking-[-0.025em]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`mt-8 text-[14px] md:text-[16px] leading-[1.7] max-w-2xl ${
              isDark ? "text-white/70" : "text-muted"
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

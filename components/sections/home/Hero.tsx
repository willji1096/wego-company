"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#";

function scrambleOnce(text: string): string {
  return text
    .split("")
    .map((c) =>
      c === " " || c === "."
        ? c
        : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
    )
    .join("");
}

/**
 * Scrambles text once on mount, then on each `key` change.
 * Use a parent ticker to change the `cycleKey` prop to re-scramble.
 */
function ScrambleText({
  text,
  duration = 900,
  delay = 0,
  cycleKey = 0,
  className,
}: {
  text: string;
  duration?: number;
  delay?: number;
  cycleKey?: number;
  className?: string;
}) {
  const [out, setOut] = useState(text);
  const rafRef = useRef(0);

  useEffect(() => {
    let start = 0;
    setOut(scrambleOnce(text));

    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start - delay;
      if (elapsed < 0) {
        setOut(scrambleOnce(text));
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, elapsed / duration);
      const settled = Math.floor(p * text.length);
      const next = text
        .split("")
        .map((c, i) => {
          if (i < settled || c === " " || c === ".") return c;
          return SCRAMBLE_CHARS[
            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
          ];
        })
        .join("");
      setOut(next);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setOut(text);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [text, duration, delay, cycleKey]);

  return (
    <span className={className} aria-label={text}>
      {out}
    </span>
  );
}

const CYCLE_WORDS = ["Technology.", "Trust.", "Future.", "Impact."];

function useCycle(length: number, intervalMs: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);
  return i;
}

export function Hero() {
  const idx = useCycle(CYCLE_WORDS.length, 4200);
  const currentWord = CYCLE_WORDS[idx];

  return (
    <section className="relative bg-white pt-16 md:pt-28 pb-8 md:pb-24">
      <div className="container-base">
        <div className="grid gap-5 md:gap-6 md:grid-cols-[minmax(0,1.95fr)_minmax(0,1fr)]">
          {/* Left — clean blue panel */}
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-brand p-4 md:p-14 lg:p-16 min-h-[420px] md:min-h-[600px] flex flex-col justify-center">
            <div className="relative max-w-[720px]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[12px] md:text-[18px] leading-[1.55] font-medium tracking-[0.2em] md:tracking-[0.15em] uppercase text-[color:var(--brand-eyebrow)]"
              >
                We Design Technology
              </motion.p>

              <h1 className="mt-4 md:mt-8 font-display font-medium text-white tracking-[-0.025em] text-[clamp(40px,10vw,96px)] leading-[1] md:leading-[0.95]">
                <span className="block">
                  <ScrambleText text="We Design" duration={800} delay={120} />
                </span>
                <span className="block">
                  <ScrambleText
                    text={currentWord}
                    duration={700}
                    delay={idx === 0 ? 350 : 0}
                    cycleKey={idx}
                  />
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-5 md:mt-12 pt-4 md:pt-10 border-t border-white/20 text-white space-y-1.5"
              >
                <p className="text-[14px] md:text-[20px] leading-[1.55] md:leading-[1.625]">
                  기술을 설계하는 팀, 산업의 미래를 디자인합니다.
                </p>
                <p className="text-[12px] md:text-[16px] leading-[1.5] text-white/90">
                  AI와 블록체인의 융합으로 새로운 가치를 창출합니다.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right — image card + dark link card */}
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="relative overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#f1f5f9] h-[110px] md:h-auto md:flex-1 md:min-h-[416px]">
              <Image
                src="/hero/cube.jpg"
                alt="WEGO technology visualization"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-overlay bg-brand/20"
              />
              <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 text-white">
                <p className="text-[12px] md:text-[14px] font-medium tracking-[0.2em] md:tracking-[0.22em] uppercase opacity-80">
                  Since
                </p>
                <p className="mt-1 font-display font-bold text-[20px] md:text-[40px] leading-none">
                  2018
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="group relative overflow-hidden rounded-[16px] md:rounded-[24px] bg-ink text-white px-4 md:px-7 py-4 md:py-7 flex items-center justify-between min-h-[110px] md:min-h-[160px] transition-colors hover:bg-[#141b2e]"
            >
              <div>
                <p className="text-[12px] md:text-[12px] font-medium tracking-[0.22em] uppercase text-white/70">
                  Company Profile
                </p>
                <p className="mt-2 text-[20px] md:text-[24px] font-bold tracking-[-0.01em]">
                  View About
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-transform group-hover:translate-x-1 group-hover:bg-white group-hover:text-ink">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

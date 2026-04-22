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

function LiquidNoiseBackground() {
  const horizontalLines = Array.from({ length: 25 }, (_, i) => 2 + i * 4);
  const verticalLines = Array.from({ length: 10 }, (_, i) => i * 12);

  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-40"
    >
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <filter id="liquid-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.005"
              numOctaves={3}
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.01 0.005; 0.03 0.01; 0.01 0.02; 0.01 0.005"
                dur="15s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="100"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <g filter="url(#liquid-noise)">
          {horizontalLines.map((y) => (
            <line
              key={`h-${y}`}
              x1="-10%"
              y1={`${y}%`}
              x2="110%"
              y2={`${y}%`}
              stroke="white"
              strokeWidth={1.5}
              opacity={0.7}
            />
          ))}
          {verticalLines.map((x) => (
            <line
              key={`v-${x}`}
              x1={`${x}%`}
              y1="-10%"
              x2={`${x}%`}
              y2="110%"
              stroke="white"
              strokeWidth={0.5}
              opacity={0.3}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

function OldHero() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      className="grid gap-5 md:gap-6 md:grid-cols-[minmax(0,1.95fr)_minmax(0,1fr)]"
    >
      {/* Left — blue panel with liquid-noise bg */}
      <div className="bg-[#053ae7] rounded-[2.5rem] relative overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white min-h-[420px] md:min-h-[600px]">
        <LiquidNoiseBackground />
        <div className="relative z-10 max-w-4xl">
          <div className="mb-8 text-[#9aceff] font-medium tracking-wide text-lg uppercase">
            We Design Technology
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[0.95] tracking-tight mb-10">
            We Design <br />
            Technology.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center border-t border-white/20 pt-10">
            <div className="text-lg md:text-xl max-w-xl text-blue-100 leading-relaxed font-light">
              기술을 설계하는 팀, 산업의 미래를 디자인합니다.
              <br />
              <span className="text-base text-blue-300 mt-2 block">
                AI와 블록체인의 융합으로 새로운 가치를 창출합니다.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right — image card + dark link card */}
      <div className="flex flex-col gap-5 md:gap-6">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#f1f5f9] h-[160px] md:h-auto md:flex-1 md:min-h-[416px]">
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
    </motion.div>
  );
}

function NewHero() {
  const idx = useCycle(CYCLE_WORDS.length, 4200);
  const currentWord = CYCLE_WORDS[idx];

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      className="grid gap-5 md:gap-6 md:grid-cols-[minmax(0,1.95fr)_minmax(0,1fr)]"
    >
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

          <h1 className="mt-4 md:mt-8 font-display font-medium text-white tracking-[-0.025em] text-[40px] md:text-[72px] lg:text-[96px] leading-[1] md:leading-[0.95]">
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
            <p className="text-[12px] md:text-[16px] leading-[1.5] text-white/70">
              AI와 블록체인의 융합으로 새로운 가치를 창출합니다.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right — image card + dark link card */}
      <div className="flex flex-col gap-5 md:gap-6">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#f1f5f9] h-[160px] md:h-auto md:flex-1 md:min-h-[416px]">
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
    </motion.div>
  );
}

type HeroVariant = "new" | "old";

function VariantToggle({
  value,
  onChange,
}: {
  value: HeroVariant;
  onChange: (v: HeroVariant) => void;
}) {
  return (
    <div className="mb-4 md:mb-6 flex justify-end">
      <div
        role="tablist"
        aria-label="Hero version toggle"
        className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-[12px] font-medium"
      >
        {(["new", "old"] as const).map((key) => {
          const selected = value === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(key)}
              className={`rounded-full px-3 md:px-4 py-1.5 tracking-[0.12em] uppercase transition-colors ${
                selected
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {key === "new" ? "New" : "Old"}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  const [variant, setVariant] = useState<HeroVariant>("new");

  return (
    <section className="relative bg-white pt-16 md:pt-28 pb-8 md:pb-24">
      <div className="container-base">
        <VariantToggle value={variant} onChange={setVariant} />
        {variant === "new" ? <NewHero /> : <OldHero />}
      </div>
    </section>
  );
}

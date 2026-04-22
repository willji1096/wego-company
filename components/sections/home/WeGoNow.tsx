"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { NEWS_ITEMS } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";

export function WeGoNow() {
  const items = NEWS_ITEMS.slice(0, 4);

  return (
    <section className="relative py-12 md:py-28 bg-white">
      <div className="container-base">
        <div className="rounded-[12px] md:rounded-[32px] bg-surface px-4 py-5 md:px-16 md:py-16 lg:px-20">
          <div className="flex items-end justify-between gap-6 mb-6 md:mb-16">
            <div>
              <p className="text-[14px] md:text-[14px] font-semibold tracking-[0.22em] uppercase text-brand">
                Updates
              </p>
              <Reveal>
                <h2 className="mt-3 font-display font-bold text-[26px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
                  WeGo Now.
                </h2>
              </Reveal>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[14px] md:text-[14px] font-semibold tracking-[-0.01em] hover:text-brand transition-colors"
            >
              모든 소식 보기
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.08}>
                <Link
                  href={`/news/${n.slug}`}
                  className="group block h-full"
                >
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    <div
                      className={`relative aspect-[4/3] rounded-[12px] md:rounded-[18px] overflow-hidden bg-gradient-to-br ${n.gradient}`}
                    >
                      <span className="absolute top-4 left-4 inline-flex h-7 items-center px-3 rounded-full bg-white/95 backdrop-blur text-[12px] font-semibold tracking-[0.04em] text-foreground shadow-sm">
                        {n.category}
                      </span>
                    </div>
                    <h3 className="mt-3 md:mt-5 text-[16px] md:text-[16px] font-semibold leading-[1.5] tracking-[-0.01em] text-foreground line-clamp-2 group-hover:text-brand transition-colors">
                      {n.title}
                    </h3>
                    <time className="mt-3 text-[12px] md:text-[14px] text-muted tracking-[0.02em]">
                      {formatDate(n.date)}
                    </time>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

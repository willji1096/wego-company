"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { NewsHero } from "@/components/news/NewsHero";
import { IR_ITEMS } from "@/lib/data/ir";
import { formatDate } from "@/lib/utils";

export function IRPageClient() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return IR_ITEMS;
    const q = query.toLowerCase();
    return IR_ITEMS.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.excerpt.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <NewsHero
        eyebrow="IR"
        title="IR Center"
        subtitle="위고 컴퍼니의 새로운 소식을 전해드립니다."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-base">
          <div className="flex items-center justify-between gap-4 mb-6 md:mb-10">
            <p className="text-[14px] md:text-[16px] text-foreground">
              Total <b className="text-brand">{filtered.length}</b>
            </p>
            <div className="relative w-full max-w-[280px]">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색어를 입력하세요"
                className="w-full h-11 pl-11 pr-4 rounded-full bg-surface border border-transparent text-[14px] placeholder:text-muted focus:border-brand focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center text-[14px] text-muted border-t border-b border-border">
              검색 결과가 없습니다.
            </div>
          ) : (
            <ul className="border-t border-border">
              {filtered.map((item) => (
                <li key={item.slug} className="border-b border-border-soft">
                  <Link
                    href={`/ir/${item.slug}`}
                    className="flex items-center gap-4 md:gap-8 py-6 md:py-7 hover:bg-surface -mx-4 md:-mx-6 px-4 md:px-6 rounded-xl transition-colors group"
                  >
                    <span className="inline-flex h-7 items-center px-4 rounded-full bg-brand-soft text-brand text-[12px] md:text-[12px] font-bold tracking-[0.04em] shrink-0 min-w-[60px] justify-center">
                      {item.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] md:text-[16px] font-semibold tracking-[-0.01em] truncate group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <time className="text-[12px] md:text-[14px] text-muted tabular-nums shrink-0">
                      {formatDate(item.date)}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

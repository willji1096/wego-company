"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  NEWS_CATEGORIES,
  NEWS_ITEMS,
  type NewsCategory,
} from "@/lib/data/news";
import { formatDate, cn } from "@/lib/utils";

const PAGE_SIZE = 9;

export function NewsList() {
  const [category, setCategory] = useState<NewsCategory>("전체");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return NEWS_ITEMS.filter((item) => {
      if (category !== "전체" && item.category !== category) return false;
      return true;
    });
  }, [category]);

  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap mb-7 md:mb-14">
        {NEWS_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setPage(1);
            }}
            className={cn(
              "h-10 px-4 md:px-5 rounded-full text-[12px] md:text-[14px] font-medium tracking-normal transition-all",
              category === c
                ? "bg-foreground text-white"
                : "border border-border text-muted hover:border-foreground hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {pageItems.length === 0 ? (
        <div className="py-24 text-center text-[14px] text-muted border-t border-b border-border">
          해당 카테고리에 등록된 소식이 없습니다.
        </div>
      ) : (
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (i % PAGE_SIZE) * 0.04,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <Link
                href={`/news/${item.slug}`}
                className="group block h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                  className="h-full flex flex-col rounded-[14px] md:rounded-[20px] overflow-hidden border border-border bg-white"
                >
                  <div
                    className={`relative aspect-[4/3] bg-gradient-to-br ${item.gradient}`}
                  >
                    <span className="absolute top-4 left-4 inline-flex h-7 items-center px-3 rounded-full bg-white/95 backdrop-blur text-[12px] font-semibold tracking-[1px] text-foreground shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <h3 className="text-[16px] md:text-[16px] font-semibold leading-[1.5] tracking-normal text-foreground line-clamp-2 group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-muted line-clamp-2 leading-[1.6] flex-1">
                      {item.excerpt}
                    </p>
                    <div className="mt-4 md:mt-5 pt-4 md:pt-5 border-t border-border-soft flex items-center justify-between">
                      <time className="text-[12px] text-muted-soft tabular-nums">
                        {formatDate(item.date)}
                      </time>
                      <span className="text-brand">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}

      <div className="mt-10 md:mt-16 flex justify-center items-center gap-1.5">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="h-11 w-11 rounded-full border border-border text-[14px] disabled:opacity-30 hover:border-foreground transition-colors"
        >
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={cn(
              "h-11 w-11 rounded-full text-[14px] transition-all",
              p === page
                ? "bg-foreground text-white"
                : "text-muted hover:text-foreground"
            )}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="h-11 w-11 rounded-full border border-border text-[14px] disabled:opacity-30 hover:border-foreground transition-colors"
        >
          ›
        </button>
      </div>
    </>
  );
}

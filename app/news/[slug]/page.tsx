import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { NEWS_ITEMS, getNewsBySlug, getAdjacentNews } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return { title: "News" };
  return { title: item.title, description: item.excerpt };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const { prev, next } = getAdjacentNews(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white pt-28 md:pt-40 pb-16 md:pb-32">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-brand/15 blur-[140px] pointer-events-none"
        />
        <div className="container-base relative">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/10 border border-white/15 text-[12px] md:text-[14px] font-medium text-white hover:bg-white/15 transition-colors"
          >
            <ArrowLeft size={14} />
            목록으로
          </Link>
          <div className="mt-5 md:mt-14 max-w-4xl">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="inline-flex h-7 items-center px-3 rounded-full bg-brand text-white text-[12px] font-bold tracking-[0.08em]">
                {item.category}
              </span>
              <time className="text-[14px] md:text-[14px] text-white/70 tabular-nums">
                {formatDate(item.date)}
              </time>
            </div>
            <h1 className="font-display font-bold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-[1.25] tracking-[-0.02em]">
              {item.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-14 md:py-28 bg-white">
        <div className="container-base max-w-[760px]">
          <div className="border-l-[3px] border-brand pl-5 py-1 mb-7 md:mb-10">
            <p className="text-[16px] md:text-[18px] font-bold leading-[1.7] text-foreground">
              {item.excerpt}
            </p>
          </div>
          <div className="text-[14px] md:text-[16px] leading-[1.85] text-muted whitespace-pre-wrap">
            {item.content}
          </div>
        </div>
      </article>

      {/* Prev/Next */}
      <section className="border-t border-border-soft bg-white py-12 md:py-16">
        <div className="container-base max-w-[760px]">
          <div className="grid gap-4 md:grid-cols-2">
            {prev ? (
              <Link
                href={`/news/${prev.slug}`}
                className="group flex items-center gap-4 p-5 border border-border rounded-2xl hover:border-foreground transition-colors"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-border group-hover:bg-foreground group-hover:text-white group-hover:border-foreground transition-all shrink-0">
                  <ArrowLeft size={15} />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] tracking-[0.2em] text-muted mb-1">
                    PREV
                  </p>
                  <p className="text-[14px] font-medium truncate">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/news/${next.slug}`}
                className="group flex items-center gap-4 p-5 border border-border rounded-2xl hover:border-foreground transition-colors md:flex-row-reverse md:text-right"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-border group-hover:bg-foreground group-hover:text-white group-hover:border-foreground transition-all shrink-0">
                  <ArrowRight size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] tracking-[0.2em] text-muted mb-1">
                    NEXT
                  </p>
                  <p className="text-[14px] font-medium truncate">{next.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-foreground text-white text-[14px] font-semibold tracking-[-0.01em]"
            >
              목록으로
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

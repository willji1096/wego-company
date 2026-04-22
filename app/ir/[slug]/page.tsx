import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IR_ITEMS, getIRBySlug } from "@/lib/data/ir";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return IR_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getIRBySlug(slug);
  if (!item) return { title: "IR" };
  return { title: item.title, description: item.excerpt };
}

function daysUntil(dateStr?: string): number | null {
  if (!dateStr) return null;
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default async function IRDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getIRBySlug(slug);
  if (!item) notFound();

  const dday = daysUntil(item.deadlineDate);
  const hasJob = !!item.sections?.overview;

  return (
    <>
      {/* Hero */}
      <section
        className={`relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-32 ${
          hasJob ? "bg-brand text-white" : "bg-ink text-white"
        }`}
      >
        {hasJob && (
          <>
            <div
              aria-hidden
              className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-white/15 blur-[140px] pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </>
        )}
        <div className="container-base relative">
          <Link
            href="/ir"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/15 border border-white/20 text-[12px] md:text-[14px] font-medium text-white hover:bg-white/25 transition-colors"
          >
            <ArrowLeft size={14} />
            목록으로
          </Link>
          <div className="mt-5 md:mt-14 max-w-4xl">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="inline-flex h-7 items-center px-3 rounded-full bg-white/20 backdrop-blur text-white text-[12px] md:text-[12px] font-bold tracking-[0.08em]">
                {item.category}
              </span>
              <time className="text-[14px] md:text-[14px] text-white/70 tabular-nums">
                {formatDate(item.date)}
              </time>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="font-display font-bold text-[24px] md:text-[32px] lg:text-[36px] xl:text-[42px] leading-[1.25] tracking-[-0.02em]">
                {item.title}
              </h1>
              {dday !== null && dday > 0 && (
                <span className="inline-flex h-8 items-center px-3 rounded-full bg-white text-brand text-[14px] font-bold tracking-[-0.01em]">
                  D-{dday}
                </span>
              )}
            </div>
            {item.sections?.tagline && (
              <p className="mt-5 text-[14px] md:text-[16px] text-white/70 leading-[1.6]">
                {item.sections.tagline}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white py-14 md:py-28">
        <div className="container-base max-w-[1000px]">
          {hasJob && item.sections ? (
            <>
              {item.sections.overview && (
                <section className="mb-10 md:mb-16">
                  <h2 className="inline-block border-b-[3px] border-brand pb-1.5 text-[18px] md:text-[20px] font-bold leading-[1.3] mb-6">
                    채용 개요
                  </h2>
                  <div className="rounded-[14px] md:rounded-[20px] bg-surface p-4 md:p-8">
                    <dl className="grid gap-3">
                      {item.sections.overview.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] gap-4 text-[14px] md:text-[16px]"
                        >
                          <dt className="text-muted">{row.label}</dt>
                          <dd className="text-foreground">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </section>
              )}

              {item.sections.process && (
                <section className="mb-10 md:mb-16">
                  <h2 className="inline-block border-b-[3px] border-brand pb-1.5 text-[18px] md:text-[20px] font-bold leading-[1.3] mb-8">
                    채용 절차
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                    {item.sections.process.map((step, i) => (
                      <div
                        key={step.step}
                        className="flex flex-col items-center text-center"
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand font-bold text-[16px]">
                          {step.step}
                        </span>
                        <p className="mt-4 text-[14px] md:text-[16px] font-bold text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-1.5 text-[12px] md:text-[14px] text-muted leading-[1.5]">
                          {step.desc}
                        </p>
                        {i < item.sections!.process!.length - 1 && (
                          <ArrowRight
                            size={16}
                            className="hidden lg:block absolute mt-3 translate-x-[110px] text-muted/40"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {item.sections.positions && (
                <section className="mb-10 md:mb-16">
                  <h2 className="inline-block border-b-[3px] border-brand pb-1.5 text-[18px] md:text-[20px] font-bold leading-[1.3] mb-6">
                    모집 부문
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {item.sections.positions.map((pos) => (
                      <div
                        key={pos.title}
                        className="group p-6 rounded-[14px] md:rounded-[20px] bg-surface hover:bg-brand-soft transition-colors cursor-pointer"
                      >
                        <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-brand">
                          {pos.tag}
                        </span>
                        <h3 className="mt-2 text-[18px] md:text-[18px] font-bold text-foreground leading-[1.25]">
                          {pos.title}
                        </h3>
                        <p className="mt-1 text-[12px] md:text-[14px] text-muted">
                          {pos.type}
                        </p>
                        <div className="mt-4 flex justify-end">
                          <ArrowRight
                            size={16}
                            className="text-muted group-hover:text-brand transition-colors"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {item.sections.benefits && (
                <section>
                  <h2 className="inline-block border-b-[3px] border-brand pb-1.5 text-[18px] md:text-[20px] font-bold leading-[1.3] mb-6">
                    복지 및 혜택
                  </h2>
                  <div className="aspect-[16/6] rounded-[14px] md:rounded-[20px] bg-gradient-to-br from-[#dbeafe] via-white to-[#e0e7ff] mb-6" />
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {item.sections.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-[14px] md:text-[14px] text-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          ) : (
            <div className="max-w-[760px] mx-auto text-[14px] md:text-[16px] leading-[1.85] text-muted whitespace-pre-wrap">
              {item.content}
            </div>
          )}
        </div>
      </article>

      <section className="border-t border-border-soft bg-white py-12 md:py-16">
        <div className="container-base text-center">
          <Link
            href="/ir"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-foreground text-white text-[14px] font-semibold tracking-[-0.01em]"
          >
            목록으로
          </Link>
        </div>
      </section>
    </>
  );
}

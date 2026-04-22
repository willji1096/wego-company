import type { ReactNode } from "react";
import { NewsHero } from "@/components/news/NewsHero";

export function LegalPage({
  title,
  eyebrow,
  meta,
  children,
}: {
  title: string;
  eyebrow: string;
  meta: string;
  children: ReactNode;
}) {
  return (
    <>
      <NewsHero eyebrow={eyebrow} title={title} subtitle={meta} />

      <section className="bg-white py-14 md:py-28">
        <div className="container-base max-w-[920px] mx-auto">
          <div className="legal-doc space-y-10 md:space-y-14">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalArticle({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="space-y-4">
 <h2 className="text-[18px] md:text-[22px] font-semibold tracking-normal text-ink leading-[23px] md:leading-[29px]">
        {title}
      </h2>
 <div className="text-[14px] md:text-[15px] text-muted leading-[25px] md:leading-[27px] space-y-3">
        {children}
      </div>
    </article>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 marker:text-muted/50">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-[13px] md:text-[14px] border-collapse">
        <thead>
          <tr className="bg-surface text-foreground">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-semibold border-b border-border"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border-soft">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

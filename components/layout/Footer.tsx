import Link from "next/link";
import {
  BRAND,
  BUSINESS_LINKS,
  COMPANY_INFO,
  LEGAL_LINKS,
  NAV_ITEMS,
} from "@/lib/data/nav";

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-10 md:pt-20 pb-6 md:pb-10">
      <div className="container-base">
        {/* Mobile: brand+address on top, links 3-col below. Desktop: 4-col as before. */}
        <div className="lg:grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand + address */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-[20px] md:text-[32px] font-bold tracking-[0.08em]">
                {BRAND.name}
              </span>
            </Link>
            <ul className="mt-3 md:mt-8 space-y-1 md:space-y-2 text-[12px] md:text-[14px] text-white/70 leading-[1.7]">
              <li>
                {COMPANY_INFO.entity}
                <span className="mx-1.5 text-white/50">·</span>
                대표이사 {COMPANY_INFO.ceo}
                <span className="mx-1.5 text-white/50">·</span>
                {COMPANY_INFO.region}
              </li>
              <li>
                Tel. {COMPANY_INFO.tel}
                <span className="mx-1.5 text-white/50">·</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Links — mobile 3-col, desktop pass through grid */}
          <div className="mt-7 lg:mt-0 grid grid-cols-3 gap-4 lg:contents">
            <FooterColumn title="Company" items={NAV_ITEMS} />
            <FooterColumn title="Business" items={BUSINESS_LINKS} />
            <FooterColumn title="Legal" items={LEGAL_LINKS} />
          </div>
        </div>

        <div className="mt-7 md:mt-16 pt-5 md:pt-8 border-t border-ink-line flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[12px] tracking-[0.04em] text-white/50">
            © 2026 WeGo Company Inc. All rights reserved.
          </p>
          <ul className="flex items-center gap-3 text-[12px] text-white/70">
            {LEGAL_LINKS.map((link, i) => (
              <li key={link.href} className="flex items-center gap-3">
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
                {i < LEGAL_LINKS.length - 1 && (
                  <span className="text-white/30">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[12px] md:text-[16px] font-semibold tracking-[-0.01em] text-white mb-2 md:mb-6">
        {title}
      </p>
      <ul className="space-y-1.5 md:space-y-3.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[12px] md:text-[14px] text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

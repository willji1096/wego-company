import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-1.5 text-[12px] text-muted">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href && !last ? (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={last ? "text-foreground font-medium" : ""}>
                {item.label}
              </span>
            )}
            {!last && <ChevronRight size={12} className="text-muted-soft" />}
          </span>
        );
      })}
    </nav>
  );
}

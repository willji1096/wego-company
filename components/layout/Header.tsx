"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, BRAND } from "@/lib/data/nav";

export function Header({ onContactClick }: { onContactClick?: () => void }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const onHero = false;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border-soft"
          : "bg-white"
      )}
    >
      <div className="container-base flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="group">
          <span
            className={cn(
              "text-[20px] md:text-[20px] font-bold tracking-[0.08em] transition-colors",
              onHero ? "text-white" : "text-foreground"
            )}
          >
            {BRAND.shortName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative inline-flex items-center gap-1 text-[14px] font-semibold tracking-[0.12em] transition-colors",
                  onHero
                    ? "text-white/90 hover:text-white"
                    : "text-muted hover:text-foreground"
                )}
              >
                {item.label}
                {item.hasSubmenu && (
                  <ChevronDown size={14} className="opacity-70" />
                )}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-2 h-[2px] bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onContactClick}
            className={cn(
              "hidden md:inline-flex items-center gap-2 h-11 px-5 rounded-full text-[12px] font-semibold tracking-[0.12em] transition-colors",
              onHero
                ? "bg-white text-brand hover:bg-white/90"
                : "bg-brand text-white hover:bg-brand-hover"
            )}
          >
            Contact Us
            <ArrowRight size={14} />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 -mr-2 transition-colors",
              onHero ? "text-white" : "text-foreground"
            )}
            aria-label="menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-border-soft"
          >
            <nav className="container-base flex flex-col py-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="text-[16px] font-semibold tracking-[0.12em] py-2 text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  closeMobile();
                  onContactClick?.();
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-brand text-white text-[14px] font-semibold tracking-[0.12em]"
              >
                Contact Us
                <ArrowRight size={14} />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

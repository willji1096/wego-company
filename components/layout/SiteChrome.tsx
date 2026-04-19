"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { ContactModal } from "@/components/contact/ContactModal";
import { useContactStore } from "@/lib/stores/contact";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const setOpen = useContactStore((s) => s.setOpen);
  return (
    <>
      <SmoothScroll />
      <Header onContactClick={() => setOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactModal />
    </>
  );
}

import { AboutHero } from "@/components/sections/about/AboutHero";
import { Beliefs } from "@/components/sections/about/Beliefs";
import { ConnectPeople } from "@/components/sections/about/ConnectPeople";
import { Changes } from "@/components/sections/about/Changes";
import { History } from "@/components/sections/about/History";
import { ContactCTA } from "@/components/sections/home/ContactCTA";

export const metadata = {
  title: "About",
  description:
    "위고컴퍼니 소개 — 믿는 것들, AI로 사람과 세상을 연결하는 방식, 주요 발자취.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Beliefs />
      <ConnectPeople />
      <Changes />
      <History />
      <ContactCTA />
    </>
  );
}

import { NewsHero } from "@/components/news/NewsHero";
import { NewsList } from "@/components/news/NewsList";

export const metadata = {
  title: "News",
  description: "위고컴퍼니 공지, AI·에듀테크, TECH, 파트너십 소식",
};

export default function NewsPage() {
  return (
    <>
      <NewsHero
        eyebrow="NEWS"
        title="WeGo Now."
        subtitle="위고컴퍼니의 최근 뉴스, 보도자료, 공지사항을 확인하세요."
      />
      <section className="py-16 md:py-28">
        <div className="container-base">
          <NewsList />
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-white min-h-[100svh] grid place-items-center">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[540px] h-[540px] rounded-full bg-brand/20 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[6%] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-base w-full relative py-20 md:py-28">
        <p className="flex items-center gap-3 text-[14px] font-semibold tracking-[3px] uppercase text-[color:var(--brand-eyebrow)]">
          <span className="h-px w-8 bg-[color:var(--brand-eyebrow)]" />
          Error 404
        </p>

        <h1 className="mt-6 md:mt-8 font-display font-bold text-[56px] md:text-[120px] lg:text-[160px] leading-[1] tracking-[-2px]">
          404
        </h1>

 <p className="mt-6 md:mt-8 text-[20px] md:text-[28px] font-semibold leading-[25px] md:leading-[35px] tracking-[-1px]">
          페이지를 찾을 수 없습니다.
        </p>

 <p className="mt-4 text-[14px] md:text-[16px] leading-[24px] md:leading-[27px] text-white/70 max-w-xl">
          요청하신 페이지가 이동되었거나 삭제되었을 수 있습니다.
          <br />
          주소를 다시 확인해 주세요.
        </p>

        <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-ink text-[14px] font-semibold tracking-normal hover:bg-white/90 transition-colors"
          >
            <Home size={16} />
            홈으로 이동
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/20 text-white text-[14px] font-semibold tracking-normal hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={16} />
            최근 소식 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

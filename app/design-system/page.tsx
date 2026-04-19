import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Design System",
  description: "WEGO Design System — Tailwind Slate + Figma brand",
};

const SLATE = [
  { step: "50", hex: "#F8FAFC", tw: "slate-50" },
  { step: "100", hex: "#F1F5F9", tw: "slate-100" },
  { step: "200", hex: "#E2E8F0", tw: "slate-200" },
  { step: "300", hex: "#CBD5E1", tw: "slate-300" },
  { step: "400", hex: "#94A3B8", tw: "slate-400" },
  { step: "500", hex: "#64748B", tw: "slate-500" },
  { step: "600", hex: "#475569", tw: "slate-600" },
  { step: "700", hex: "#334155", tw: "slate-700" },
  { step: "800", hex: "#1E293B", tw: "slate-800" },
  { step: "900", hex: "#0F172A", tw: "slate-900" },
  { step: "950", hex: "#020617", tw: "slate-950" },
];

const BRAND = [
  { step: "50", hex: "#EDF1FF" },
  { step: "100", hex: "#D6DFFF" },
  { step: "200", hex: "#ADC0FF" },
  { step: "300", hex: "#8098FF" },
  { step: "400", hex: "#4D70FF" },
  { step: "500", hex: "#2552F5" },
  { step: "600", hex: "#053AE7", note: "PRIMARY · Figma anchor" },
  { step: "700", hex: "#0430C0", note: "hover" },
  { step: "800", hex: "#052599" },
  { step: "900", hex: "#041B70" },
  { step: "950", hex: "#030F40" },
];

// Slim 8-step scale — roles that WEGO actually needs
const TW_TYPE = [
  { name: "text-xs", size: "12px", lh: "16px", role: "caption · date · legal" },
  { name: "text-sm", size: "14px", lh: "20px", role: "body · card body" },
  { name: "text-base", size: "16px", lh: "24px", role: "body-lg · long paragraph" },
  { name: "text-lg", size: "18px", lh: "28px", role: "lead · section intro" },
  { name: "text-2xl", size: "24px", lh: "32px", role: "H3 · card title" },
  { name: "text-4xl md:text-5xl", size: "36→48", lh: "40→1", role: "H2 · section" },
  { name: "text-5xl md:text-6xl", size: "48→60", lh: "1→1", role: "H1 · detail page" },
  { name: "text-6xl md:text-8xl", size: "60→96", lh: "1→1", role: "Display · Hero" },
];

// Role → Tailwind classes
const ROLES = [
  {
    role: "caption",
    tw: "text-xs text-slate-500",
    use: "legal, 날짜, micro",
  },
  {
    role: "body-sm",
    tw: "text-sm leading-6 text-slate-600",
    use: "카드 본문",
  },
  {
    role: "body",
    tw: "text-base leading-7 text-slate-700",
    use: "기본 본문",
  },
  {
    role: "lead",
    tw: "text-lg leading-7 text-slate-800",
    use: "섹션 도입문",
  },
  {
    role: "H4",
    tw: "text-xl font-semibold tracking-tight",
    use: "카드 부제",
  },
  {
    role: "H3",
    tw: "text-2xl font-bold tracking-tight",
    use: "카드 제목",
  },
  {
    role: "H2",
    tw: "text-4xl md:text-5xl font-bold tracking-tight leading-tight",
    use: "섹션 헤드라인",
  },
  {
    role: "H1 (detail)",
    tw: "text-5xl md:text-6xl font-bold tracking-tight leading-none",
    use: "상세 페이지 타이틀",
  },
  {
    role: "Display",
    tw: "text-6xl md:text-8xl font-medium tracking-tighter leading-none",
    use: "Hero 헤드라인",
  },
  {
    role: "eyebrow",
    tw: "text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-blue-700",
    use: "섹션 라벨",
  },
];

export default function DesignSystem() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-28 md:pt-36 pb-16 md:pb-24">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background: "#053AE7",
            opacity: 0.3,
            filter: "blur(140px)",
          }}
        />
        <div className="container-base relative">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            <span className="h-px w-8 bg-blue-300" />
            WEGO · Design System
          </p>
          <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl leading-none tracking-tight">
            Tailwind Slate,
            <br />
            brand anchored.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            Slate 11단 + Tailwind 타이포 스케일 13단을 그대로 사용. 브랜드 컬러만
            Figma spec(#053AE7 = step 600)에 맞춰 11단 도출. 제3자 디자인 시스템
            학습 비용 제로.
          </p>
        </div>
      </section>

      {/* Slate */}
      <DSSection
        title="Neutral · Tailwind Slate"
        eyebrow="01 · Grayscale"
        note="Tailwind 공식 slate 팔레트 그대로. bg-slate-50, text-slate-500 등 Tailwind 클래스로 바로 사용."
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-2">
          {SLATE.map((c) => (
            <div
              key={c.step}
              className="rounded-[10px] overflow-hidden border border-slate-200"
            >
              <div className="h-20" style={{ background: c.hex }} />
              <div className="p-2.5 bg-white">
                <p className="font-mono text-[11px] font-semibold text-slate-900">
                  {c.step}
                </p>
                <p className="font-mono text-[10px] text-slate-500">{c.hex}</p>
                <p className="mt-1 font-mono text-[10px] text-slate-400">
                  {c.tw}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DSSection>

      {/* Brand */}
      <DSSection
        title="Brand · Figma anchor 11-step"
        eyebrow="02 · Primary"
        note="#053AE7 (Figma Blue Ribbon) = step 600. Tailwind 기본 Blue/Indigo로 대체 불가능한 고유 톤이라 커스텀 스케일 유지. HSL 기반 진행비는 Tailwind 동일 스펙."
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-2">
          {BRAND.map((c) => (
            <div
              key={c.step}
              className="rounded-[10px] overflow-hidden border border-slate-200"
            >
              <div className="h-20" style={{ background: c.hex }} />
              <div className="p-2.5 bg-white">
                <p className="font-mono text-[11px] font-semibold text-slate-900">
                  {c.step}
                </p>
                <p className="font-mono text-[10px] text-slate-500">{c.hex}</p>
                {c.note && (
                  <p
                    className="mt-1 text-[9px] font-semibold tracking-[0.1em] uppercase"
                    style={{ color: "#053AE7" }}
                  >
                    {c.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </DSSection>

      {/* Typography Tailwind */}
      <DSSection
        title="Typography · Tailwind 13-step"
        eyebrow="03 · Type"
        note="Tailwind 기본 타이포 스케일 그대로. text-xs ~ text-9xl. 커스텀 clamp 없음 — 반응형은 md:, lg: prefix로 처리."
      >
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
          {TW_TYPE.map((t, i) => (
            <div
              key={t.name}
              className={`grid md:grid-cols-[160px_100px_140px_1fr] gap-3 items-center px-5 py-4 ${
                i > 0 ? "border-t border-slate-100" : ""
              }`}
            >
              <p className="font-mono text-xs font-semibold text-slate-900">
                {t.name}
              </p>
              <p className="font-mono text-[11px] text-slate-500">{t.size}</p>
              <p className="font-mono text-[11px] text-slate-500">{t.lh}</p>
              <p
                className="truncate font-medium"
                style={{
                  fontSize:
                    t.name === "text-9xl"
                      ? "clamp(40px,12vw,128px)"
                      : t.name === "text-8xl"
                      ? "clamp(32px,10vw,96px)"
                      : t.name === "text-7xl"
                      ? "clamp(30px,8vw,72px)"
                      : t.name === "text-6xl"
                      ? "clamp(28px,6.5vw,60px)"
                      : t.size,
                }}
              >
                위고컴퍼니 AI·보안
              </p>
            </div>
          ))}
        </div>
      </DSSection>

      {/* Role → Tailwind utility map */}
      <DSSection
        title="Role → Tailwind class mapping"
        eyebrow="04 · Usage"
        note="컴포넌트에선 이 Tailwind 클래스 조합만 사용. 커스텀 토큰 없음."
      >
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
          {ROLES.map((r, i) => (
            <div
              key={r.role}
              className={`grid md:grid-cols-[140px_1fr_180px] gap-4 items-start md:items-center px-5 py-5 ${
                i > 0 ? "border-t border-slate-100" : ""
              }`}
            >
              <p className="font-mono text-sm font-semibold text-slate-900">
                .{r.role}
              </p>
              <p className="font-mono text-xs text-slate-600 leading-5 break-all">
                {r.tw}
              </p>
              <p className="text-sm text-slate-500">{r.use}</p>
            </div>
          ))}
        </div>
      </DSSection>

      {/* Semantic / role explanation */}
      <DSSection
        title="Semantic tokens — 쉬운 설명"
        eyebrow="05 · Mental model"
        note="2-layer 토큰 시스템. 원시(raw)는 팔레트, 역할(semantic)은 용도. 컴포넌트는 역할만 씀."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3">
              Primitive (원시)
            </p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-700">
                <span className="text-slate-400">bg-</span>slate-50
              </p>
              <p className="text-slate-700">
                <span className="text-slate-400">text-</span>slate-500
              </p>
              <p className="text-slate-700">
                <span className="text-slate-400">text-</span>slate-900
              </p>
            </div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Tailwind 팔레트 이름. 숫자만 있어서 "왜 이 색?" 의도가 안 보임.
              리브랜딩/다크모드 추가 시 전 컴포넌트 수정 필요.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 mb-3">
              Semantic (역할) · Recommended
            </p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-900">
                <span className="text-slate-400">bg-</span>background
              </p>
              <p className="text-slate-900">
                <span className="text-slate-400">text-</span>muted
              </p>
              <p className="text-slate-900">
                <span className="text-slate-400">text-</span>foreground
              </p>
            </div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              용도 이름. <code className="text-slate-700">background</code> →
              내부적으로 slate-50 참조. 다크모드 추가할 때{" "}
              <code className="text-slate-700">background</code> 정의만 바꾸면
              전 컴포넌트 자동 전환.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-mono text-xs text-slate-600">
            <span className="text-slate-400">@theme inline </span>
            <span className="text-slate-900">{"{"}</span>
          </p>
          <p className="font-mono text-xs text-slate-600 pl-4">
            <span className="text-slate-400">--color-background: </span>
            <span className="text-blue-700">var(--color-slate-50);</span>
          </p>
          <p className="font-mono text-xs text-slate-600 pl-4">
            <span className="text-slate-400">--color-foreground: </span>
            <span className="text-blue-700">var(--color-slate-900);</span>
          </p>
          <p className="font-mono text-xs text-slate-600 pl-4">
            <span className="text-slate-400">--color-muted: </span>
            <span className="text-blue-700">var(--color-slate-500);</span>
          </p>
          <p className="font-mono text-xs text-slate-600 pl-4">
            <span className="text-slate-400">--color-primary: </span>
            <span className="text-blue-700">#053AE7;</span>
          </p>
          <p className="font-mono text-xs text-slate-600">
            <span className="text-slate-900">{"}"}</span>
          </p>
        </div>
      </DSSection>

      {/* Live preview */}
      <DSSection
        title="Component preview — pure Tailwind"
        eyebrow="06 · In the wild"
        note="실제 컴포넌트에 v2 Tailwind 스펙이 적용되면."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {/* White card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <span
              className="inline-flex h-7 items-center px-3 rounded-full text-xs font-semibold tracking-[0.08em] uppercase"
              style={{ background: "#D6DFFF", color: "#0430C0" }}
            >
              AI-Tech
            </span>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              KidsDa · 키즈다
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-6">
              아이가 매일 뉴스를 읽고 루틴을 만드는 AI 에듀테크 플랫폼.
            </p>
            <ul className="mt-4 space-y-2">
              {["SKT ZEM 기본 탑재", "AI 감정 리포트", "Privacy First"].map(
                (t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check
                      size={14}
                      className="mt-[3px] shrink-0"
                      style={{ color: "#053AE7" }}
                      strokeWidth={2.5}
                    />
                    <span>{t}</span>
                  </li>
                )
              )}
            </ul>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm text-slate-900">View Case Study</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
                <ArrowRight size={14} className="text-slate-900" />
              </span>
            </div>
          </div>

          {/* Dark card */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-6">
            <div
              aria-hidden
              className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full pointer-events-none"
              style={{
                background: "#053AE7",
                opacity: 0.3,
                filter: "blur(40px)",
                mixBlendMode: "screen",
              }}
            />
            <p
              className="font-mono font-bold absolute right-5 top-3 text-white/5"
              style={{
                fontSize: 56,
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              01
            </p>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/5">
              <Check size={22} strokeWidth={1.5} />
            </div>
            <h3 className="relative mt-6 text-xl font-bold tracking-tight">
              On-Device AI
            </h3>
            <div
              className="mt-3 h-[2px] w-10"
              style={{ background: "#4D70FF" }}
            />
            <p className="relative mt-4 text-sm text-white/60 leading-6">
              클라우드 없이 기기에서 직접 작동하는 AI. Privacy First.
            </p>
          </div>

          {/* Light panel */}
          <div className="rounded-2xl bg-slate-100 p-6">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#0430C0" }}
            >
              <span
                className="inline-block h-px w-8 align-middle mr-2"
                style={{ background: "#0430C0" }}
              />
              Performance
            </p>
            <p className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900">
              Key Metrics
            </p>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {[
                { n: "200+", l: "Patents" },
                { n: "99.9%", l: "Security" },
                { n: "2W", l: "Onboarding" },
                { n: "2018", l: "Since" },
              ].map((m) => (
                <div key={m.l}>
                  <p
                    className="font-display font-bold text-4xl leading-none tracking-tighter"
                    style={{ color: "#053AE7" }}
                  >
                    {m.n}
                  </p>
                  <div
                    className="mt-3 h-1 w-10"
                    style={{ background: "#053AE7" }}
                  />
                  <p className="mt-3 text-base font-bold text-slate-900">
                    {m.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 flex flex-wrap gap-3">
          <button
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-xs font-semibold tracking-[0.12em] text-white"
            style={{ background: "#053AE7" }}
          >
            Primary <ArrowRight size={14} />
          </button>
          <button
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-xs font-semibold tracking-[0.12em]"
            style={{ background: "#D6DFFF", color: "#0430C0" }}
          >
            Primary · Soft
          </button>
          <button className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-xs font-semibold tracking-[0.12em] border border-slate-300 text-slate-900">
            Secondary
          </button>
          <button className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-[0.12em]">
            Dark
          </button>
        </div>
      </DSSection>

      {/* Tailwind-only summary */}
      <DSSection
        title="v1 → v2 Tailwind 이행 요지"
        eyebrow="07 · Migration"
        note="무엇이 바뀌고 무엇이 유지되는가."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "GrayScale → slate-*",
              body:
                "기존 --muted, --border-soft 등 커스텀 이름 대신 Tailwind 공식 text-slate-500, bg-slate-50 사용. 11단 전부 사용 가능.",
            },
            {
              title: "Typography → text-xs~text-9xl",
              body:
                "커스텀 clamp 대신 Tailwind 13단 + md:/lg: 반응형. text-4xl md:text-5xl 조합으로 H2 표현.",
            },
            {
              title: "Brand 11단 유지",
              body:
                "#053AE7는 Tailwind 대응색 없어 custom. 단 11단 구조는 Tailwind와 동일 (50~950).",
            },
          ].map((d) => (
            <div
              key={d.title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <p className="text-base font-bold text-slate-900">{d.title}</p>
              <p className="mt-2 text-sm text-slate-500 leading-6">{d.body}</p>
            </div>
          ))}
        </div>
      </DSSection>

      <div className="h-20" />
    </div>
  );
}

function DSSection({
  title,
  eyebrow,
  note,
  children,
}: {
  title: string;
  eyebrow: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14 md:py-20 border-t border-slate-200">
      <div className="container-base">
        <p className="flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
          <span className="h-px w-8 bg-blue-700" />
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight text-slate-900">
          {title}
        </h2>
        {note && (
          <p className="mt-3 max-w-3xl text-slate-500 text-base leading-relaxed">
            {note}
          </p>
        )}
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}

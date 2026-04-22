"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Lock, LogIn, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIRAuthStore } from "@/lib/stores/irAuth";
import { useContactStore } from "@/lib/stores/contact";

const IR_TEST_ID = "wego2026";
const IR_TEST_PW = "ir1234!";

export function IRLoginModal() {
  const router = useRouter();
  const { open, setOpen } = useIRAuthStore();
  const openContact = useContactStore((s) => s.setOpen);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setId("");
        setPw("");
        setError(null);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !pw) {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    setLoading(true);
    setError(null);
    await new Promise((r) => setTimeout(r, 500));

    if (id === IR_TEST_ID && pw === IR_TEST_PW) {
      setLoading(false);
      setOpen(false);
      router.push("/ir");
      return;
    }

    setLoading(false);
    setError("아이디 또는 비밀번호가 올바르지 않습니다.");
  };

  const goContact = () => {
    setOpen(false);
    setTimeout(() => openContact(true), 240);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="relative w-full max-w-[460px] max-h-[94vh] md:max-h-[92vh] overflow-hidden bg-white rounded-[20px] md:rounded-[24px] shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              aria-label="close"
            >
              <X size={18} />
            </button>

            <div
              data-lenis-prevent
              className="slim-scrollbar overflow-y-auto overscroll-contain"
            >
              <div className="relative bg-[#053ae7] text-white px-7 md:px-8 pt-7 pb-10 md:pt-8 md:pb-12 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-16 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl pointer-events-none"
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-white/15 backdrop-blur-sm">
                    <Lock size={20} />
                  </div>
                  <h2 className="mt-5 text-[22px] md:text-[24px] font-bold tracking-[-0.02em] leading-[1.25]">
                    IR Center 주주 전용
                  </h2>
                  <p className="mt-2 text-[13px] md:text-[14px] leading-[1.65] text-white/70">
                    위고컴퍼니 IR Center는 주주 전용 페이지입니다.
                    <br />
                    등록된 계정으로 로그인해 주세요.
                  </p>
                </div>
              </div>

              <form
                onSubmit={onSubmit}
                className="px-7 md:px-8 pt-7 pb-7 md:pb-8 space-y-4"
              >
                <div>
                  <label
                    htmlFor="ir-id"
                    className="block text-[13px] font-semibold tracking-[-0.01em] text-foreground mb-1.5"
                  >
                    아이디 (ID)
                  </label>
                  <input
                    id="ir-id"
                    autoComplete="username"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="주주 아이디를 입력하세요"
                    className="w-full h-11 md:h-12 rounded-[10px] border border-border bg-white px-3.5 md:px-4 text-[14px] placeholder:text-muted focus:border-brand focus:outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ir-pw"
                    className="block text-[13px] font-semibold tracking-[-0.01em] text-foreground mb-1.5"
                  >
                    비밀번호 (PASSWORD)
                  </label>
                  <input
                    id="ir-pw"
                    type="password"
                    autoComplete="current-password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    className="w-full h-11 md:h-12 rounded-[10px] border border-border bg-white px-3.5 md:px-4 text-[14px] placeholder:text-muted focus:border-brand focus:outline-none transition"
                  />
                </div>

                {error && (
                  <p className="text-[13px] text-red-600 -mt-1">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    "w-full h-12 md:h-12 mt-1 rounded-[12px] text-[15px] font-bold tracking-[-0.01em] inline-flex items-center justify-center gap-2 transition-colors",
                    loading
                      ? "bg-[#e2e8f0] text-muted cursor-not-allowed"
                      : "bg-brand text-white hover:bg-brand-hover"
                  )}
                >
                  {loading ? (
                    "확인 중..."
                  ) : (
                    <>
                      <LogIn size={16} />
                      로그인
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 pt-2 pb-1">
                  <span className="h-px flex-1 bg-border-soft" />
                  <span className="text-[12px] text-muted">주주가 아니신가요?</span>
                  <span className="h-px flex-1 bg-border-soft" />
                </div>

                <button
                  type="button"
                  onClick={goContact}
                  className="w-full text-left rounded-[14px] bg-surface hover:bg-[#eef2f7] transition-colors p-5 md:p-6 flex items-start gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white border border-border-soft text-[18px] leading-none">
                    📩
                  </span>
                  <span className="flex-1">
                    <span className="block text-[14px] font-semibold tracking-[-0.01em] text-foreground">
                      주주 등록 문의
                    </span>
                    <span className="mt-1 block text-[13px] leading-[1.6] text-muted">
                      위고컴퍼니의 주주가 되고 싶으시거나 IR 자료 열람을
                      원하시면 문의해 주세요.
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
                      투자 문의하기
                      <ArrowRight size={12} />
                    </span>
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

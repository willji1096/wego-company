"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X, ChevronDown } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  CONTACT_TYPES,
  type ContactFormData,
} from "@/lib/validations/contact";
import { useContactStore } from "@/lib/stores/contact";
import { cn } from "@/lib/utils";

export function ContactModal() {
  const { open, setOpen } = useContactStore();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: "제휴 문의",
      agreed: undefined as unknown as true,
    },
  });

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
      const t = setTimeout(() => reset(), 400);
      return () => clearTimeout(t);
    }
  }, [open, reset]);

  const agreed = useWatch({ control, name: "agreed" });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: wire to backend (e.g., POST /api/contact or email provider)
    await new Promise((r) => setTimeout(r, 800));
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("[contact]", data);
    }
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
            className="relative w-full max-w-[680px] max-h-[94vh] md:max-h-[92vh] overflow-hidden bg-white rounded-[18px] md:rounded-[28px] shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3.5 right-3.5 md:top-5 md:right-5 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-surface transition-colors"
              aria-label="close"
            >
              <X size={18} />
            </button>

            <div
              data-lenis-prevent
              className="slim-scrollbar overflow-y-auto overscroll-contain p-5 md:p-12"
            >
            <div className="mb-5 md:mb-10 pr-10 md:pr-0">
              <h2 className="text-[22px] md:text-[32px] font-bold tracking-[-0.02em] leading-[1.2]">
                문의
              </h2>
              <p className="mt-2 md:mt-3 text-[13px] md:text-[14px] text-muted leading-[1.6]">
                위고컴퍼니와 함께 혁신적인 미래를 만들어갈 파트너를 기다립니다.
              </p>
            </div>

            {isSubmitSuccessful ? (
              <div className="py-14 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white text-2xl mb-5">
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-2">문의가 접수되었습니다</h3>
                <p className="text-[14px] text-muted">
                  영업일 기준 2~3일 내 회신드리겠습니다.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-8 h-11 px-6 rounded-full bg-foreground text-white text-[14px] font-semibold tracking-[-0.01em]"
                >
                  닫기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                  <Field label="성함 / 담당자명" error={errors.name?.message}>
                    <Input
                      {...register("name")}
                      placeholder="이름을 입력해주세요"
                    />
                  </Field>
                  <Field label="회사명 / 소속" error={errors.company?.message}>
                    <Input
                      {...register("company")}
                      placeholder="회사명을 입력해주세요"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                  <Field label="연락처" error={errors.phone?.message}>
                    <Input {...register("phone")} placeholder="010-0000-0000" />
                  </Field>
                  <Field label="이메일" error={errors.email?.message}>
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="example@email.com"
                    />
                  </Field>
                </div>

                <Field label="문의 유형" error={errors.type?.message}>
                  <div className="relative">
                    <select
                      {...register("type")}
                      className="appearance-none w-full h-11 md:h-12 rounded-[10px] border border-border bg-white px-3.5 md:px-4 pr-10 text-[14px] focus:border-brand focus:outline-none transition"
                    >
                      {CONTACT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                    />
                  </div>
                </Field>

                <Field label="문의 제목" error={errors.title?.message}>
                  <Input {...register("title")} placeholder="제목을 입력해주세요" />
                </Field>

                <Field label="문의 내용" error={errors.content?.message}>
                  <textarea
                    {...register("content")}
                    rows={4}
                    placeholder="상세한 문의 내용을 입력해주세요. 확인 후 담당자가 연락드리겠습니다."
                    className="w-full rounded-[10px] border border-border bg-white px-3.5 md:px-4 py-3 text-[14px] leading-[1.6] focus:border-brand focus:outline-none transition resize-none"
                  />
                </Field>

                <label className="flex items-start gap-3 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    {...register("agreed")}
                    className="mt-[3px] h-4 w-4 accent-brand"
                  />
                  <span className="text-[14px] leading-[1.6] text-muted">
                    개인정보 수집 및 이용에 동의합니다.{" "}
                    <a
                      href="/privacy"
                      className="underline decoration-muted/50 underline-offset-2 hover:text-foreground"
                    >
                      내용보기
                    </a>
                  </span>
                </label>
                {errors.agreed && (
                  <p className="text-[12px] text-red-600 -mt-2">
                    {errors.agreed.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !agreed}
                  className={cn(
                    "w-full h-12 md:h-14 mt-3 md:mt-4 rounded-full text-[15px] md:text-[16px] font-bold tracking-[-0.01em] inline-flex items-center justify-center gap-2 transition-all",
                    isSubmitting || !agreed
                      ? "bg-[#e2e8f0] text-muted cursor-not-allowed"
                      : "bg-brand text-white hover:bg-brand-hover"
                  )}
                >
                  {isSubmitting ? "전송 중..." : "문의 신청하기"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </form>
            )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] md:text-[14px] font-semibold tracking-[-0.01em] text-foreground mb-1.5 md:mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[12px] text-red-600">{error}</p>}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full h-11 md:h-12 rounded-[10px] border border-border bg-white px-3.5 md:px-4 text-[14px] placeholder:text-muted focus:border-brand focus:outline-none transition",
        props.className
      )}
    />
  );
}

import { z } from "zod";

export const CONTACT_TYPES = [
  "제휴 문의",
  "투자 문의",
  "제품 문의",
  "광고 문의",
  "기타",
] as const;

export const contactSchema = z.object({
  name: z.string().min(1, "성함을 입력해주세요.").max(30),
  company: z.string().min(1, "회사명/소속을 입력해주세요.").max(60),
  phone: z
    .string()
    .min(9, "연락처를 확인해주세요.")
    .regex(/^[0-9+\-()\s]+$/, "숫자와 - 만 입력 가능합니다."),
  email: z.string().email("올바른 이메일을 입력해주세요."),
  type: z.enum(CONTACT_TYPES, { message: "문의 유형을 선택해주세요." }),
  title: z.string().min(2, "제목은 2자 이상 입력해주세요.").max(80),
  content: z
    .string()
    .min(10, "문의 내용은 10자 이상 입력해주세요.")
    .max(2000),
  agreed: z.literal(true, { message: "개인정보 수집 동의가 필요합니다." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

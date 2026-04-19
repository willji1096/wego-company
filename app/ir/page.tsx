import { IRPageClient } from "./IRPageClient";

export const metadata = {
  title: "IR",
  description: "위고컴퍼니 IR Center — 투자자 공시·재무·IR 자료",
};

export default function IRPage() {
  return <IRPageClient />;
}

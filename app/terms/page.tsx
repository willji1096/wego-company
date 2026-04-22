import {
  LegalArticle,
  LegalList,
  LegalPage,
} from "@/components/legal/LegalPage";

export const metadata = {
  title: "이용약관",
  description: "위고컴퍼니 웹사이트 이용에 관한 약관입니다.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="이용약관"
      eyebrow="Terms of Service"
      meta="위고컴퍼니 웹사이트 이용에 관한 약관입니다."
    >
      <dl className="grid gap-2 sm:grid-cols-3 rounded-[12px] bg-slate-50 p-4 md:p-5 text-[13px] md:text-[14px]">
        <div className="flex flex-col">
          <dt className="text-slate-500">시행일</dt>
          <dd className="mt-0.5 font-medium text-slate-900">2026년 1월 1일</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-slate-500">버전</dt>
          <dd className="mt-0.5 font-medium text-slate-900">v1.0</dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-slate-500">적용 대상</dt>
          <dd className="mt-0.5 font-medium text-slate-900">
            wegocompany.net 및 관련 서비스
          </dd>
        </div>
      </dl>

      <LegalArticle title="제1조 (목적)">
        <p>
          이 약관은 주식회사 위고컴퍼니(이하 &ldquo;회사&rdquo;)가 운영하는
          웹사이트(wegocompany.net, 이하 &ldquo;사이트&rdquo;)의 이용과 관련하여
          회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로
          합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제2조 (용어의 정의)">
        <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
        <LegalList
          items={[
            <>
              &ldquo;사이트&rdquo;란 회사가 운영하는 wegocompany.net 및 관련
              하위 페이지를 말합니다.
            </>,
            <>
              &ldquo;이용자&rdquo;란 사이트에 접속하여 회사가 제공하는 정보 및
              서비스를 이용하는 모든 자를 말합니다.
            </>,
            <>
              &ldquo;콘텐츠&rdquo;란 사이트에 게재된 텍스트, 이미지, 영상, 파일
              등 모든 정보를 말합니다.
            </>,
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제3조 (약관의 효력 및 변경)">
        <LegalList
          items={[
            "이 약관은 사이트 내에 게시함으로써 효력이 발생합니다.",
            "회사는 관련 법령을 위반하지 않는 범위 내에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전에 사이트 내 공지합니다.",
            "이용자가 변경된 약관에 동의하지 않을 경우 사이트 이용을 중단할 수 있습니다. 변경 후에도 계속 이용하는 경우 변경된 약관에 동의한 것으로 봅니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제4조 (서비스의 제공)">
        <LegalList
          items={[
            "회사는 사이트를 통해 회사 소개, 제품 및 서비스 안내, IR 정보 등을 제공합니다.",
            "회사는 운영상·기술상 필요에 따라 서비스의 내용을 변경하거나 일시 중단할 수 있습니다.",
            "사이트의 일부 기능은 사전 고지 없이 변경될 수 있습니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제5조 (지식재산권)">
        <LegalList
          items={[
            "사이트 내 모든 콘텐츠(텍스트, 이미지, 로고, 디자인, 소프트웨어 등)의 지식재산권은 회사 또는 정당한 권리자에게 귀속됩니다.",
            "이용자는 회사의 사전 서면 동의 없이 사이트의 콘텐츠를 복제, 배포, 수정, 전시하거나 상업적으로 이용할 수 없습니다.",
            "회사의 상표, 로고, 서비스명은 회사의 재산이며 무단 사용을 금합니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제6조 (이용자의 의무)">
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <LegalList
          items={[
            "허위 정보 입력, 타인의 정보 도용",
            "회사 또는 제3자의 지식재산권 침해",
            "사이트의 운영을 방해하는 행위 (해킹, 크롤링, 자동화 수집 등)",
            "관련 법령 또는 공서양속에 위반하는 행위",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제7조 (면책)">
        <LegalList
          items={[
            "사이트에 게재된 정보는 일반적인 참고 목적으로 제공되며, 투자 권유나 법적 조언을 목적으로 하지 않습니다.",
            "회사는 천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.",
            "이용자가 사이트를 통해 얻은 정보를 이용하여 발생한 손해에 대해 회사는 책임을 지지 않습니다.",
            "사이트에 링크된 외부 사이트의 내용에 대해 회사는 책임을 지지 않습니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제8조 (개인정보 보호)">
        <p>
          회사는 이용자의 개인정보를 관련 법령 및 개인정보처리방침에 따라
          보호합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제9조 (준거법 및 관할)">
        <LegalList
          items={[
            "이 약관은 대한민국 법령에 따라 해석되고 적용됩니다.",
            "회사와 이용자 간 분쟁이 발생한 경우, 회사의 본점 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제10조 (문의)">
        <p>이용약관에 대한 문의사항은 아래로 연락해 주세요.</p>
        <LegalList
          items={[
            <>
              이메일:{" "}
              <a
                href="mailto:wego@wegocompany.net"
                className="underline underline-offset-2 hover:text-slate-900"
              >
                wego@wegocompany.net
              </a>
            </>,
            "전화: 02-3288-3455",
          ]}
        />
      </LegalArticle>

      <p className="text-[13px] md:text-[14px] text-slate-500 pt-2 border-t border-slate-100">
        부칙: 이 약관은 2026년 1월 1일부터 시행합니다.
      </p>
    </LegalPage>
  );
}

import {
  LegalArticle,
  LegalList,
  LegalPage,
} from "@/components/legal/LegalPage";

export const metadata = {
  title: "이용약관",
  description: "위고컴퍼니 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="이용약관"
      eyebrow="Terms of Service"
      meta="위고컴퍼니 서비스 이용에 관한 약관입니다."
    >
      <p className="text-[13px] md:text-[14px] text-slate-500">
        시행일: 2025년 11월 1일
      </p>

      <LegalArticle title="제1조 (목적)">
        <p>
          이 약관은 위고컴퍼니(이하 &ldquo;회사&rdquo;)가 제공하는 KidsDa,
          Qentix, Toky 등 관련 서비스(이하 &ldquo;서비스&rdquo;)의 이용 조건 및
          절차, 회사와 이용자의 권리·의무 및 책임사항, 기타 필요한 사항을
          규정함을 목적으로 합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제2조 (정의)">
        <LegalList
          items={[
            <>
              &ldquo;서비스&rdquo;란 회사가 제공하는 KidsDa 교육 플랫폼, Qentix
              보안 솔루션, Toky AI 어시스턴트 및 관련 웹사이트, 모바일
              애플리케이션을 의미합니다.
            </>,
            <>
              &ldquo;이용자&rdquo;란 이 약관에 동의하고 서비스를 이용하는 회원
              및 비회원을 말합니다.
            </>,
            <>
              &ldquo;회원&rdquo;이란 회사에 개인정보를 제공하고 회원 등록을 한
              자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로
              이용할 수 있는 자를 말합니다.
            </>,
            <>
              &ldquo;아동 회원&rdquo;이란 만 14세 미만으로 법정대리인의 동의를
              얻어 회원 등록을 한 자를 말합니다.
            </>,
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제3조 (약관의 효력 및 변경)">
        <p>
          이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게
          공지함으로써 효력이 발생합니다. 회사는 합리적인 사유가 발생할 경우
          관련 법령에 위배되지 않는 범위 내에서 본 약관을 변경할 수 있으며, 변경
          시 최소 7일 전(중요한 변경사항은 30일 전)에 공지합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제4조 (회원 가입 및 자격)">
        <p>
          서비스 이용을 원하는 자는 회사가 정한 양식에 따라 회원 정보를 입력한
          후 본 약관에 동의함으로써 회원 가입을 신청합니다.
        </p>
        <p>
          만 14세 미만 아동의 경우, 반드시 법정대리인(보호자)의 동의를 받아야
          하며, 회사는 이를 확인하는 절차를 운영합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제5조 (서비스의 제공 및 변경)">
        <p>회사는 다음과 같은 서비스를 제공합니다:</p>
        <LegalList
          items={[
            <>KidsDa: 아동 대상 AI 기반 뉴스 학습 및 교육 콘텐츠 서비스</>,
            <>Qentix: 기업 대상 AI·블록체인 기반 보안 솔루션 서비스</>,
            <>Toky: 개인 대상 On-Device AI 라이프 어시스턴트 서비스</>,
            <>
              기타 회사가 추가 개발하거나 타 회사와의 제휴를 통해 이용자에게
              제공하는 서비스
            </>,
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제6조 (이용자의 의무)">
        <p>이용자는 다음 행위를 해서는 안 됩니다:</p>
        <LegalList
          items={[
            "회원 가입 신청 또는 변경 시 허위 내용 등록",
            "타인의 정보 도용",
            "회사가 게시한 정보의 무단 변경",
            "회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 전송 또는 게시",
            "회사 또는 제3자의 저작권 등 지적재산권 침해",
            "회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위",
            "아동에게 유해한 콘텐츠를 생성, 전파하는 행위",
            "서비스를 통해 불법적인 정보를 취득하거나 배포하는 행위",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제7조 (지적재산권)">
        <p>
          회사가 제공하는 서비스 및 서비스에 포함된 콘텐츠(텍스트, 이미지, 영상,
          AI 알고리즘, 소프트웨어 등)에 대한 지적재산권은 회사에 귀속됩니다.
          이용자는 회사의 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙
          없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로
          이용하거나 제3자에게 이용하게 할 수 없습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제8조 (면책조항)">
        <p>
          회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할
          수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 회사는 이용자의
          귀책 사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다. 단,
          회사의 고의 또는 중과실이 있는 경우는 제외됩니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제9조 (분쟁 해결)">
        <p>
          서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 회사의 본사
          소재지를 관할하는 법원을 전속 관할 법원으로 합니다. 본 약관은
          대한민국 법률에 따라 해석되고 적용됩니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제10조 (문의처)">
        <p>본 약관에 관한 문의사항은 아래로 연락해 주시기 바랍니다:</p>
        <LegalList
          items={[
            "이메일: wego@wegocompany.net",
            "전화: 02-3288-3455",
            "주소: 서울시 서초구 바우뫼로27길 7-31, 예원빌딩 3F",
          ]}
        />
      </LegalArticle>
    </LegalPage>
  );
}

import {
  LegalArticle,
  LegalList,
  LegalPage,
  LegalTable,
} from "@/components/legal/LegalPage";

export const metadata = {
  title: "개인정보처리방침",
  description: "위고컴퍼니 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="개인정보처리방침"
      eyebrow="Privacy Policy"
      meta="위고컴퍼니는 이용자의 개인정보를 소중히 여깁니다."
    >
      <p className="text-[13px] md:text-[14px] text-slate-500">
        시행일: 2025년 11월 1일 · 이전 버전: 2024년 3월 1일
      </p>

      <LegalArticle title="제1조 (개인정보처리방침의 목적)">
        <p>
          위고컴퍼니(이하 &ldquo;회사&rdquo;)는 「개인정보 보호법」, 「정보통신망
          이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령에 따라 이용자의
          개인정보를 보호하고 이와 관련된 권익을 보장하기 위해 본
          개인정보처리방침을 수립·공개합니다. 이 방침은 회사가 제공하는 KidsDa,
          Qentix, Toky 및 회사 웹사이트(이하 &ldquo;서비스&rdquo;)에 적용됩니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제2조 (수집하는 개인정보의 항목)">
        <LegalTable
          headers={["서비스", "수집 항목", "수집 방법"]}
          rows={[
            [
              "KidsDa",
              "성명, 생년월일, 보호자 연락처, 보호자 이메일, 학습 이력, 단말기 ID",
              "회원가입, 서비스 이용 중 자동 수집",
            ],
            [
              "Qentix",
              "회사명, 담당자명, 업무용 이메일, 연락처, 영상정보(관제 시스템 운영 시)",
              "계약 체결, 시스템 운영",
            ],
            [
              "Toky",
              "단말기 ID, 사용 패턴 (온디바이스 처리, 서버 미전송)",
              "앱 설치 및 사용 중 자동 수집",
            ],
            [
              "홈페이지 문의",
              "성명, 회사명, 이메일, 연락처, 문의 내용",
              "Contact Us 폼 입력",
            ],
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제3조 (개인정보의 처리 목적)">
        <p>회사는 수집한 개인정보를 다음 목적으로만 사용합니다:</p>
        <LegalList
          items={[
            "서비스 제공 및 이용자 본인 확인",
            "KidsDa 아동 맞춤형 학습 콘텐츠 추천 및 제공",
            "고객 문의 처리 및 불만 응대",
            "서비스 개선을 위한 통계·분석 (비식별화 처리 후)",
            "법률상 의무 이행",
            "마케팅 및 광고 (별도 동의 취득 시)",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제4조 (개인정보의 처리 및 보유 기간)">
        <LegalTable
          headers={["보유 항목", "보유 기간", "근거"]}
          rows={[
            ["회원 정보", "회원 탈퇴 시까지", "계약 이행"],
            ["문의 이력", "처리 완료 후 3년", "분쟁 해결"],
            ["결제 기록", "5년", "전자상거래법"],
            ["접속 로그", "3개월", "통신비밀보호법"],
            ["마케팅 동의 내역", "동의 철회 시까지", "정보통신망법"],
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제5조 (개인정보의 제3자 제공)">
        <p>
          회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만,
          아래의 경우에는 예외로 합니다:
        </p>
        <LegalList
          items={[
            "이용자가 사전에 동의한 경우",
            "법령에 의거하거나, 수사·조사 목적으로 법령에 정해진 절차와 방법에 따른 기관의 요청이 있는 경우",
            "SKT 파트너십 관련: ZEM폰 탑재 서비스 제공을 위한 최소한의 정보 제공 (서비스 이용 통계 등 비식별화 데이터)",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제6조 (개인정보 처리 위탁)">
        <LegalTable
          headers={["수탁업체", "위탁 업무", "보유 기간"]}
          rows={[
            [
              "Amazon Web Services (AWS)",
              "서버 호스팅 및 데이터 저장",
              "위탁 계약 종료 시까지",
            ],
            ["채널코퍼레이션", "고객 문의 채팅 시스템", "위탁 계약 종료 시까지"],
            ["나이스평가정보", "본인 인증", "인증 완료 즉시 파기"],
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제7조 (아동의 개인정보 보호)">
        <p>
          회사는 만 14세 미만 아동(KidsDa 이용 아동 포함)의 개인정보 보호를 위해
          다음과 같이 특별히 관리합니다:
        </p>
        <LegalList
          items={[
            "만 14세 미만 아동의 회원가입 시 반드시 법정대리인(보호자)의 동의를 얻습니다.",
            "아동의 개인정보는 서비스 제공에 필요한 최소한의 항목만 수집합니다.",
            "아동의 개인정보는 보호자의 요청에 따라 열람, 정정, 삭제가 가능합니다.",
            "KidsDa의 On-Device AI 기능은 아동의 학습 데이터를 기기 내에서만 처리하며 외부 서버로 전송하지 않습니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제8조 (이용자의 권리와 행사 방법)">
        <p>이용자는 언제든지 아래 권리를 행사할 수 있습니다:</p>
        <LegalList
          items={[
            "개인정보 열람 요청",
            "오류 정정 요청",
            "삭제 요청 (단, 법령에 의한 보유가 필요한 경우 제외)",
            "처리 정지 요청",
            "개인정보 이동 요청",
          ]}
        />
        <p>
          권리 행사는 이메일(privacy@wegocompany.net) 또는 서면으로 요청하시면
          10일 이내에 처리합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제9조 (개인정보의 파기)">
        <p>
          회사는 개인정보 보유 기간이 경과하거나 처리 목적이 달성된 경우, 지체
          없이 해당 정보를 파기합니다. 전자적 파일 형태는 복원 불가능한 방법으로
          영구 삭제하며, 종이 문서는 분쇄 또는 소각합니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제10조 (개인정보 보호책임자)">
        <LegalTable
          headers={["구분", "정보"]}
          rows={[
            ["보호책임자", "위고컴퍼니 개인정보 보호팀장"],
            ["이메일", "wego@wegocompany.net"],
            ["전화", "02-3288-3455 (내선 3번)"],
            ["주소", "서울시 서초구 바우뫼로27길 7-31, 예원빌딩 3F"],
          ]}
        />
        <p className="pt-2">
          개인정보 침해 관련 신고는 개인정보보호위원회(privacy.go.kr),
          한국인터넷진흥원 개인정보침해신고센터(privacy.kisa.or.kr)에도 접수하실
          수 있습니다.
        </p>
      </LegalArticle>
    </LegalPage>
  );
}

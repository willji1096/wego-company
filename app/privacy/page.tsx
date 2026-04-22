import {
  LegalArticle,
  LegalList,
  LegalPage,
  LegalTable,
} from "@/components/legal/LegalPage";

export const metadata = {
  title: "개인정보처리방침",
  description:
    "위고컴퍼니는 이용자의 개인정보를 소중히 여기며 개인정보 보호법을 준수합니다.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="개인정보처리방침"
      eyebrow="Privacy Policy"
      meta="위고컴퍼니는 이용자의 개인정보를 소중히 여기며 개인정보 보호법을 준수합니다."
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
          <dt className="text-slate-500">적용 법령</dt>
          <dd className="mt-0.5 font-medium text-slate-900">
            개인정보 보호법
          </dd>
        </div>
      </dl>

      <LegalArticle title="제1조 (개인정보의 처리 목적)">
        <p>
          주식회사 위고컴퍼니(이하 &ldquo;회사&rdquo;)는 다음의 목적을 위하여
          개인정보를 처리합니다. 처리된 개인정보는 다음 목적 이외의 용도로는
          이용되지 않으며, 목적이 변경될 경우 별도 동의를 받겠습니다.
        </p>
        <LegalList
          items={[
            "웹사이트 문의 및 상담 응대",
            "제휴 및 파트너십 문의 처리",
            "IR 관련 자료 제공 및 투자자 문의 응대",
            "채용 문의 및 지원서 접수 처리",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제2조 (처리하는 개인정보 항목 및 보유 기간)">
        <p>회사는 다음의 개인정보 항목을 처리합니다.</p>
        <LegalTable
          headers={["수집 경로", "수집 항목", "수집 목적", "보유 기간"]}
          rows={[
            [
              "웹사이트 문의",
              "이름, 이메일, 전화번호, 문의 내용",
              "문의 응대",
              "처리 완료 후 1년",
            ],
            [
              "IR 문의",
              "회사명, 이름, 이메일, 전화번호",
              "IR 자료 제공",
              "처리 완료 후 3년",
            ],
            [
              "제휴 문의",
              "회사명, 담당자명, 이메일, 전화번호",
              "제휴 검토 및 응대",
              "처리 완료 후 2년",
            ],
          ]}
        />
        <p className="text-slate-500">
          ※ 회사는 이용자의 별도 동의 없이 민감정보를 수집하지 않습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제3조 (개인정보의 파기 절차 및 방법)">
        <p>
          회사는 개인정보 보유 기간이 경과하거나 처리 목적이 달성된 경우 지체
          없이 해당 개인정보를 파기합니다.
        </p>
        <LegalList
          items={[
            <>
              <strong className="font-semibold text-slate-900">
                파기 절차:
              </strong>{" "}
              보유 기간 만료 또는 목적 달성 후 내부 방침에 따라 파기 사유를
              확인하고, 개인정보 보호책임자의 승인을 받아 파기합니다.
            </>,
            <>
              <strong className="font-semibold text-slate-900">
                파기 방법
              </strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 marker:text-slate-400">
                <li>전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제</li>
                <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
              </ul>
            </>,
            <>
              <strong className="font-semibold text-slate-900">예외:</strong>{" "}
              관련 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안
              별도 보관 후 파기합니다.
            </>,
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제4조 (만 14세 미만 아동의 개인정보 보호)">
        <p>
          회사가 운영하는 KidsDa 및 KUKI 서비스는 아동을 주요 이용 대상으로
          하며, 아동 개인정보 보호를 위해 다음 사항을 준수합니다.
        </p>
        <LegalList
          items={[
            "만 14세 미만 아동의 개인정보 수집 시 법정대리인(보호자)의 동의를 받습니다.",
            "법정대리인은 아동의 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다.",
            "아동의 개인정보는 법정대리인의 동의 없이 제3자에게 제공하지 않습니다.",
            "KidsDa 및 KUKI 서비스의 아동 개인정보 처리에 관한 세부 사항은 각 서비스의 개별 이용약관 및 개인정보처리방침에 따릅니다.",
            "법정대리인은 아동의 개인정보 관련 문의를 아래 개인정보 보호책임자에게 요청할 수 있습니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제5조 (개인정보의 제3자 제공)">
        <p>
          회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.
          다만, 다음의 경우에는 예외로 합니다.
        </p>
        <LegalList
          items={[
            "이용자(또는 법정대리인)가 사전에 명시적으로 동의한 경우",
            "법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제6조 (개인정보 처리 위탁)">
        <p>
          회사는 현재 개인정보 처리 업무를 외부에 위탁하고 있지 않습니다. 향후
          위탁이 발생하는 경우 위탁 대상자, 위탁 업무 내용을 본 방침을 통해 사전
          공지하겠습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제7조 (정보주체의 권리·의무 및 행사 방법)">
        <p>
          이용자(및 법정대리인)는 개인정보주체로서 다음과 같은 권리를 행사할 수
          있습니다.
        </p>
        <LegalList
          items={[
            "개인정보 처리 현황 열람 요청",
            "오류가 있을 경우 정정 요청",
            "삭제 요청",
            "처리 정지 요청",
          ]}
        />
        <p>
          위 권리 행사는 아래 개인정보 보호책임자에게 이메일 또는 서면으로
          요청하실 수 있으며, 회사는 10일 이내에 조치하겠습니다.
        </p>
      </LegalArticle>

      <LegalArticle title="제8조 (개인정보의 안전성 확보 조치)">
        <p>
          회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
          있습니다.
        </p>
        <LegalList
          items={[
            "개인정보 취급 직원 최소화 및 정기 교육 실시",
            "개인정보에 대한 접근 권한 관리 및 비인가자 접근 제한",
            "개인정보 처리 시스템 보안 관리",
            "개인정보 처리 현황 정기 점검",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제9조 (쿠키(Cookie)의 운용)">
        <LegalList
          items={[
            "회사는 웹사이트 운영 개선을 위해 쿠키를 사용할 수 있습니다.",
            "이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.",
            "쿠키 저장을 거부할 경우 일부 서비스 이용이 제한될 수 있습니다.",
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제10조 (개인정보 보호책임자)">
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄하고, 개인정보 처리와 관련한
          이용자의 불만 처리 및 피해 구제를 위하여 개인정보 보호책임자를
          지정하고 있습니다.
        </p>

        <LegalTable
          headers={["구분", "정보"]}
          rows={[
            ["성명", "김준영"],
            ["이메일", "wego@wegocompany.net"],
            ["전화", "02-3288-3455"],
            ["팩스", "02-3288-3454"],
          ]}
        />

        <p className="pt-2">
          개인정보 처리에 관한 불만, 피해 구제 등의 문의는 위 개인정보
          보호책임자에게 연락하시거나, 아래 기관에 도움을 요청하실 수 있습니다.
        </p>

        <LegalTable
          headers={["기관", "홈페이지", "전화"]}
          rows={[
            ["개인정보분쟁조정위원회", "www.kopico.go.kr", "1833-6972"],
            ["개인정보침해신고센터", "privacy.kisa.or.kr", "118"],
            ["대검찰청 사이버수사과", "www.spo.go.kr", "1301"],
            ["경찰청 사이버안전국", "cyberbureau.police.go.kr", "182"],
          ]}
        />
      </LegalArticle>

      <LegalArticle title="제11조 (개인정보처리방침의 변경)">
        <LegalList
          items={[
            "이 개인정보처리방침은 시행일로부터 적용됩니다.",
            "내용 변경 시 시행 7일 전 웹사이트를 통해 공지합니다.",
            "이전 버전의 개인정보처리방침은 요청 시 제공받을 수 있습니다.",
          ]}
        />
      </LegalArticle>

      <p className="text-[13px] md:text-[14px] text-slate-500 pt-2 border-t border-slate-100">
        공고일: 2025년 12월 25일 · 시행일: 2026년 1월 1일 · 버전: v1.0
      </p>
    </LegalPage>
  );
}

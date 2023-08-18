'use client';

import useSWR from 'swr';

import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function EarlyAdmission() {
  const { data } = useSWR({ url: '/admissions' }, getEarlyAdmissionMock);

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data?.description ?? ''} />
    </PageLayout>
  );
}

const getEarlyAdmissionMock = async () => {
  return {
    description: `
<span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >고교 졸업생 자격으로 수시 모집과 정시 모집에 지원할 수 있으며, 학사 학위 소지자는 학사 편입학에
  지원할 수 있습니다.<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
  "
  >모집 시기<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >12월경 지원서 접수가 시작됩니다. 자세한 일정한 해당 기간 </span
><span
  style="
    color: #3c7be4;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >서울대학교 입학관리본부</span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >에서 확인하실 수 있습니다.<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
  "
  >지원 자격<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
  "
  >일반 전형<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >고등학교 졸업(예정)자 또는 법령에 의하여 고등학교 졸업 이상의 학력이 있다고 인정된 자로서
  서울대학교 자연계열의 대학수학능력시험 응시 지정영역 및 영역별 응시기준을 충족한 자<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
  "
  >기회균형선발특별전형 - 특수교육대상자<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >서울대학교 특수교육대상자 지원자격심사위원회에서 특수교육 대상자로 선정된 자<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
  "
  >기회균형선발특별전형 - 새터민 (북한이탈주민)<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >최근 5년 이내 (인터넷 접수 마감일 기준)에 입국한 새터민 (북한이탈주민)으로서, 고등학교
  졸업(예정)자 또는 법령에 의하여 이와 동등 이상의 학력이 있다고 인정된 자로서, 서울대학교
  자연계열의 대학수학능력시험 응시 지정 영역 및 영역별 응시기준을 충족하는 자<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
  "
  >지원서 접수<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >지원서는 인터넷으로만 접수를 받고 있습니다. 지원 기간에 </span
><span
  style="
    color: #3c7be4;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >서울대학교 입학본부</span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >에서 안내에 따라 지원서를 제출합니다.<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
  "
  >선발 방식<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  ><br />단계별 전형을 실시하며, 서류평가, 논술고사 결과를 종합적으로 고려하여 선발합니다.<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
  "
  >합격자 발표<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  ><br />2월 </span
><span
  style="
    color: #3c7be4;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >서울대학교 입학본부</span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
>
  또는 ARS 전화 060-700-1930를 이용하여 합격 여부를 확인하실 수 있습니다.. 합격 여부를 확인할 책임은
  지원자 본인에게 있습니다.</span
>
    `,
  };
};

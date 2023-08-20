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
  >8~9월경 지원서 접수가 시작됩니다. 자세한 일정은 </span
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
  >고등학교 졸업(예정)자, 고등학교 졸업학력 검정고시 합격자, 또는 법령에 의하여 고등학교 졸업 이상의
  학력이 있다고 인정된 자 (외국 고등학교 졸업자 또는 졸업예정자 포함)로서 학업능력이 우수하고
  모집단위 관련 분야에 재능과 열정을 보인 자<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
  "
  >기회균형선발특별전형 - 기초생활수급권자 및 차상위계층 가구 학생<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >고등학교 졸업예정자 또는 고등학교 졸업학력 검정고시 합격자로서 정해진 자격을 유지하고 있는 자
  (단, 지원 기회는 1회로 제한함)<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
  "
  >기회균형선발특별전형 - 농어촌 학생<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >고등학교 졸업예정자로서 정해진 자격 기준을 만족하며 소속 고등학교장의 추천을 받은 자 (고등학교별
  추천 인원은 3명 이내)<br /><br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
  "
  >지역균형선발전형<br /></span
><span
  style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  "
  >국내 고등학교 졸업예정자 (조기졸업예정자 제외)로서 소속 고등학교장의 추천을 받은 자<br /><br /></span
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
  >지원서는 인터넷으로만 접수를 받습니다. 지원 기간에 </span
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
  ><br />단계별 전형을 실시하며 서류평가, 면접 및 구술고사 결과를 종합적으로 고려하여 선발합니다.<br /><br /></span
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
  ><br />12월 </span
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
  >에서 확인하거나 060-700-1930에 전화하여 ARS로 안내를 받으실 수 있습니다. 합격 여부를 확인할
  책임은 지원자 본인에게 있습니다.</span
>

    `,
  };
};

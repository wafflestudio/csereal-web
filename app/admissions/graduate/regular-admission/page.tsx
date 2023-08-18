'use client';

import useSWR from 'swr';

import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function EarlyAdmission() {
  const { data } = useSWR({ url: '/admissions' }, getEarlyAdmissionMock);

  return (
    <PageLayout titleType="big" marginBottom="mb-9">
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
>대학원생은 전기모집과 후기모집을 통해 1년에 2번 선발합니다.<br /></span
><span
style="
    color: #3c7be4;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>여기</span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>를 클릭하면 컴퓨터공학부 대학원 연구실 목록 및 소개 자료를 확인하실 수 있습니다.<br /></span
><span
style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
"
><br />모집 시기<br /><br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>10월 (전기), 4월 (후기) 경에 모집을 시작하며, 자세한 일정은 </span
><span
style="
    color: #3c7be4;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>공지사항 게시판</span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>에 공고됩니다.<br /><br /></span
><span
style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
"
>지원 자격<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
><br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
"
>석사<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>학사학위 취득(예정)자로서 영어지원자격을 취득한 자<br /><br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
"
>석사박사통합과정<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>학사학위 취득(예정)자로서 영어지원자격을 취득한 자<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
"
><br />박사과정<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>석사학위 취득(예정)자로서 영어지원자격을 취득한 자<br /><br />석사박사통합과정은 석사학위 및
박사학위의 과정이 통합된 과정을 이수하는 것으로서, 통합과정 이수중단 시 학칙 및 규정이 정하는
기준에 따라 석사학위 수여가 가능합니다.<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
><br /></span
><span
style="
    color: #404040;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
"
>지원서 교부 및 접수<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
><br /></span
><span
style="
    color: #3c7be4;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>서울대학교 입학본부 홈페이지</span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>에 접속하여 입학지원서, 자기소개 및 수학(연구)계획서를 제출합니다.<br />출신 학교의 성적증명서,
영어성적표, 구술고사과목신청서 (석사 및 석사박사통합과정), 지도교수신청서 (박사과정)를
컴퓨터공학부 행정실로 방문 혹은 등기우편으로 제출합니다.<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
><br /></span
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
><br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
"
>석사 및 석사박사통합과정<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>서류심사, 구술고사, 심층구술면접 3단계 전형을 통해 신입생을 선발합니다.<br />구술고사는 4과목
(OS, 컴퓨터구조, 자료구조, 전자회로) 중에서 지원자가 신청한 2과목에서 문제를 풉니다.<br />서류심사와
구술고사를 통해 정원의 120~150%를 심층구술면접 대상자로 선발합니다.<br />심층구술면접 대상자는
정해진 기간 동안 본인이 선택한 연구실에 대해 개별 교수면담과 연구실 탐방 등을 통해 해당
전공분야를 심층 탐색해야 합니다 (반드시 한 명 이상의 교수와 면담할 것).<br />심층구술면접은
연구실 탐색기간 종료 후 하루 동안 실시되며, 심층구술면접을 통해 연구실이 확정된 지원자가 최종
합격됩니다.<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
><br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
"
>박사과정<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>서류심사, 면접 및 구술고사를 통해 선발합니다.<br /></span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
><br /></span
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
><br />12월 (전기), 6월 (후기)에 </span
><span
style="
    color: #3c7be4;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>서울대학교 입학본부 홈페이지</span
><span
style="
    color: #404040;
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
"
>에서 입학정보 → 공지사항 → 합격자 발표란으로 들어가 주민등록번호로 검색하여 확인하실 수
있습니다.</span
>
    `,
  };
};

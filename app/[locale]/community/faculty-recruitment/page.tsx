import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { COLOR_THEME } from '@/constants/color';

import { GETFacultyRecruitmentResponse } from '@/types/post';

export default async function FacultyRecruitment() {
  //   const res = await fetch(BASE_URL) as GETFacultyRecruitmentResponse;
  const res = await mockNetwork();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <CornerFoldedRectangle
        radius={0.25} // 4px
        colorTheme={COLOR_THEME.darkGray}
        triangleLength={1.75} // 28px
        triangleDropShadow="drop-shadow(0px 4px 3px rgba(0,0,0,0.55))"
        margin="mb-8"
        animationType="unfolding"
      >
        <LatestRecruitmentBanner {...res} />
      </CornerFoldedRectangle>
      <HTMLViewer htmlContent={res.description} />
    </PageLayout>
  );
}

function LatestRecruitmentBanner({
  latestRecruitmentPostTitle,
  latestRecruitmentPostHref,
}: GETFacultyRecruitmentResponse) {
  return (
    <a className="block relative w-[25rem] h-[4.5rem] font-yoon" href={latestRecruitmentPostHref}>
      <p className="text-base font-bold tracking-[.025rem] absolute top-5 left-6">
        최근 채용 바로가기
      </p>
      <div className="flex items-center absolute right-5 bottom-[.87rem]">
        <p className="text-xs font-medium tracking-wide">{latestRecruitmentPostTitle}</p>
        <span className="material-symbols-outlined text-base">navigate_next</span>
      </div>
    </a>
  );
}

const mockNetwork = async () => mockResponse;

const mockResponse: GETFacultyRecruitmentResponse = {
  latestRecruitmentPostHref: '',
  latestRecruitmentPostTitle: '2023년 제1차 교수초빙',
  description: `
  <span style="color: #404040; font-size: 18px; font-family: Noto Sans KR; font-weight: 700; line-height: 36px; word-wrap: break-word">신임 교수를 초빙합니다!<br/></span><span style="color: #404040; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; line-height: 26px; word-wrap: break-word"><br/>서울대학교 컴퓨터공학부에서는 컴퓨터 공학 및 과학 전 분야에 걸쳐 유능한 신규 교수를 초빙합니다. 창의성과 잠재성을 소지한 연구자로 뛰어난 연구를 진행하고 교육에 대한 열정을 가진 분을 찾습니다. 또한 우수 여성 교수를 적극적으로 모시려고 노력하고 있습니다. 지원자는 지원 시점에 박사학위를 소지하고 있어야 합니다. 아래와 같이 연도별 채용 공고 예정 인원이 있습니다. 지원 문의는 </span><span style="color: #3C7BE4; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; text-decoration: underline; line-height: 26px; word-wrap: break-word">recruit@cse.snu.ac.kr</span><span style="color: #404040; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; line-height: 26px; word-wrap: break-word">로 보내 주시면 됩니다. <br/><br/>- 컴퓨터공학부는 연도별 채용 일정에 따라 공식 공고를 할 예정이며, 현재는 후보자들께서 미리 준비하실 수 있도록 안내해드리고 있습니다. <br/>- </span><span style="color: #3C7BE4; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; text-decoration: underline; line-height: 26px; word-wrap: break-word">최근 공과대학 신임교수 초빙 공고</span><span style="color: #404040; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; line-height: 26px; word-wrap: break-word"> 를 보시면 지원자격, 심사대상 연구실적물 요건 등을 확인하실 수 있습니다.<br/>-</span><span style="color: #3C7BE4; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; line-height: 26px; word-wrap: break-word"> </span><span style="color: #3C7BE4; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; text-decoration: underline; line-height: 26px; word-wrap: break-word">CSE Top Conference List<br/></span><span style="color: #404040; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; line-height: 26px; word-wrap: break-word"><br/></span><span style="color: #404040; font-size: 18px; font-family: Noto Sans KR; font-weight: 700; line-height: 36px; word-wrap: break-word"> 연도별 채용일정</span><span style="color: #404040; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; line-height: 26px; word-wrap: break-word"> (2022년 9월 현재)</span>
<table style="width: 610px;" border="0" cellspacing="0" cellpadding="0"><colgroup><col span="2" width="305" /> </colgroup>
<tbody>
<tr>
<td class="xl65" style="text-align: center;" width="305" height="28">공고&nbsp; 학기</td>
<td class="xl65" style="text-align: center;" width="305">공고&nbsp; 인원</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2022년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">4</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2022년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">3</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2023년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">3</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2023년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">0</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2024년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2024년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2025년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">2</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2025년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2026년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">2</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2026년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2027년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2027년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2028년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2028년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">0</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2029년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">1</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2029년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">0</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2030년&nbsp; 1학기</span></td>
<td class="xl68" style="text-align: center;">0</td>
</tr>
<tr>
<td class="xl66" style="text-align: center;" width="305" height="28"><span class="font5">2030년&nbsp; 2학기</span></td>
<td class="xl68" style="text-align: center;">0</td>
</tr>
</tbody>
</table>
<br>
<div style="width: 840px; height: 28.01px; color: #373737; font-size: 13px; font-family: Noto Sans KR; font-weight: 400; line-height: 26px; word-wrap: break-word">** 신규 배정 요청 및 미 채용에 따라 변동 가능</div>
  `,
};

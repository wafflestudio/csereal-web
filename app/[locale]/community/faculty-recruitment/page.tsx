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
    <a
      className="block relative w-[25rem] h-[4.5rem] font-yoon cursor-pointer"
      href={latestRecruitmentPostHref}
    >
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
  description: `<p><br></p><h1>Seoul National University Computer Science &amp; Engineering Faculty Hiring</h1><p><a id="main-content"></a></p><div class="se-component se-image-container __se__float-right"><figure><img src="data:image/png;base64,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" alt="" data-rotate="" data-proportion="true" data-size="," data-align="right" data-percentage="auto,auto" data-file-name="image.png" data-file-size="22581" data-origin=","></figure></div><p>The Department of Computer Science and Engineering in&nbsp;Seoul National University(SNU) is delighted to announce<strong>two faculty&nbsp;positions for recruitment in the 2024</strong>academic year (to start on 1st March 2024 or later).<br>We are looking for<strong>outstanding</strong>candidates in all areas of Computer Science &amp; Engineering.<br>The two positions are<strong>at all ranks</strong>: tenure-track Assistant Professor, tenure-track Associate Professor, or tenured Full Professor.</p><p>The Seoul National University Computer Science and Engineering (SNU CSE) department comprises 35 full-time faculty members, along with approximately 350 graduate students and 400 undergraduate students. Our faculty members are at the forefront of world-class research &amp; education, leading a<a href="https://cse.snu.ac.kr/en/research/groups" target="_blank">wide spectrum of research laboratories</a>, spanning from theoretical foundations to computer systems and cutting-edge applications.</p><p>For further details, please email directly to our department head:&nbsp;<a href="mailto:head@cse.snu.ac.kr" target="_blank">head@cse.snu.ac.kr</a>.</p><div><ul><li>The closing date for applications will be during the period from 10-20 October, 2023.</li><li>The application materials include at least CV and more than two recommendation letters. Material submission will be done on-line through an official webpage, whose address will be announced shortly.&nbsp;Meanwhile, applicants are encouraged to reach out to the department head at&nbsp;<a href="mailto:head@cse.snu.ac.kr" target="_blank">head@cse.snu.ac.kr</a>&nbsp;and submit their CVs for consideration.</li><li>With shortlisted candidates we will have interviews in person.&nbsp;Each interview (one or two-day long) includes a research presentationand one-on-one meetings with our faculty members.The interviews will be during the period of 10-30 November, 2023.</li><li>The final decision will be done during the period of 10-30 December, 2023.</li></ul></div>`,
};

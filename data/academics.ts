import { readFile } from 'fs/promises';

import {
  Course,
  CourseChange,
  GeneralStudiesRequirements,
  Scholarship,
  ScholarshipList,
} from '@/types/academics';

import {
  courseChangesData,
  courseData1,
  courseData2,
  courseData3,
  courseData4,
  graduateGuideData,
  undergraduateGuideData,
} from './objects';

export const getMockAcademicsGuide = async (type: 'undergraduate' | 'graduate') => {
  return {
    description: type === 'undergraduate' ? undergraduateGuideData : graduateGuideData,
    attachments: [
      {
        name: 'FILE1',
        url: 'www.google.com',
        bytes: 123123,
      },
      {
        name: 'FILE2',
        url: 'www.google.com',
        bytes: 123123,
      },
      {
        name: 'FILE3',
        url: 'www.google.com',
        bytes: 123123,
      },
    ],
  };
};

export const getMockCourses = async (type: 'undergraduate' | 'graduate'): Promise<Course[]> => [
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData1, id: i })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData2, id: i + 10 })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData3, id: i + 20 })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData4, id: i + 30 })),
];

export const getMockCourseChanges = async (
  type: 'undergraduate' | 'graduate',
): Promise<CourseChange[]> => courseChangesData;

export const getMockGeneralStudiesRequirements = async (): Promise<GeneralStudiesRequirements> => {
  return {
    overview:
      '컴퓨터공학부 학생이 졸업을 하기 위해 반드시 들어야 하는 영역별 교양과목 학점 배분 구조표입니다. 학부생들은 아래의 구조표를 참고하여 수강에 차질이 없도록 하여야 합니다.',
    subjectChanges: [
      {
        status: 'change',
        time: 2014,
        changes: [
          '(구) 010.001 대학국어(Korean) 3-2-2',
          '(신) 031.001 글쓰기의 기초(College Writing: Process & Structure) 3-3-0',
        ],
        progress: '2014학년도 이전 입학자는 ‘대학국어’ 이수를 ‘글쓰기의 기초’로 대체 이수 가능',
      },
      {
        status: 'change',
        time: 2010,
        changes: [
          '(구) 010.142 컴퓨터의 기초(Fundamental of Computer System) 2-2-0',
          '(신) 010.133 컴퓨터의 개념 및 실습(Digital Computer Concept and Practice) 3-2-2',
          '(구) 010.143 컴퓨터원리(Principles of Computer System) 3-3-0',
          '(신) 010.133 컴퓨터의 개념 및 실습(Digital Computer Concept and Practice) 3-2-2',
        ],
        progress:
          '2009학년도 및 이전 입학자는 ‘컴퓨터의 기초 또는 컴퓨터원리’ 이수를 ‘컴퓨터의 개념 및 실습’으로 대체 이수 가능',
      },
      {
        status: 'new',
        time: 2005,
        additionalInfos: [
          '공과대학 이수규정 변경에 따라 전공교과목에서 교양교과목으로 변경하여 신설하는 것임.',
          '‘컴퓨터개론(Introduction to Computer)’을 ‘컴퓨터원리’로 명칭변경함.',
        ],
        changes: [
          '010.140 공학수학1(Engineering Mathematics 1) 3-3-0',
          '010.141 공학수학2(Engineering Mathematics 2) 3-3-0',
          '010.142 컴퓨터의기초(Fundamentals of Computer System) 2-2-0',
          '010.143 컴퓨터원리(Principles of Computer System) 3-3-0',
          '005.054 경영학개론(Introduction to the Theory of Business) 3-3-0',
        ],
        progress:
          '2004학년도 이전 입학자중 전공으로 교양 ‘공학수학1·2’ ‘ 컴퓨터의 기초’ 및 ‘컴퓨터원리’ 교과목을 처음 이수하거나 재이수 하는 경우 전공으로 인정함.',
      },
    ],
    description: await readFile('data/htmls/generalStudiesRequirements.txt', { encoding: 'utf-8' }),
  };
};

export const getMockUndergraduateScholarshipList = async (): Promise<ScholarshipList> => {
  return {
    description: `<p><span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px;">컴퓨터공학부에서는 맞춤형장학금, 근로장학금 등 여러 종류의 교내 장학금과 관정이종환교육재단 등 외부 우수 재단으로부터 다수의 장학금 수혜의 기회를 제공하고 있습니다. 매해 평균 학부생 60% 이상이 교내외 장학금에서 수혜를 받고 있습니다.</span><br></p><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">유의사항<em>​</em></h2><ul style="margin: 1em 0px; padding-left: 2em; list-style-type: square; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><li style="margin: 0.2em 0px; padding: 0px;">모든 장학금은 본인신청을 필수로 합니다.</li><li style="margin: 0.2em 0px; padding: 0px;">대부분의 장학금은 소득분위(국가장학금 신청 후 산정)정보가 필요하니 국가장학금을 반드시 신청하시기 바랍니다.<ul style="margin: 0px; padding-left: 2em; list-style-type: circle;"><li style="margin: 0.2em 0px; padding: 0px;">교내장학금 신청시기: 1학기 장학금은 매년 11월~12월, 2학기 장학금은 매년 5월~6월</li><li style="margin: 0.2em 0px; padding: 0px;">교내장학금 신청방법: 마이스누에서 신청 (장학금 신청사유 등 기재)</li><li style="margin: 0.2em 0px; padding: 0px;">교내장학생 선정시기: 1학기 장학생은 2월, 2학기 장학생은 8월</li></ul></li><li style="margin: 0.2em 0px; padding: 0px;">교외장학금: 학부 홈페이지에 공지되며, 재단에 따라 제출서류 및 신청바법 상이</li><li style="margin: 0.2em 0px; padding: 0px;">교장학금 신청방법: 장학금별로 상이하니 홈페이지 공지사항 확인 필수 (모든 장학 서류는 원본 제출)</li><li style="margin: 0.2em 0px; padding: 0px;">장학금은 지급기준에 부합하는 학생을 대상으로 하되, 가정형편을 고려하여 최종 선정하게 됩니다.</li><li style="margin: 0.2em 0px; padding: 0px;">학기별 장학생선정 등 세부사항은<a rel="nofollow" href="https://cse.snu.ac.kr/department-notices?c%5B%5D=1" style="color: rgb(27, 125, 236); text-decoration: none;">공지사항 게시판</a>에 공고됩니다.</li></ul>`,
    scholarship: [
      { id: 1, name: '성적우수 국가장학금 (이공계)' },
      { id: 2, name: '대통령과학장학금' },
      { id: 3, name: '국가장학금(I,II)' },
      { id: 4, name: '단대 맞춤형 장학금' },
      { id: 5, name: '유학생 장학금' },
      {
        id: 6,
        name: '서울대학교 발전기금 장학금(신영길장학금, 현암 김종상장학금, 기타 컴퓨터공학부 지정 장학금 다수)',
      },
      {
        id: 7,
        name: '교외장학금 (현송문화재단, 유한재단, 관악회,동부문화재단, 청합장학회, 봉신장학회 등 다수)',
      },
      { id: 8, name: '컴퓨터공학 동문회 장학금' },
      { id: 9, name: '근로장학금' },
    ],
  };
};

export const getMockScholarship = async (id: number): Promise<Scholarship> => {
  return {
    id: 1,
    name: '서울대학교 발전기금 장학금(신영길장학금, 현암 김종상장학금, 기타 컴퓨터공학부 지정 장학금 다수)',
    description: `<p><span style="color: rgb(109, 172, 255); font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; font-size: 1.4em; font-weight: 700;">장학 금액</span><br></p><ul style="margin: 1em 0px; padding-left: 2em; list-style-type: square; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><li style="margin: 0.2em 0px; padding: 0px;">신영길(SNU희망) 장학금 - 1학기 2,250,000원</li><li style="margin: 0.2em 0px; padding: 0px;">현암 김종상 장학금 – 1년 4,433,000원</li><li style="margin: 0.2em 0px; padding: 0px;">2014년 신규 출연(SNU희망) 장학금 - 250,000,000원</li></ul><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">기타 다수의 장학금이 배정됨.</p><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">자격</h2><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">학사과정 재학생 중 가정형편을 고려함 (학사: 2.7 이상, 규정학기 초과자 제외)</p><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">선발 기준</h2><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">복지과 배정 및 학부 추천</p><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">신청 시기</h2><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">별도의 신청시기 없음</p><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">신청 절차</h2><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">별도의 신청절차 없음</p>`,
  };
};

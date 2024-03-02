'use client';

import { useState } from 'react';

import DegreeRequirementsContent from '@/public/image/undergraduate_degree_requirements.svg';

import { DegreeRequirements } from '@/types/academics';

import Attachments from '../common/Attachments';
import Dropdown from '../common/form/Dropdown';
import { StraightNode } from '../common/Nodes';
import HTMLViewer from '../editor/HTMLViewer';

export default function DegreeRequirementsBody({ data }: { data: DegreeRequirements[] }) {
  const [selectedDegreeRequirementsIndex, setSelectedDegreeRequirementsIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm">입학연도</p>
          <Dropdown
            contents={data.map((item) => item.year.toString())}
            selectedIndex={selectedDegreeRequirementsIndex}
            onClick={setSelectedDegreeRequirementsIndex}
          />
        </div>
        <Attachments files={[data[selectedDegreeRequirementsIndex].attachment]} />
      </div>
      <div className="flex flex-col mt-6">
        <div className="flex flex-col w-[200px] mb-4">
          <h3 className="font-noto text-lg font-bold pl-3 mb-2">공통: 졸업사정 유의사항</h3>
          <StraightNode />
        </div>
        <DegreeRequirementsContent />
      </div>
      <HTMLViewer htmlContent={description} className="mt-7" />
    </>
  );
}

// TODO: API로 변경
const description = `<h2>컴퓨터공학 전공 학점</h2><h3>컴퓨터공학 단일 전공 (자유전공학부 주전공: 심화전공 해당)<a rel="nofollow" href="https://cse.snu.ac.kr/node/41275">https://cse.snu.ac.kr/node/41275</a>참조</h3><ul><li>(2021~2023학번) 전공학점 63학점을 이수: 전필 30학점 + 전선 내규필수 8학점을 포함한 63학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학(3), 논리설계(4), 컴퓨터프로그래밍(4), 전기전자회로(3), 자료구조(3), 컴퓨터구조(3), 시스템프로그래밍(4),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알고리즘(3), 공대 공통교과목(3)<br>&nbsp;&nbsp;&nbsp;- 전선내규필수: 소프트웨어 개발의 원리와 실습(4), 컴퓨터공학세미나(1) 또는 IT-리더십세미나(1)(세미나는 1과목만 이수),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;창의적통합설계 1(3) 또는 창의적통합설계 2(3)</p><ul><li>(2020학번) 전공학점 63학점을 이수: 전필 31학점 + 전선 내규필수 8학점을 포함한 63학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학(3), 논리설계(4), 컴퓨터프로그래밍(4), 전기전자회로(3), 자료구조(4), 컴퓨터구조(3), 시스템프로그래밍(4),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알고리즘(3), 공대 공통교과목(3)<br>&nbsp;&nbsp;&nbsp;- 전선내규필수: 소프트웨어 개발의 원리와 실습(4), 컴퓨터공학세미나(1) 또는 IT-리더십세미나(1)(세미나는 1과목만 이수),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;창의적통합설계 1(3) 또는 창의적통합설계 2(3)</p><ul><li>(2019학번) 전공학점 63학점을 이수: 전필 35학점 + 전선 내규필수 4학점을 포함한 63학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계(4학점), 컴퓨터프로그래밍(4학점), 전기전자회로, 자료구조(4학점), 컴퓨터구조,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소프트웨어 개발의 원리와 실습(4학점), 시스템프로그래밍(4학점), 알고리즘, 공대 공통교과목<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나 또는 IT-리더십세미나(세미나는 1과목만 이수), 창의적통합설계 1 또는 창의적통합설계 2<br></p><ul><li>(2008~2010학번) 컴퓨터공학 전공 60학점 이상: 전필 33학점 + 내규 5학점을 포함한 60학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로그래밍언어, 알고리즘<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나, IT-리더십세미나, 프로젝트1 또는 프로젝트2<br></p><ul><li>(2011~2014학번) 컴퓨터공학 전공 63학점 이상: 전필 36학점 + 내규 5학점을 포함한 63학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로그래밍언어, 알고리즘, 공대 공통교과목<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나, IT-리더십세미나, 프로젝트1 또는 프로젝트2<br></p><ul><li>(2015~2018학번) 컴퓨터공학 전공 63학점 이상: 전필 37학점 + 내규 4학점을 포함한 63학점 이수<br></li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계(4학점), 컴퓨터프로그래밍(4학점), 전기전자회로, 자료구조(4학점), 컴퓨터구조, 소프트웨어 개발의 원리와 실제,<br>&nbsp;&nbsp;&nbsp; 시스템프로그래밍(4학점), 하드웨어시스템설계, 알고리즘, 공대 공통교과목<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나 또는 IT-리더십세미나(세미나는 1과목만 이수), 창의적통합설계 1 또는 창의적통합설계 2</p><h3>컴퓨터공학을 주전공으로 하는 학생이 타 전공을 복수전공/부전공할 때(자유전공학부에서 주전공 2개 이상 중 하나로 컴퓨터공학을 전공할 때)<a rel="nofollow" href="https://cse.snu.ac.kr/node/41275">https://cse.snu.ac.kr/node/41275</a>참조</h3><ul><li>(2021~2023학번) 컴퓨터공학부의 전공학점을 45학점 이상(복수전공, 연합전공시) / 48학점 이상(부전공, 연계전공시) 이수하고 타 학부에서 정하는 필요학점 이수: 컴퓨터공학부 전필 30학점 + 전선 내규필수 8학점 + 전선 7학점 이상(복수전공, 연합전공시) / 컴퓨터공학부 전필 30학점 + 전선 내규필수 8학점 + 전선 10학점 이상(부전공, 연계전공시)<br></li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학(3), 논리설계(4), 컴퓨터프로그래밍(4), 전기전자회로(3), 자료구조(3), 컴퓨터구조(3), 시스템프로그래밍(4),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알고리즘(3), 공대 공통교과목(3)<br>&nbsp;&nbsp;&nbsp;- 전선내규필수: 소프트웨어 개발의 원리와 실습(4), 컴퓨터공학세미나(1) 또는 IT-리더십세미나(1)(세미나는 1과목만 이수),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;창의적통합설계 1(3) 또는 창의적통합설계 2(3)</p><ul><li>(2020학번) 컴퓨터공학부의 전공학점을 45학점 이상(복수전공, 연합전공시) / 48학점 이상(부전공, 연계전공시) 이수하고 타 학부에서 정하는 필요학점 이수: 컴퓨터공학부 전필 31학점 + 전선 내규필수 8학점 + 전선 6학점 이상(복수전공, 연합전공시) / 컴퓨터공학부 전필 31학점 + 전선 내규필수 8학점 + 전선 9학점 이상(부전공, 연계전공시)<br></li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학(3), 논리설계(4), 컴퓨터프로그래밍(4), 전기전자회로(3), 자료구조(4), 컴퓨터구조(3), 시스템프로그래밍(4),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알고리즘(3), 공대 공통교과목(3)<br>&nbsp;&nbsp;&nbsp;- 전선내규필수: 소프트웨어 개발의 원리와 실습(4), 컴퓨터공학세미나(1) 또는 IT-리더십세미나(1)(세미나는 1과목만 이수),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;창의적통합설계 1(3) 또는 창의적통합설계 2(3)</p><ul><li>(2019학번) 컴퓨터공학부의 전공학점을 41학점 이상 이수하고 타 학부에서 정하는 필요학점 이수: 컴퓨터공학부 전필 35학점 + 전선 내규필수 4학점 + 전선 2학점이상</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계(4학점), 컴퓨터프로그래밍(4학점), 전기전자회로, 자료구조(4학점), 컴퓨터구조,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소프트웨어 개발의 원리와 실습(4학점), 시스템프로그래밍(4학점), 알고리즘, 공대 공통교과목<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나 또는 IT-리더십세미나(세미나는 1과목만 이수), 창의적통합설계 1 또는 창의적통합설계 2</p><ul><li>(2008~2010학번) 컴퓨터공학부의 전공학점을 39학점 이상 이수하고 타 학부에서 정하는 필요학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로그래밍언어, 알고리즘<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나, IT-리더십세미나, 프로젝트1 또는 프로젝트2</p><ul><li>(2011~2014학번) 컴퓨터공학부의 전공학점을 41학점 이상 이수하고 타 학부에서 정하는 필요학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로그래밍언어, 알고리즘, 공대 공통교과목<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나, IT-리더십세미나, 프로젝트1 또는 프로젝트2</p><ul><li>(2015~2018학번) 컴퓨터공학부의 전공학점을 41학점 이상 이수하고 타 학부에서 정하는 필요학점 이수</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계(4학점), 컴퓨터프로그래밍(4학점), 전기전자회로, 자료구조(4학점), 컴퓨터구조, 소프트웨어 개발의 원리와 실제,<br>&nbsp;&nbsp;&nbsp; 시스템프로그래밍(4학점), 하드웨어시스템설계, 알고리즘, 공대 공통교과목<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나 또는 IT-리더십세미나(세미나는 1과목만 이수), 창의적통합설계 1 또는 창의적통합설계 2</p><h3>컴퓨터공학 복수전공, 타 전공 주전공 (컴퓨터공학부가 아닌 다른 학과 학생이 컴퓨터 공학을 복수전공할 때)</h3><ul><li>(2021~2023학번) 컴퓨터공학 전공 39학점 이상 (공대 공통 교과목 제외): 전필 27학점 + 전선 12학점이상</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학(3), 논리설계(4), 컴퓨터프로그래밍(4), 전기전자회로(3), 자료구조(3), 컴퓨터구조(3), 시스템프로그래밍(4),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알고리즘(3)<br>&nbsp;&nbsp;&nbsp;- 내규필수: 면제<br></p><ul><li>(2020학번) 컴퓨터공학 전공 39학점 이상 (공대 공통 교과목 제외): 전필 28학점 + 전선 11학점이상</li></ul><pre><a rel="nofollow" href="https://cse.snu.ac.kr/node/35308">https://cse.snu.ac.kr/node/35308</a>, <a rel="nofollow" href="https://cse.snu.ac.kr/node/41275">https://cse.snu.ac.kr/node/41275</a>  참조<br></pre><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학(3), 논리설계(4), 컴퓨터프로그래밍(4), 전기전자회로(3), 자료구조(4), 컴퓨터구조(3), 시스템프로그래밍(4),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알고리즘(3)<br>&nbsp;&nbsp;&nbsp;- 내규필수: 면제<br><br></p><ul><li>(2019학번) 컴퓨터공학 전공 39학점 이상 (공대 공통 교과목 제외) /<a rel="nofollow" href="https://cse.snu.ac.kr/node/35308">https://cse.snu.ac.kr/node/35308</a>참조</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계(4학점), 컴퓨터프로그래밍(4학점), 전기전자회로, 자료구조(4학점), 컴퓨터구조,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소프트웨어 개발의 원리와 실습(4학점), 시스템프로그래밍(4학점), 알고리즘<br>&nbsp;&nbsp;&nbsp;- 내규필수: 면제</p><ul><li>07학번까지&nbsp;: 컴퓨터공학 전공 51학점 이상 (공대 공통 교과목 포함)</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로그래밍언어, 알고리즘, 공대 공통교과목<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나, IT-리더십세미나, 프로젝트1 또는 프로젝트</p><ul><li>(2008~2014학번) 컴퓨터공학 전공 39학점 이상 (공대 공통 교과목 제외)</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로그래밍언어, 알고리즘<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나, IT-리더십세미나, 프로젝트1 또는 프로젝트2</p><ul><li>(2015~2018학번) 컴퓨터공학 전공 39학점 이상 (공대 공통 교과목 제외)</li></ul><p>&nbsp;&nbsp;&nbsp;- 전필: 이산수학, 논리설계(4학점), 컴퓨터프로그래밍(4학점), 전기전자회로, 자료구조(4학점), 컴퓨터구조, 소프트웨어 개발의 원리와 실제,<br>&nbsp;&nbsp;&nbsp;시스템프로그래밍(4학점), 하드웨어시스템설계, 알고리즘<br>&nbsp;&nbsp;&nbsp;- 내규필수: 컴퓨터공학세미나 또는 IT-리더십세미나(세미나는 1과목만 이수), 창의적통합설계 1 또는 창의적통합설계 2</p><h3>컴퓨터공학 부전공, 타 전공 주전공 (컴퓨터 공학부가 아닌 다른 학과 학생이 컴퓨터 공학을 부전공할 때)</h3><ul><li>07학번까지&nbsp;: 컴퓨터공학 전공<strong>24학점 이상</strong>-&gt; 전필 (자료구조, 시스템프로그래밍, 컴퓨터구조) 교과목을 포함하여 총 24학점 이상 이수</li><li>08학번부터&nbsp;: 컴퓨터공학 전공<strong>21학점 이상</strong>-&gt; 전필 (자료구조, 시스템프로그래밍, 컴퓨터구조) 교과목을 포함하여 총 21학점 이상 이수</li></ul><h2>생명존중(자살예방) 교육 이수 의무</h2><p>2016학년도 공과대학 신입생부터는 서울대학교 공과대학 생명존중(자살예방) 교육 이수가 졸업 필수 조건이므로 반드시 입학년도 첫 학기에 이수 후 이수증 사본을 컴퓨터공학부 행정실에 제출해야 한다. (컴퓨터공학부 필수 이수 대상자: 학부생 2016 ~ 2023학번)</p><h2>외국어진행강좌 수강 의무</h2><p>2008학년도 신입생부터는 1과목 이상의 전공교과목을 포함하여 3과목 이상의 외국어진행강좌를 수강해야 한다. (2012학번부터는 대학영어 제외)</p><h2>학점</h2><p>재학 중 이수한 전 교과목 및 전공 교과목의 성적 평점평균이 각각 C0(2.0)이상이어야 졸업할 수 있다.</p><h2>전필 교과목</h2><ul><li>(2008~2014학번) 이산수학, 논리설계, 논리설계실험, 컴퓨터프로그래밍, 전기전자회로, 자료구조, 프로그래밍의 원리, 컴퓨터구조, 운영체제, 프로그래밍언어, 알고리즘</li><li>(2015~2018학번) 이산수학, 논리설계(4학점), 컴퓨터프로그래밍(4학점), 전기전자회로, 자료구조(4학점), 컴퓨터구조, 소프트웨어 개발의 원리와 실제, 시스템프로그래밍(4학점), 하드웨어시스템설계, 알고리즘</li></ul><h2>공과대학 공통 교과목</h2><ul><li>주전공 (2021~2023학번)<br><a rel="nofollow" href="https://cse.snu.ac.kr/node/59168">https://cse.snu.ac.kr/node/59168</a>참고</li></ul><p>&nbsp;&nbsp;&nbsp;- 공과대학 공통과목 전 영역에서 3학점을 필수로 이수하여야 함<br>&nbsp;&nbsp;&nbsp;- 400.XXX 또는 M2177.XXXXXXX 과목은 최대 9학점까지 인정(정보통신융합 및 딥러닝의 기초는 9학점 제한에서 제외)</p><ul><li>주전공 (2011 ~ 2019학번)</li></ul><p>&nbsp;&nbsp;&nbsp;- 기계공학개론(400.013), 산업공학개론(400.015), 재료공학개론(400.020) 건설환경공학개론(400.022), 화학생물공학개론(400.023), 에너지자원공학개론(400.024) 중 택일</p><ul><li>주전공 (2008 ~ 2010학번)</li></ul><p>&nbsp;&nbsp;&nbsp;- 해당없음</p><ul><li>복수전공 (2008 ~2020학번)</li></ul><p>&nbsp;&nbsp;&nbsp;- 해당없음</p><ul><li>복수전공 (~ 2007학번까지)</li></ul><p>&nbsp;&nbsp;&nbsp;- 기계공학개론(400.013), 산업공학개론(400.015), 전기공학개론(400.019), 재료공학개론 (400.020) 중 택일</p><h2>내규 교과목</h2><ul><li>컴퓨터공학세미나 (1학점)</li><li>IT-리더십세미나 (1학점)</li><li>프로젝트1 (3학점) 또는 프로젝트2 (3학점)</li></ul><p>이상 총 5학점.</p><h2>과거 학번 학생들을 위한 경과조치</h2><h3>컴퓨터공학세미나, IT-리더십세미나 교과목</h3><ul><li>2015 ~ 2020학번: 컴퓨터공학세미나 또는 IT-리더십세미나 중 택일</li><li>2006 ~ 2014학번: 컴퓨터공학세미나 및 IT-리더십세미나 모두 수강</li><li>2002 ~ 2005학번: 컴퓨터공학세미나 또는 IT-리더십세미나 중 택일</li></ul><h3>프로젝트 교과목</h3><ul><li>1999학번부터: 프로젝트1 (설계프로젝트1, 창의적통합설계1) 또는 프로젝트2 (설계프로젝트2, 창의적통합설계2) 중 택일</li><li>1998학번까지: 프로젝트1 (설계프로젝트1) 및 프로젝트2 (설계프로젝트2) 모두 수강</li><li>(예외) (구)전산과학과에서 소속을 변경한 학생은 프로젝트1 및 프로젝트 2를 수강하지 않아도 된다.</li></ul><h3>교양 대학영어 (대학영어1, 대학영어2, 고급영어) 교과목</h3><p>2008학번을 포함한 그 이전 학생이 대학영어 또는 고급영어를 수강할 경우 (재수강 포함), 대학영어 과목의 학점 변경 (3학점에서 2학점으로 변경)으로 인해 학문의 기초에서 이수학점을 충족하지 못하더라도 학문의 기초 최저이수학점을 이수한 것으로 인정한다. 단 전체 교양 최저이수학점은 충족해야 한다.</p><h2>졸업논문</h2><p>학부생은 논문 지도교수의 허락을 받을 경우 아래의 내용으로 졸업논문을 대체할 수 있다. 단, 졸업논문 형식의 보고서를 작성하여 제출하여야 한다.</p><ol><li>프로젝트 과목의 결과물 (교과목명 변경: 프로젝트=창의적통합설계)<ol><li>프로젝트 1 과목과 프로젝트 2 과목을 모두 이수한 학생에 한한다.</li><li>논문은 제출자가 프로젝트 팀 내에서 다른 구성원이 아닌 자신이 직접 수행한 것을 바탕으로 작성하여야 한다. 다른 구성원의 업적을 개인의 업적인 양 제출하는 것은 연구윤리 위반에 해당하므로 졸업사정에서 제외한다.</li><li>프로젝트의 팀원이 결과를 중복하여 각각 개인의 업적으로 제출할 수 없다. 중복이 발견될 경우에 중복에 관련된 전원의 졸업논문을 인정하지 않는다.</li></ol></li><li>Open S/W를 등록한 내용</li><li>AppStore 등 사이트에 등록한 내용</li><li>회사에서 근무하거나 인턴으로 했던 작업의 내용</li><li>저널이나 컨퍼런스에 저자로 논문이 게재확정 되거나 게재된 내용</li><li>스타트업을 창업하여 본인이 회사에 기여한 내용</li></ol><p>※ 회사에서 근무하거나 인턴으로 했던 작업의 내용으로 졸업논문을 작성시 본인의 논문내용이 특정회사와 관련된 경우 회사 담당자로부터 학부논문 제출 동의서를 회사에서 받은 후 컴퓨터공학부 행정실로 제출해야 함.</p><h2>학번별 필수 교과목</h2>`;

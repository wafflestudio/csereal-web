import { Guide } from '@/types/academics';

import { getRequest } from '.';

export const getUndergraduateGuide = () =>
  getRequest('/academics/undergraduate/guide') as Promise<Guide>;

export const getUndergraduateGuideMock: typeof getUndergraduateGuide = async () => ({
  description: mock,
});

const mock = `<div>
<h3>수강신청</h3>
<ol className="list-decimal">
  <li>
    수강 신청 수강 신청은 1학기 (당해 연도 1월 또는 2월 중) 2학기 (당해 연도 7월 또는 8월
    중)
  </li>
  <li>수강 변경은 매 학기 수업 주수 1주 이내 (6학점 이내)</li>
  <li>수강 취소는 수업 주수 2/4선 이내</li>
  <li>
    수강 신청 학점 (학기 당)은 18학점 이내
    <ol className="list-[lower-alpha]">
      <li>직전 2개 학기 평점 평균이 3.3 이상일 때 21학점까지 신청할 수 있음</li>
      <li>
        직전 학기 학사 경고 (한 학기 성적 평점 평균이 1.7에 미달되거나 3 교과목 이상
        또는 6학점 이상이 'F')를 받은 경우는 학기당 15학점까지만 수강 신청 가능
      </li>
    </ol>
  </li>
</ol>
<div>
  <h4>수강에 관한 내규</h4>
  <p>
    유사 과목 목록에 따라 중복 수강을 금지한다. (2004학번부터 적용) 컴퓨터공학부에 개설된
    과목을 타과의 유사 과목으로 대체 금지. 단, 타과 과목이 컴퓨터공학부 과목보다 심화된
    과목의 경우 예외 인정.
  </p>
</div>

<div>
  <h4>타과과의 유사 교과목 목록</h4>
</div>

<div>
  <h3>휴학</h3>
  <ol className="list-decimal">
    <li>휴학 신청은 등록 기간 또는 수업 주수 2/4선 (8주) 이내</li>
    <li>휴학원의 유효 기간은 1년이며, 계속 휴학하고자 할 경우에는 휴학원을 다시 제출</li>
    <li>휴학 기간은 총 6학기</li>
    <li>복학원 제출은 등록 기간 2주 전에 신청</li>
  </ol>
</div>

<div>
  <h3>졸업</h3>
  <ol className="list-decimal">
    <li>
      이수 학점은 130학점 이상 (1996학번부터)
      <ul className="list-disc">
        <li>
          교양 과목
          <ul className="list-disc">
            <li>(1996학번 ~ 2001학번) 36학점 이상</li>
            <li>(2002학번 ~ 2004학번) 37학점 이상</li>
            <li>(2005학번 ~ 2008학번) 54(55)학점 이상</li>
            <li>(2009학번) 55(56)학점 이상</li>
            <li>(2010학번) 56학점 이상</li>
            <li>(2011학번 ~ 2012학번) 53학점 이상</li>
            <li>(2013학번) 47학점 이상 / 사회성 교과목군, 창의성 교과목군 별도 이수</li>
            <li>
              (2014학번 ~ 2015학번) 44학점 이상 / 사회성 교과목군, 창의성 교과목군 별도 이수
            </li>
          </ul>
        </li>
        <li>
          전공 과목
          <ul className="list-disc">
            <li>(1996학번 ~ 2007학번) 51학점 이상</li>
            <li>(2008학번 ~ 2010학번) 60학점 이상</li>
            <li>(2011학번 ~ 2015학번) 63학점 이상</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>전공 및 전체 이수 학점 평점 평균 2.0 이상</li>
  </ol>
</div>

<div>
  <h3>복수전공</h3>
  <ol>
    <li>소속 전공 과정을 포함하여 2개 이상의 전공 과정을 이수함</li>
    <li>
      상호 가능한 대학으로 하며, 지원 자격은 3개 정규학기 이상 이수하고 36학점 이상 취득한
      재학생(복학예정자 포함)으로 성적 평점평균이 2.7이상인 자
    </li>
    <li>
      이수 규정 (2004학년도 1학기부터 시행)
      <ul>
        <li>
          ~2007학번까지
          <ul>
            <li>
              컴퓨터공학부 전공필수 포함하여 51학점 이상 이수하여야 함 (컴퓨터공학부 주전공
              학번과 동일한 이수규정)
            </li>
            <li>
              공대공통교과목(산업공학개론, 전기공학개론, 재료공학개론, 기계공학개론) 중 한
              과목(3학점)을 이수하여야 함.
            </li>
          </ul>
        </li>
        <li>
          2008학번 이후
          <ul>
            <li>
              컴퓨터공학부 전공필수 포함하여 39학점 이상 이수하여야 함 (컴퓨터공학부 주전공
              학번과 전공필수가 동일함)
            </li>
            <li>
              공대공통교과목(산업공학개론, 전기공학개론, 재료공학개론, 기계공학개론 등)
              이수하지 않아도 됨.
            </li>
          </ul>
        </li>
        <li>
          복수전공 이수자는 해당 학부에서 정한 전공 교과목 학점을 이수하여야 하며, 각 전공에
          중복되는 교과목은 아래의 경우를 제외하고는 이중으로 인정하지 아니한다.
          <ul>
            <li>
              복수전공 이수 시 소속 학과(부)와 복수전공 학과(부)의 교과과정에서 전공과목으로
              공통 인정하는 과목(단과대학 내 공통과목 포함)은 9학점까지, 소속 학과(부)와
              복수전공 학과(부)의 교과과정에서 공통 인정하는 타 학과(부)의 과목(단과대학
              내의 공통과목 포함)은 3학점까지 전공학점의 이수로 중복하여 인정할 수 있다.
            </li>
            <li>
              학점인정은 본인의 의사에 따라 인정 받아야 할 필요가 있는 쪽으로 학점 수를
              계산하며, 특정한 하나의 과목이 주전공, 복수전공, 부전공, 연합전공, 연계전공,
              학생설계전공 간에 공통적으로 필수과목인 경우에는 한번 이수한 것으로 각 전공의
              필수를 충족한 것으로 본다.
            </li>
            <li>
              과목을 중복으로 인정한 경우에도 학생이 이수한 총 학점 수의 산정에는 이중으로
              계산하지 아니한다.
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</div>

<div>
  <h3>부전공</h3>
  <ol>
    <li>
      이수 규정
      <ul>
        <li>
          ~2007학번까지
          <ul>
            <li>컴퓨터공학부 전공필수 포함하여 24학점 이상 이수하여야 함</li>
            <li>전공필수: 자료구조, 시스템프로그래밍, 컴퓨터구조</li>
            <li>전공선택: 컴퓨터공학부 전공교과목 중 선택</li>
          </ul>
        </li>
        <li>
          2008학번 이후
          <ul>
            <li>컴퓨터공학부 전공필수 포함하여 21학점 이상 이수하여야 함</li>
            <li>전공필수: 자료구조, 시스템프로그래밍, 컴퓨터구조</li>
            <li>전공선택: 컴퓨터공학부 전공교과목 중 선택</li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</div>

<div>
  <h3>전과(부) 신청</h3>
  <ol>
    <li>
      전과(부) 선발기준
      <ul>
        <li>
          전과(부)의 전출ㆍ입 인원은 대학별로 정한 학과별 학년 정원의 100분의 20 이내로 하며
          전출 및 전입자 선발 기준은 대학장이 따로 정한다. 단, 약학대학 전입 인원은 편입학
          인원을 포함하여 약학대학 입학정원을 초과할 수 없다.
        </li>
      </ul>
    </li>
    <li>
      신청자격 및 허용범위
      <ol>
        <li>
          신청 자격
          <ul>
            <li>
              매 학년도말 현재 4개 학기 이상 등록하고 2학년 수료학점(66학점) 이상을 취득한
              자로서 3학년 수료학점(98학점)에 미만이 되는 자, 다만 의과대학 및 수의과대학
              학생의 경우에는 예과과정 등록학기 및 이수학점을 합산하여 지원할 수 있으며,
              약학대학은 2학년 수료학점을 계절학기 포함한 66학점을 적용한다.
            </li>
            <li>전과(부) 지원시의 취득학점이며, 계절학기 이수 중인 학점은 제외</li>
          </ul>
        </li>
        <li>
          허용범위 및 제한
          <ul>
            <li>사범계는 사범계 각 학과(부) 상호간에만 허용한다.</li>
            <li>
              사범계 이외의 학과(부)는 사범계 이외의 각 학과(부) 상호간에만 허용한다. 다만,
              의학계, 수의학계 및 간호학계로의 전과(부)는 허용하지 아니한다.
            </li>
            <li> 전공을 예약하고 입학한 자(편입학자 포함)는 전과(부) 불가</li>
            <li>
              지원 학과(부)는 1개 학과(부)로 제한한다. (이중으로 지원할 경우 지원 학과(부)
              모두를 취소)
            </li>
          </ul>
        </li>
      </ol>
    </li>
    <li>지원서 기간:매년 1월 중순</li>
  </ol>
</div>
</div>`;

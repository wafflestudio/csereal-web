import { Metadata } from 'next';

import SelectionList from '@/components/common/selection/SelectionList';
import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { reservationIntroduction } from '@/utils/segmentNode';
import { replaceDashWithSpace } from '@/utils/string';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: reservationIntroduction });
}

const path = getPath(reservationIntroduction);

export default function ReservationIntroductionPage({
  searchParams,
}: {
  searchParams: { selected?: string };
}) {
  const selected = (searchParams.selected ||= names[0].ko);
  const temp = replaceDashWithSpace(selected);
  const itemName = isSearchParamValid(temp) ? temp : names[0].ko;

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0, paddingBottom: 300 }}>
      <SelectionList
        names={names}
        selectedItemNameKo={itemName}
        rootPath={path}
        listGridColumnClass="lg:grid-cols-[repeat(auto-fit,_minmax(200px,_auto))]"
      />
      <SelectionTitle animationKey={itemName}>{itemName}</SelectionTitle>
      <HTMLViewer htmlContent={htmlContents[itemName]} />
    </PageLayout>
  );
}

const names = [
  { ko: '세미나실 예약' },
  { ko: '실습실 예약' },
  { ko: '공과대학 강의실 예약' },
] as const;

const isSearchParamValid = (searchParam: string): searchParam is (typeof names)[number]['ko'] => {
  return names.findIndex((x) => x.ko === searchParam) !== -1;
};

const htmlContents = {
  '세미나실 예약':
    '<p><span style="background-color: transparent">로그인 후 하위 메뉴에서 원하는 공간을 선택하여 예약하시면 됩니다.</span><br></p><p>302동 공간은 공과대학 강의실을 학부 차원에서 대여하여 세미나 목적으로 사용하고 있으니 참고 바랍니다.<br><br>-&nbsp;<span style="color:red">세미나실 예약 권한은 컴퓨터공학부 대학원생 및 연구원에게 부여되어 있습니다(학번 필요).</span><br>-&nbsp;<span style="color:#3c7de4">301동 317호 교수회의실은 박사논문심사, 외부인사 방문 미팅(학부 교수님 필참) 시 제한적으로 사용 가능합니다. 세미나 개최는 어렵습니다.</span><br>- 연구실에서는 초청 세미나 공지에 앞서, 세미나실 예약 후 진행하여 주시기 바랍니다.<br><br>학부홈페이지에서는 상시 예약만 이루어지며, 학기 예약(정기 예약)은 아래와 같이 진행되니 참고 바랍니다.<br></p><ul><li>세미나실 학기 예약 안내<br><ul><li>년 4회 실시: 동계 (1~2월), 봄학기 (3~6월), 하계 (7~8월), 가을학기 (9~12월)<br></li><li>학부 담당자가 모든 연구실에 학기예약신청 안내 메일 발송 (예를 들어, 3~6월 학기 예약은 2월에 접수함)</li></ul></li></ul><ul><li>세미나실 학기 예약 규정 (2011.12.01. 학부내규 변경)<br><ul><li>연구실별 연속 예약 시간은 3시간 이내<br></li><li>연구실별 1주일 예약 시간은 총 6시간 이내</li></ul></li></ul><ul><li>연구실 영문 약자는 연구-연구실 목록 참고. (예시) BI: 바이오지능연구실, MRL: 운동연구실, SCONE: 소셜정보망연구실</li></ul>',
  '실습실 예약':
    '<p><span style="background-color: transparent">로그인 후 하위 메뉴에서 원하는 실습실을 선택한 뒤 신청서를 제출하면 관리자가 검토한 후 승인해 드립니다.</span><br></p><p><span style="color:red">실습실 예약 권한은 각 연구실의 실습 조교에게만 부여되어 있습니다.</span></p><p>각 연구실의 영문 약자는&nbsp;<a href="https://cse.snu.ac.kr/sites/all/libraries/mediawiki/index.php?title=/research/labs&amp;action=edit&amp;redlink=1">연구실 목록</a>을 참고하세요.</p><ul><li>이곳에서는 실습실 상시 예약이 이루어지며, 학기 예약은 아래와 같이 진행되니 참고 바랍니다.</li></ul><ul><li>세미나실 학기 예약 안내<ul><li>년 2회 실시: 봄학기 (3~6월), 가을학기 (9~12월)</li><li>학부 담당자가 모든 연구실에 학기예약신청 안내 메일 발송 (예를 들어, 3~6월 학기 예약은 2월 초 시작)</li></ul></li></ul><ul><li>실습실 계정 및 소프트웨어 담당 연락처: contact@bacchus.snucse.org (Bacchus)<ul><li>2020년 1학기부터 소프트웨어실습실에 더 이상 PC가 설치되어 있지 않습니다. 따라서 소프트웨어실습실 PC의 계정 및 실습 환경 문의는 접수하지 않습니다.</li></ul></li></ul>',
  '공과대학 강의실 예약':
    '<p><span style="background-color: transparent">로그인 후 하위 메뉴에서 원하는 공간을 선택하여 예약하시면 됩니다.</span><br></p><p><strong>공과대학 강의실 예약 권한은 컴퓨터공학부 대학원생 및 연구원에게 부여되어 있습니다(학번 필요).<br></strong></p><p><strong><span style="color:red">코로나-19 상황으로 인하여 한시적으로 중간.기말고사 장소로 운영할 예정입니다.</span><br><span style="color:#3c7de4">2022년 2학기 중간.기말 고사 시험이 진행되는 일정의 사용에 대해서만 예약 및 사용이 가능하오니 참고하여 주시기 바랍니다.</span><br>(문의: 컴퓨터공학부 행정실 박서현 02-880-1850)</strong><br><br></p><ul><li>공과대학 강의실 예약 (중간, 기말고사 용도로만 사용가능)<br><ul><li>301-101 (54석) - 마이스누 예약하샤 시스템 이용<br></li><li>301-203 (72석) - 마이스누 예약하샤 시스템 이용<br></li><li>302-106 (52석) - 마이스누 예약하샤 시스템 이용<br></li><li>302-107 (55석) - 마이스누 예약하샤 시스템 이용<br></li><li>302-208 (78석) - 컴퓨터공학부 홈페이지 공과대학 강의실 예약 이용<br></li><li>302-209 (70석) - 컴퓨터공학부 홈페이지 공과대학 강의실 예약 이용<br></li></ul></li></ul><p>공과대학 강의실에서는 연구실 세미나를 진행하실 수 없으니 참고 바랍니다.<br><br><span>세미나는 <a rel="nofollow" href="/reservations/introduction?selected=세미나실-예약">컴퓨터공학부 세미나실</a> 을 이용하여 주시기 바랍니다.</span></p>',
} as const;

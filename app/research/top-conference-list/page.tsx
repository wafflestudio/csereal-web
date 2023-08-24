import { getMockTopConferenceList, getTopConferenceList } from '@/apis/topConferenceList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ConferenceListTable from '@/components/research/topConferenceList/ConferenceListTable';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const formatDateWithDot = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  return `${year}.${month}.${day}(${DAYS[dayOfWeek]})`;
};

export default async function TopConferenceListPage() {
  const { modifiedAt, author, conferenceList } = await getMockTopConferenceList();

  const modifiedDate = formatDateWithDot(modifiedAt);
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <div className="flex flex-col font-noto font-normal text-neutral-700">
        <h3 className="font-bold text-base leading-8 mb-5">
          서울대학교 공과대학 컴퓨터공학부 Top Conference List
        </h3>
        <p className="text-sm leading-[26px]">
          본 리스트는 시간과 상황의 변동에 따라 바뀔 수 있습니다.
        </p>
        <p className="text-sm leading-[26px]">
          수정날짜: {modifiedDate}(작성자: {author})
        </p>
        <ConferenceListTable conferenceList={conferenceList} />
      </div>
    </PageLayout>
  );
}

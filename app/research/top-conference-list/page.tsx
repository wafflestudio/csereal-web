import { getMockTopConferenceList, getTopConferenceList } from '@/apis/topConferenceList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ConferenceListTable from '@/components/research/topConferenceList/ConferenceListTable';

import { formatDateWithDot } from '@/utils/formatting';

export default async function TopConferenceListPage() {
  const { modifiedAt, author, conferenceList } = await getMockTopConferenceList();

  const modifiedDate = formatDateWithDot(modifiedAt);
  return (
    <PageLayout titleType="big">
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

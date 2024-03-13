import ConferenceListTable from '@/app/[locale]/research/top-conference-list/ConferenceListTable';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function TopConferenceListPage() {
  // TODO: api 반영되면 적용
  //   const { modifiedAt, author, conferenceList } = await getTopConferenceList();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col text-neutral-950">
        <h3 className=" mb-5 text-base font-bold leading-8">
          서울대학교 공과대학 컴퓨터공학부 Top Conference List
        </h3>
        <p className="text-md leading-[26px]">
          본 리스트는 시간과 상황의 변동에 따라 바뀔 수 있습니다.
        </p>
        <p className="text-md leading-[26px]">
          수정날짜: {'modifiedAt'}(작성자: {'author'})
        </p>
        <ConferenceListTable conferenceList={[]} />
      </div>
    </PageLayout>
  );
}

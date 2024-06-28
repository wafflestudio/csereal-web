import { getTranslations } from 'next-intl/server';

import { getTopConferenceList } from '@/apis/research';

import ConferenceListTable from '@/app/[locale]/research/top-conference-list/ConferenceListTable';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { topConferenceList } from '@/utils/segmentNode';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: topConferenceList });
}

export default async function TopConferenceListPage() {
  const { modifiedAt, author, conferenceList } = await getTopConferenceList();
  const t = await getTranslations('Content');

  // TODO: 왜 기본값이 한국이 아닌지 알아내기
  const dateStr = new Date(modifiedAt).toLocaleDateString('ko-KR');

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col text-neutral-950">
        <h3 className=" mb-5 text-base font-bold leading-8">
          {t('서울대학교 공과대학 컴퓨터공학부')} Top Conference List
        </h3>
        <p className="text-md leading-[26px]">
          {t('본 리스트는 시간과 상황의 변동에 따라 바뀔 수 있습니다')}.
        </p>
        <p className="text-md leading-[26px]">
          {t('수정 날짜')}: {dateStr}
          <br />
          {t('작성자')}: {author}
        </p>
        <ConferenceListTable conferenceList={conferenceList} />
      </div>
    </PageLayout>
  );
}

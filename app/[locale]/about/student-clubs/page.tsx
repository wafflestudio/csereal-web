import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

import { getClubs } from '@/apis/about';

import ClubDetails from '@/app/[locale]/about/student-clubs/ClubDetails';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('동아리 소개'),
    description: '서울대학교 컴퓨터공학부 동아리 소개 페이지입니다.',
  };
}

interface StudentClubsPageProps {
  searchParams: { selected?: string };
}

const clubPath = getPath(studentClubs);

export default async function StudentClubsPage({ searchParams }: StudentClubsPageProps) {
  const clubs = await getClubs();
  const selectedClub = findSelectedItem(clubs, searchParams.selected);

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0 }}>
      <SelectionList
        names={clubs.map((club) => club.name)}
        selectedItemName={selectedClub?.name ?? ''}
        path={clubPath}
      />
      {selectedClub ? (
        <ClubDetails club={selectedClub} />
      ) : (
        <NotFoundLabel>{searchParams.selected}</NotFoundLabel>
      )}
    </PageLayout>
  );
}

const NotFoundLabel = ({ children }: { children: ReactNode }) => (
  <p>
    <b>{children}</b>은/는 존재하지 않는 동아리입니다.
  </p>
);

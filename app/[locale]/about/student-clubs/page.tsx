import { Metadata } from 'next';
import { ReactNode } from 'react';

import { getClubs } from '@/apis/about';

import ClubDetails from '@/app/[locale]/about/student-clubs/ClubDetails';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: studentClubs });
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
        names={clubs.map((club) => ({ ko: club.name, en: club.engName }))}
        selectedItemName={selectedClub?.name ?? ''}
        rootPath={clubPath}
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

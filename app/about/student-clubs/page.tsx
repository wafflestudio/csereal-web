'use client';

import useSWR from 'swr';

import { getClubsMock } from '@/apis/club';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ClubDetails from '@/components/studentClubs/ClubDetails';

import { Club } from '@/types/club';
import { studentClubs } from '@/types/page';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

interface StudentClubsPageProps {
  searchParams: { selected?: string };
}

const DEFAULT_CLUB = '와플스튜디오';
const clubPath = getPath(studentClubs);

export default function StudentClubsPage({ searchParams }: StudentClubsPageProps) {
  const { data: clubs = [] } = useSWR({ url: '/clubs' }, getClubsMock);
  const selectedClub = findSelectedItem<Club>(
    clubs,
    decodeURI(searchParams.selected ?? ''),
    DEFAULT_CLUB,
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <SelectionList
        names={clubs.map((club) => club.name)}
        selectedItemName={selectedClub?.name ?? ''}
        path={clubPath}
        listGridColumnClass="grid-cols-[repeat(4,_12.5rem)]"
      />
      {selectedClub && <ClubDetails club={selectedClub} />}
    </PageLayout>
  );
}

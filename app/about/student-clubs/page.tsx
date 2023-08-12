import { getClubs, getClubsMock } from '@/apis/club';

import { SelectionList } from '@/components/common/SelectionList';
import PageLayout from '@/components/layout/PageLayout';
import ClubDetails from '@/components/studentClubs/ClubDetails';

import { studentClubs } from '@/types/page';

import { getPath } from '@/utils/page';

interface StudentClubsPageProps {
  searchParams: { selected?: string };
}

const DEFAULT_CLUB = '와플스튜디오';
const clubPath = getPath(studentClubs);

export default async function StudentClubsPage({ searchParams }: StudentClubsPageProps) {
  const selected = searchParams.selected ? decodeURI(searchParams.selected) : DEFAULT_CLUB;
  const { clubs, selectedClub } = await getData(selected);

  return (
    <PageLayout currentPage={studentClubs} title={studentClubs.name} titleSize="text-2xl">
      <SelectionList
        names={clubs.map((club) => club.name)}
        selectedItemName={selectedClub ? selectedClub.name : ''}
        path={clubPath}
      />
      {selectedClub && <ClubDetails club={selectedClub} />}
    </PageLayout>
  );
}

export async function getData(selectedClubName: string) {
  // const clubs = await getClubs();
  const clubs = await getClubsMock();
  const selectedClub = clubs.find((club) => club.name === selectedClubName);
  return { clubs, selectedClub };
}

import { getClubs, getClubsMock } from '@/apis/club';

import PageLayout from '@/components/layout/PageLayout';
import ClubDetails from '@/components/studentClubs/ClubDetails';
import ClubList from '@/components/studentClubs/ClubList';

import { studentClubs } from '@/types/page';

interface StudentClubsPageProps {
  searchParams: { selected?: string };
}

const DEFAULT_CLUB = '와플스튜디오';

export default async function StudentClubsPage({ searchParams }: StudentClubsPageProps) {
  const selected = searchParams.selected ? decodeURI(searchParams.selected) : DEFAULT_CLUB;
  const { clubs, selectedClub } = await getData(selected);

  return (
    <PageLayout currentPage={studentClubs} title={studentClubs.name} titleSize="text-2xl">
      <ClubList clubs={clubs} selectedClub={selectedClub} />
      {selectedClub && <ClubDetails club={selectedClub} />}
    </PageLayout>
  );
}

export async function getData(selectedClubName: string) {
  // const clubs = await getClubs();
  const clubs = getClubsMock();
  const selectedClub = clubs.find((club) => club.name === selectedClubName);
  return { clubs, selectedClub };
}

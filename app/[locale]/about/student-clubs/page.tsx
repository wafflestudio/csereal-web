import { getClubs } from '@/apis/about';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ClubDetails from '@/components/studentClubs/ClubDetails';

import { studentClubs } from '@/types/page';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

interface StudentClubsPageProps {
  searchParams: { selected?: string };
}

const clubPath = getPath(studentClubs);

export default async function StudentClubsPage({ searchParams }: StudentClubsPageProps) {
  const clubs = await getClubs();
  const selectedClub = findSelectedItem(
    clubs,
    decodeURI(searchParams.selected ?? ''),
    clubs[0]?.name,
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <SelectionList
        names={clubs.map((club) => club.name)}
        selectedItemName={selectedClub?.name ?? ''}
        path={clubPath}
        listGridColumnClass="grid-cols-[repeat(4,_12.5rem)]"
      />
      {selectedClub ? (
        <ClubDetails club={selectedClub} />
      ) : (
        <p>
          <b>{`'${searchParams.selected}'`}</b>은/는 존재하지 않는 동아리입니다.
        </p>
      )}
    </PageLayout>
  );
}

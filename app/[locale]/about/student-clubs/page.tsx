import { getClubs } from '@/apis/about';

import ClubDetails from '@/app/[locale]/about/student-clubs/ClubDetails';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';

interface StudentClubsPageProps {
  searchParams: { selected?: string };
}

const clubPath = getPath(studentClubs);

export default async function StudentClubsPage({ searchParams }: StudentClubsPageProps) {
  const clubs = await getClubs();
  const selectedClub = findSelectedItem(
    clubs,
    decodeURI(searchParams.selected ?? ''),
    '와플스튜디오',
  );

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
        <p>
          <b>{`'${searchParams.selected}'`}</b>은/는 존재하지 않는 동아리입니다.
        </p>
      )}
    </PageLayout>
  );
}

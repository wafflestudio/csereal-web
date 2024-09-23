import { getClubs } from '@/apis/about';
import { findItemBySearchParam } from '@/utils/findSelectedItem';

import StudentClubEditPageContent from './StudentClubEditPageContent';

interface StudentClubEditPageProps {
  searchParams: { selected?: string };
}

export default async function StudentClubEditPage({ searchParams }: StudentClubEditPageProps) {
  const clubs = await getClubs();
  const selectedClub = findItemBySearchParam(
    clubs,
    (item) => [item.en.name, item.ko.name],
    searchParams.selected,
  );

  return <StudentClubEditPageContent data={selectedClub} />;
}

import { getClubs } from '@/apis/v2/about/student-clubs';
import { findItemBySearchParam } from '@/utils/findSelectedItem';

import StudentClubEditPageContent from './StudentClubEditPageContent';

interface StudentClubEditPageProps {
  searchParams: { selected?: string };
}

export default async function StudentClubEditPage({ searchParams }: StudentClubEditPageProps) {
  const clubs = await getClubs();
  const selectedClub =
    findItemBySearchParam(clubs, (item) => [item.en.name, item.ko.name], searchParams.selected) ||
    clubs[0];

  return <StudentClubEditPageContent data={selectedClub} />;
}

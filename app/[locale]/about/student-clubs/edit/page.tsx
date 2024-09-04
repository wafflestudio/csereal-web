import { getClubs } from '@/apis/about';
import { findSelectedItemV2 } from '@/utils/findSelectedItem';

import StudentClubEditPageContent from './StudentClubEditPageContent';

interface StudentClubEditPageProps {
  searchParams: { selected?: string };
}

export default async function StudentClubEditPage({ searchParams }: StudentClubEditPageProps) {
  const clubs = await getClubs();
  const selectedClub = findSelectedItemV2(clubs, searchParams.selected, '/not-found');

  return <StudentClubEditPageContent data={selectedClub} />;
}

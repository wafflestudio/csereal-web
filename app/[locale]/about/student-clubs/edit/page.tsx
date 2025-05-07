import { getClubs } from '@/apis/v2/about/student-clubs';
import StudentClubEditPageContent from '@/app/[locale]/about/student-clubs/edit/StudentClubEditPageContent';
import { findItemBySearchParam } from '@/utils/findSelectedItem';

interface StudentClubEditPageProps {
  searchParams: Promise<{ selected?: string }>;
}

export default async function StudentClubEditPage(props: StudentClubEditPageProps) {
  const searchParams = await props.searchParams;
  const clubs = await getClubs();
  const selectedClub =
    findItemBySearchParam(clubs, (item) => [item.en.name, item.ko.name], searchParams.selected) ||
    clubs[0];

  return <StudentClubEditPageContent data={selectedClub} />;
}

import { getFacultyRecruitment } from '@/apis/v2/recruit';
import FacultyRecruitmentEditPageContent from '@/app/[locale]/community/faculty-recruitment/edit/FacultyRecruitmentEditPageContent';

export default async function FacultyRecruitmentEditPage() {
  const data = await getFacultyRecruitment();
  return <FacultyRecruitmentEditPageContent data={data} />;
}

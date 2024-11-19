import { getFacultyRecruitment } from '@/apis/recruitment';

import FacultyRecruitmentEditPageContent from './FacultyRecruitmentEditPageContent';

export default async function FacultyRecruitmentEditPage() {
  const data = await getFacultyRecruitment();

  return <FacultyRecruitmentEditPageContent data={data} />;
}

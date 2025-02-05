import { getFacultyRecruitment } from '@/apis/v2/recruit';

import FacultyRecruitmentEditPageContent from './FacultyRecruitmentEditPageContent';

export default async function FacultyRecruitmentEditPage() {
  const data = await getFacultyRecruitment();
  return <FacultyRecruitmentEditPageContent data={data} />;
}

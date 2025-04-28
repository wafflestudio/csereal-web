import { getScholarshipList } from '@/apis/v2/academics/[studentType]/scholarship';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import ScholarshipGuideEditor from '../../../components/scholarship/ScholarshipGuideEditor';

const path = getPath(graduateScholarship);

export default async function GraduateScholarshipListEditPage() {
  const { description } = await getScholarshipList('graduate');

  return (
    <PageLayout title="대학원 장학 제도 안내 편집" titleType="big">
      <ScholarshipGuideEditor description={description} studentType="graduate" cancelPath={path} />
    </PageLayout>
  );
}

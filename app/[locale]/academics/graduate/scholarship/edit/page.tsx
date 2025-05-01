import { getScholarshipList } from '@/apis/v2/academics/[studentType]/scholarship';
import ScholarshipGuideEditor from '@/app/[locale]/academics/components/scholarship/ScholarshipGuideEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(graduateScholarship);

export default async function GraduateScholarshipListEditPage() {
  const { description } = await getScholarshipList('graduate');

  return (
    <PageLayout title="대학원 장학 제도 안내 편집" titleType="big">
      <ScholarshipGuideEditor description={description} studentType="graduate" cancelPath={path} />
    </PageLayout>
  );
}

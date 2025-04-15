import { getScholarshipList } from '@/apis/v2/academics/[studentType]/scholarship';
import ScholarshipGuideEditor from '@/app/[locale]/academics/components/scholarship/ScholarshipGuideEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(undergraduateScholarship);

export default async function UndergraduateScholarshipListEditPage() {
  const { description } = await getScholarshipList('undergraduate');

  return (
    <PageLayout title="학부 장학 제도 안내 편집" titleType="big">
      <ScholarshipGuideEditor
        description={description}
        studentType="undergraduate"
        cancelPath={path}
      />
    </PageLayout>
  );
}

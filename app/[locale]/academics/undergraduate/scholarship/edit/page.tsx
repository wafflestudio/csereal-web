import { getScholarshipList } from '@/apis/v2/academics/[studentType]/scholarship';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import ScholarshipGuideEditor from '../../../components/scholarship/ScholarshipGuideEditor';

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

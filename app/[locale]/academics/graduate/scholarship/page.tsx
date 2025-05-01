import { getScholarshipList } from '@/apis/v2/academics/[studentType]/scholarship';
import ScholarshipPreview from '@/app/[locale]/academics/components/scholarship/ScholarshipPreview';
import { graduateScholarship } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: graduateScholarship });
}

export default async function GraduateScholarshipListPage() {
  const data = await getScholarshipList('graduate');

  return (
    <ScholarshipPreview
      description={data.description}
      scholarshipList={data.scholarships}
      type="graduate"
    />
  );
}

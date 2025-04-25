import { postScholarshipAction } from '@/actions/academics';
import ScholarshipEditor, {
  ScholarshipFormData,
} from '@/app/[locale]/academics/components/scholarship/ScholarshipEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(undergraduateScholarship);

export default function UndergraduateScholarshipCreatePage() {
  const onSubmit = async (content: ScholarshipFormData) => {
    'use server';
    await postScholarshipAction('undergraduate', content);
  };

  return (
    <PageLayout title="학부 장학금 추가" titleType="big">
      <ScholarshipEditor cancelPath={path} onSubmitAction={onSubmit} />
    </PageLayout>
  );
}

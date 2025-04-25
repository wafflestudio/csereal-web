import { postScholarshipAction } from '@/actions/academics';
import ScholarshipEditor, {
  ScholarshipFormData,
} from '@/app/[locale]/academics/components/scholarship/ScholarshipEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(graduateScholarship);

export default function GraduateScholarshipCreatePage() {
  const onSubmit = async (content: ScholarshipFormData) => {
    'use server';
    await postScholarshipAction('graduate', content);
  };

  return (
    <PageLayout title="대학원 장학금 추가" titleType="big">
      <ScholarshipEditor cancelPath={path} onSubmitAction={onSubmit} />
    </PageLayout>
  );
}

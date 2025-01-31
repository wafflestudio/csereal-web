import { revalidateTag } from 'next/cache';

import { postScholarship } from '@/apis/v2/academics/[studentType]/scholarship';
import ScholarshipEditor, {
  ScholarshipFormData,
} from '@/app/[locale]/academics/components/scholarship/ScholarshipEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_SCHOLARSHIP } from '@/constants/network';
import { graduateScholarship } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';

const path = getPath(graduateScholarship);

export default function GraduateScholarshipCreatePage() {
  const onSubmit = async (content: ScholarshipFormData) => {
    'use server';
    await postScholarship('graduate', content);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirectKo(path);
  };

  return (
    <PageLayout title="대학원 장학금 추가" titleType="big">
      <ScholarshipEditor cancelPath={path} onSubmit={onSubmit} />
    </PageLayout>
  );
}

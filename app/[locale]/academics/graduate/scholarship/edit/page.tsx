import { revalidateTag } from 'next/cache';

import { getScholarshipList } from '@/apis/v1/academics/scholarship';
import { putScholarshipGuide } from '@/apis/v2/academics/[type]/scholarship';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_SCHOLARSHIP } from '@/constants/network';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { graduateScholarship } from '@/utils/segmentNode';
import { successToast } from '@/utils/toast';

import ScholarshipGuideEditor, {
  ScholarshipGuideFormData,
} from '../../../components/scholarship/ScholarshipGuideEditor';

const path = getPath(graduateScholarship);

export default async function UndergraduateScholarshipListEditPage() {
  const { description } = await getScholarshipList('graduate');

  const onSubmit = async ({ description }: ScholarshipGuideFormData) => {
    'use server';
    await putScholarshipGuide('graduate', description);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirectKo(path);
    successToast('장학 제도 안내를 수정했습니다.');
  };

  return (
    <PageLayout title="대학원 장학 제도 안내 편집" titleType="big">
      <ScholarshipGuideEditor description={description} onSubmit={onSubmit} cancelPath={path} />
    </PageLayout>
  );
}

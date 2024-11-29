'use client';

import { postCareerStatAction } from '@/actions/about';
import CareerStatEditor, { CareerStatEditorContent } from '@/components/editor/CareerStatEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { futureCareers } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const careerPath = getPath(futureCareers);

export default function CareerStatCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(careerPath);

  const handleSubmit = async (content: CareerStatEditorContent) => {
    try {
      handleServerAction(await postCareerStatAction(content));
      successToast('졸업생 진로 현황을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="졸업생 진로 현황 추가" titleType="big" hideNavbar>
      <CareerStatEditor
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
      />
    </PageLayout>
  );
}

'use client';

import { putCareerStatAction } from '@/actions/about';
import CareerStatEditor, { CareerStatEditorContent } from '@/components/editor/CareerStatEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { FutureCareers } from '@/types/about';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { futureCareers } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const careerPath = getPath(futureCareers);

export default function CareerStatEditPageContent({
  data,
}: {
  data: FutureCareers['stat'][number];
}) {
  const router = useRouter();

  const handleCancel = () => router.push(careerPath);

  const handleSubmit = async (content: CareerStatEditorContent) => {
    try {
      handleServerAction(await putCareerStatAction(content));
      successToast('졸업생 진로 현황을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title={`${data.year}년 졸업생 진로 현황 편집`} titleType="big" hideNavbar>
      <CareerStatEditor
        initialContent={data}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
      />
    </PageLayout>
  );
}

'use client';

import { putCurriculumAction } from '@/actions/academics';
import { useRouter } from '@/navigation';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

import TimelineEditor from './TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function CurriculumCreatePage() {
  const router = useRouter();

  const goToOriginalPage = () => router.replace(curriculumPath);

  const handleComplete = async (content: { year: number; description: string }) => {
    if (!content.description) {
      throw new Error('내용을 입력해주세요');
    }

    try {
      handleServerAction(await putCurriculumAction(content));
      goToOriginalPage();
    } catch (e) {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout titleType="big">
      <TimelineEditor onComplete={handleComplete} onCancel={goToOriginalPage} />
    </PageLayout>
  );
}

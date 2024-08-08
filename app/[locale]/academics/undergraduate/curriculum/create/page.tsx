'use client';

import { postCurriculumAction } from '@/actions/academics';
import { useRouter } from '@/navigation';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Curriculum } from '@/types/academics';

import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

import TimelineEditor from './TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function CurriculumCreatePage() {
  const router = useRouter();

  const goToOriginalPage = () => router.replace(curriculumPath);

  const handleComplete = async (content: Curriculum) => {
    if (!content.description) {
      throw new Error('내용을 입력해주세요');
    }

    try {
      handleServerAction(await postCurriculumAction(content));
      goToOriginalPage();
    } catch (e) {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout title="전공 이수 표준 형태 추가" titleType="big">
      <TimelineEditor onComplete={handleComplete} onCancel={goToOriginalPage} />
    </PageLayout>
  );
}

'use client';

import { postScholarshipAction } from '@/actions/academics';
import { useRouter } from '@/navigation';

import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { StudentType } from '@/types/academics';

import { getPath } from '@/utils/page';
import { graduateScholarship, undergraduateScholarship } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const undergraduate = getPath(undergraduateScholarship);
const graduate = getPath(graduateScholarship);

export default function ScholarshipCreatePage({ type }: { type: StudentType }) {
  const router = useRouter();

  const handleCancel = () => router.replace(type === 'undergraduate' ? undergraduate : graduate);

  const handleComplete = async (content: BasicEditorContent) => {
    if (!content.name.ko) {
      throw new Error('제목을 입력해주세요');
    } else if (!content.description.ko) {
      throw new Error('내용을 입력해주세요');
    }

    // TODO: 영어 데이터
    try {
      handleServerAction(
        await postScholarshipAction(type, {
          name: content.name.ko,
          description: content.description.ko,
        }),
      );
    } catch (e) {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout
      title={`${type === 'undergraduate' ? '학부' : '대학원'} 장학금 추가`}
      titleType="big"
    >
      <BasicEditor
        actions={{ type: 'EDIT', onCancel: handleCancel, onComplete: handleComplete }}
        showName
      />
    </PageLayout>
  );
}

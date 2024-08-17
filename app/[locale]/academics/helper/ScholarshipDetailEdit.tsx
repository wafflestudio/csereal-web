'use client';

import { putScholarshipAction } from '@/actions/academics';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Scholarship, StudentType } from '@/types/academics';
import { getPath } from '@/utils/page';
import { academics } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const academicsPath = getPath(academics);

export default function ScholarshipDetailEdit({
  type,
  scholarship,
}: {
  type: StudentType;
  scholarship: Scholarship;
}) {
  const router = useRouter();

  const handleCancel = () => router.replace(`${academicsPath}/${type}/scholarship`);

  // TODO: 아직 백엔드 장학 PUT api 안 나옴
  const handleSubmit = async (content: BasicEditorContent) => {
    if (!content.name.ko) {
      throw new Error('제목을 입력해주세요');
    } else if (!content.description.ko) {
      throw new Error('내용을 입력해주세요');
    }

    // TODO: 영어 데이터
    try {
      handleServerAction(
        await putScholarshipAction(type, scholarship.id, {
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
      title={`${type === 'undergraduate' ? '학부' : '대학원'} 장학 제도 안내 편집`}
      titleType="big"
    >
      <BasicEditor
        initialContent={{
          name: { ko: scholarship.name, en: scholarship.name },
          description: { ko: scholarship.description, en: scholarship.description },
        }}
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onSubmit: handleSubmit,
        }}
        showName
      />
    </PageLayout>
  );
}

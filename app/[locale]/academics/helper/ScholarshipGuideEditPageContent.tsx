'use client';

import { putScholarshipGuideAction } from '@/actions/academics';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { StudentType } from '@/types/academics';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { academics } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const academicsPath = getPath(academics);

export default function ScholarshipGuideEditPageContent({
  description,
  type,
}: {
  description: string;
  type: StudentType;
}) {
  const router = useRouter();

  const handleCancel = () => router.replace(`${academicsPath}/${type}/scholarship`);

  const handleSubmit = async (content: BasicEditorContent) => {
    if (!content.description.ko) {
      throw new Error('내용을 입력해주세요');
    }

    try {
      handleServerAction(await putScholarshipGuideAction(type, content.description.ko));
      successToast('장학 제도 안내를 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout
      title={`${type === 'undergraduate' ? '학부' : '대학원'} 장학 제도 안내 편집`}
      titleType="big"
    >
      <BasicEditor
        initialContent={{
          description: { ko: description, en: description },
        }}
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onSubmit: handleSubmit,
        }}
      />
    </PageLayout>
  );
}

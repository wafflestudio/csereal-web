'use client';

import { putGuideAction } from '@/actions/academics';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Guide, StudentType } from '@/types/academics';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { academics } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const academicsPath = getPath(academics);

export default function GuideEditPageContent({ data, type }: { data: Guide; type: StudentType }) {
  const router = useRouter();

  const goToGuidePage = () => router.push(`${academicsPath}/${type}/guide`);

  const handleSubmit = async (content: BasicEditorContent) => {
    if (!content.description.ko) {
      throw new Error('내용을 입력해주세요');
    }

    const formData = contentToFormData('EDIT', {
      requestObject: {
        description: content.description.ko,
        deleteIds: getAttachmentDeleteIds(
          content.attachments,
          data.attachments.map((x) => x.id),
        ),
      },
      attachments: content.attachments,
    });

    try {
      handleServerAction(await putGuideAction(type, formData));
      goToGuidePage();
    } catch (e) {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout title={`${type === 'undergraduate' ? '학부' : '대학원'} 안내 편집`} titleType="big">
      <BasicEditor
        initialContent={{
          description: { ko: data.description, en: data.description },
          attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
        }}
        actions={{
          type: 'EDIT',
          onCancel: goToGuidePage,
          onSubmit: handleSubmit,
        }}
        showAttachments
      />
    </PageLayout>
  );
}

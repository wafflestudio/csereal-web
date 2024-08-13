'use client';

import { putDegreeRequirementsAction } from '@/actions/academics';
import { useRouter } from '@/navigation';

import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { DegreeRequirements } from '@/types/academics';

import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { degree } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const degreeRequirementsPath = getPath(degree);

export default function DegreeRequirementsEditPageContent({ data }: { data: DegreeRequirements }) {
  const router = useRouter();

  const goToOriginalPage = () => router.push(degreeRequirementsPath);

  const handleComplete = async (content: BasicEditorContent) => {
    if (!content.description.ko) {
      throw new Error('내용을 입력해주세요');
    }

    const formData = contentToFormData({
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
      handleServerAction(await putDegreeRequirementsAction(formData));
      goToOriginalPage();
    } catch (e) {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout titleType="big">
      <BasicEditor
        initialContent={{
          description: { ko: data.description, en: data.description },
          attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
        }}
        actions={{
          type: 'EDIT',
          onCancel: goToOriginalPage,
          onSubmit: handleComplete,
        }}
        showAttachments
      />
    </PageLayout>
  );
}

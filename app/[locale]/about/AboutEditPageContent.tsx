'use client';

import { putContactAction, puthistoryAction } from '@/actions/about';
import { Attachment } from '@/components/common/Attachments';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { AboutContent } from '@/types/about';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { validateBasicForm } from '@/utils/formValidation';
import { SegmentNode } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

type PostType = 'overview' | 'greetings' | 'history' | 'contact';

interface AboutEditPageContentProps {
  data: WithLanguage<AboutContent>;
  fallbackPath: string;
  type: PostType;
  segNode: SegmentNode;
}

export default function AboutEditPageContent({
  data,
  fallbackPath,
  type,
  segNode,
}: AboutEditPageContentProps) {
  const router = useRouter();

  const handleCancel = () => router.push(fallbackPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);

    const formData = contentToFormData(
      'EDIT',
      {
        requestObject: getRequestObject(
          content,
          data.ko.imageURL !== null && content.mainImage === null,
          data.ko.attachments,
        ),
        image: content.mainImage,
        attachments: content.attachments,
      },
      true,
    );

    try {
      const submitAction = getSubmitAction(type);
      handleServerAction(await submitAction(formData));
      successToast(`${segNode.name}을(를) 수정했습니다.`);
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title={`${segNode.name} 편집`} titleType="big" hideNavbar>
      <BasicEditor
        initialContent={{
          description: { ko: data.ko.description, en: data.en.description },
          mainImage: data.ko.imageURL ? { type: 'UPLOADED_IMAGE', url: data.ko.imageURL } : null,
        }}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showLanguage
        showMainImage
        showAttachments
      />
    </PageLayout>
  );
}

const getRequestObject = (
  newContent: BasicEditorContent,
  removeImage: boolean,
  prevAttachments: Attachment[],
) => {
  const deleteIds = getAttachmentDeleteIds(
    newContent.attachments,
    prevAttachments.map((x) => x.id),
  );

  return {
    ko: { description: newContent.description.ko, deleteIds },
    en: { description: newContent.description.en, deleteIds },
    removeImage,
  };
};

const getSubmitAction = (type: PostType) => {
  switch (type) {
    case 'overview':
      return putContactAction;
    case 'greetings':
      return putContactAction;
    case 'history':
      return puthistoryAction;
    case 'contact':
      return putContactAction;
  }
};

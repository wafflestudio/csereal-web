'use client';

import {
  putContactAction,
  putGreetingsAction,
  putHistoryAction,
  putOverviewAction,
} from '@/actions/about';
import { Attachment } from '@/components/common/Attachments';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { AboutContent } from '@/types/about';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { contact, greetings, history, overview, SegmentNode } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface AboutEditPageContentProps {
  data: WithLanguage<AboutContent>;
  node: SegmentNode;
  showAttachments?: boolean;
}

export default function AboutEditPageContent({
  data,
  node,
  showAttachments = false,
}: AboutEditPageContentProps) {
  const router = useRouter();

  const handleCancel = () => router.push(getPath(node));

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);

    const formData = contentToFormData('EDIT', {
      requestObject: getRequestObject(
        content,
        data.ko.imageURL !== null && content.mainImage === null,
        { ko: data.ko.attachments, en: data.en.attachments },
      ),
      image: content.mainImage,
      attachments: content.attachments,
    });

    try {
      const submitAction = ABOUT_SUBMIT_ACTION[node.segment];
      handleServerAction(await submitAction(formData));
      successToast(`${node.name}을(를) 수정했습니다.`);
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title={`${node.name} 편집`} titleType="big" hideNavbar>
      <BasicEditor
        initialContent={{
          description: { ko: data.ko.description, en: data.en.description },
          mainImage: data.ko.imageURL ? { type: 'UPLOADED_IMAGE', url: data.ko.imageURL } : null,
          attachments: data.ko.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
        }}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showLanguage
        showMainImage
        showAttachments={showAttachments}
      />
    </PageLayout>
  );
}

const getRequestObject = (
  newContent: BasicEditorContent,
  removeImage: boolean,
  prevAttachments: WithLanguage<Attachment[]>,
) => {
  const koDeleteIds = getAttachmentDeleteIds(
    newContent.attachments,
    prevAttachments.ko.map((x) => x.id),
  );
  const enDeleteIds = getAttachmentDeleteIds(
    newContent.attachments,
    prevAttachments.en.map((x) => x.id),
  );

  return {
    ko: { description: newContent.description.ko, deleteIds: koDeleteIds },
    en: { description: newContent.description.en, deleteIds: enDeleteIds },
    removeImage,
  };
};

const ABOUT_SUBMIT_ACTION = {
  [overview.segment]: putOverviewAction,
  [greetings.segment]: putGreetingsAction,
  [history.segment]: putHistoryAction,
  [contact.segment]: putContactAction,
};

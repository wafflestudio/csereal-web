'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { deleteNoticeAction, patchNoticeAction } from '@/actions/notice';
import PostEditor from '@/components/editor/PostEditor';
import {
  isLocalFile,
  isUploadedFile,
  PostEditorContent,
} from '@/components/editor/PostEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { NOTICE_TAGS } from '@/constants/tag';
import { Notice } from '@/types/notice';
import { validateNoticeForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';
import { encodeFormDataFileName } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

const noticePath = getPath(notice);

export default function EditNoticePageContent({ id, data }: { id: number; data: Notice }) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const initialContent: PostEditorContent = {
    title: data.title,
    titleForMain: data.titleForMain ?? '',
    description: data.description,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),

    tags: data.tags,
    isPrivate: data.isPrivate,
    isImportant: data.isImportant,
    isPinned: data.isPinned,

    mainImage: null,
    isSlide: false,

    date: new Date().toISOString(),
  };

  const handleCancel = () => router.push(`${noticePath}/${id}`);

  const handleComplete = async (content: PostEditorContent) => {
    validateNoticeForm(content);
    const formData = contentToFormData(data, content);
    await patchNoticeAction(id, formData);
  };

  const handleDelete = async () => {
    startTransition(async () => {
      const result = await deleteNoticeAction(id);
      result ? errorToast(result.message) : successToast('게시글을 삭제했습니다.');
    });
  };

  return (
    <PageLayout title="공지사항 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <PostEditor
        tags={NOTICE_TAGS}
        showIsPinned
        showIsImportant
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onComplete: handleComplete,
          onDelete: handleDelete,
        }}
        initialContent={initialContent}
      />
    </PageLayout>
  );
}

const contentToFormData = (prevNotice: Notice, content: PostEditorContent) => {
  const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
  const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

  const deleteIds = prevNotice.attachments
    .map((x) => x.id)
    .filter((id1) => uploadedAttachments.find((x) => x.id === id1) === undefined);

  const formData = new FormData();

  formData.append(
    'request',
    new Blob(
      [
        JSON.stringify({
          title: content.title,
          titleForMain: content.titleForMain ? content.titleForMain : null,
          description: content.description,
          isPrivate: content.isPrivate,
          isPinned: content.isPinned,
          isImportant: content.isImportant,
          tags: content.tags,
          deleteIds,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  encodeFormDataFileName(formData, 'newAttachments', localAttachments);

  return formData;
};

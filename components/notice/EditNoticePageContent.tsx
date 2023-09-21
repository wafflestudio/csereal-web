'use client';

import { useRouter } from 'next/navigation';

import { deleteNotice, patchNotice } from '@/apis/notice';

import PostEditor from '@/components/editor/PostEditor';
import {
  PostEditorContent,
  isLocalFile,
  isUploadedFile,
} from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NoticeTags } from '@/constants/tag';

import { Notice } from '@/types/notice';
import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

const noticePath = getPath(notice);

export default function EditNoticePageContent({ id, data }: { id: number; data: Notice }) {
  const router = useRouter();

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

  const handleCancel = () => {
    router.push(`${noticePath}/${id}`);
  };

  const handleComplete = async (content: PostEditorContent) => {
    throwIfCantSubmit(content);

    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

    const deleteIds = data.attachments
      .map((x) => x.id)
      .filter((id1) => uploadedAttachments.find((x) => x.id === id1) === undefined);

    await patchNotice(id, {
      request: {
        title: content.title,
        titleForMain: content.titleForMain ? content.titleForMain : null,
        description: content.description,
        isPrivate: content.isPrivate,
        isPinned: content.isPinned,
        isImportant: content.isImportant,
        tags: content.tags,
        deleteIds,
      },
      newAttachments: localAttachments,
    });

    router.replace(`${noticePath}/${id}`);
  };

  const handleDelete = async () => {
    await deleteNotice(id);
    router.replace(noticePath);
  };

  return (
    <PageLayout title="공지사항 편집" titleType="big" titleMargin="mb-[2.25rem]">
      <PostEditor
        tags={NoticeTags}
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

const throwIfCantSubmit = (content: PostEditorContent) => {
  if (content.title === '') {
    throw new Error('제목을 입력해주세요');
  }
  if (content.description === '') {
    throw new Error('내용을 입력해주세요');
  }
};

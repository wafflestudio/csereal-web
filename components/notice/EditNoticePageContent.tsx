'use client';

import { useRouter } from 'next/navigation';

import { deleteNotice, patchNotice } from '@/apis/notice';

import PostEditor from '@/components/editor/PostEditor';
import {
  PostEditorContent,
  isLocalFile,
  isUploadedFile,
  postEditorDefaultValue,
} from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NoticeTags } from '@/constants/tag';

import { notice } from '@/types/page';
import { NoticePostResponse } from '@/types/post';

import { getPath } from '@/utils/page';

const noticePath = getPath(notice);

export default function EditNoticePageContent({
  id,
  data,
}: {
  id: number;
  data: NoticePostResponse;
}) {
  const router = useRouter();

  const initialContent: PostEditorContent = {
    ...postEditorDefaultValue,

    title: data.title,
    description: data.description,
    isPublic: data.isPublic,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),

    tags: data.tags,
    isImportant: data.isImportant,
  };

  const handleComplete = async (content: PostEditorContent) => {
    throwIfCantSubmit(content);

    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

    await patchNotice(id, {
      request: {
        title: content.title,
        description: content.description,
        isPublic: content.isPublic,
        isSlide: content.isSlide,
        isPinned: content.isPinned,
        isImportant: content.isImportant,
        tags: content.tags,
        attachments: uploadedAttachments,
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
        showMainImage
        showIsSlide
        actions={{
          type: 'EDIT',
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

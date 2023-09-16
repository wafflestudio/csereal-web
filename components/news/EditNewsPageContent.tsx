'use client';

import { useRouter } from 'next/navigation';

import { deleteNews, patchNews } from '@/apis/news';

import PostEditor from '@/components/editor/PostEditor';
import {
  PostEditorContent,
  isLocalFile,
  isLocalImage,
  isUploadedFile,
  postEditorDefaultValue,
} from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

import { News } from '@/types/news';
import { news } from '@/types/page';

import { getPath } from '@/utils/page';

const newsPath = getPath(news);

export default function EditNewsPageContent({ id, data }: { id: number; data: News }) {
  const router = useRouter();

  const initialContent: PostEditorContent = {
    ...postEditorDefaultValue,

    title: data.title,
    description: data.description,
    isPublic: data.isPublic,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),

    tags: data.tags,
    mainImage: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    isSlide: data.isSlide,
    isImportant: data.isImportant,
  };

  const handleComplete = async (content: PostEditorContent) => {
    throwIfCantSubmit(content);

    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

    const mainImage =
      content.mainImage && isLocalImage(content.mainImage) ? content.mainImage.file : null;

    await patchNews(id, {
      request: {
        title: content.title,
        titleForMain: content.titleForMain ? content.titleForMain : null,
        description: content.description,
        isPublic: content.isPublic,
        isSlide: content.isSlide,
        isImportant: content.isImportant,
        tags: content.tags,
        attachments: uploadedAttachments,
      },
      mainImage,
      newAttachments: localAttachments,
    });

    router.replace(`${newsPath}/${id}`);
  };

  const handleDelete = async () => {
    await deleteNews(id);
    router.replace(newsPath);
  };

  return (
    <PageLayout title="새 소식 편집" titleType="big" titleMargin="mb-[2.25rem]">
      <PostEditor
        tags={NewsTags}
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

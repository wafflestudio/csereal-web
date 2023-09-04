'use client';

import { useRouter } from 'next/navigation';

import { patchNews } from '@/apis/news';

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

import { news } from '@/types/page';
import { NewsPostResponse } from '@/types/post';

import { getPath } from '@/utils/page';

const newsPath = getPath(news);

export default function EditNewsPageContent({ id, data }: { id: number; data: NewsPostResponse }) {
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
    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

    const mainImage =
      content.mainImage && isLocalImage(content.mainImage) ? content.mainImage.file : null;

    await patchNews(id, {
      request: {
        title: content.title,
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

  const handleDelete = async () => {};

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

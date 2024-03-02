'use client';

import { useRouter } from 'next/navigation';

import { newsDeleteAction, revalidateNewsTag } from '@/actions/newsActions';

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

import { NEWS_TAGS } from '@/constants/tag';

import { News } from '@/types/news';

import { validateNewsForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

const newsPath = getPath(news);

export default function EditNewsPageContent({ id, data }: { id: number; data: News }) {
  const router = useRouter();

  const initialContent: PostEditorContent = {
    ...postEditorDefaultValue,

    title: data.title,
    titleForMain: data.titleForMain ?? '',
    description: data.description,
    isPrivate: data.isPrivate,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),

    tags: data.tags,
    mainImage: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    isSlide: data.isSlide,
    isImportant: data.isImportant,
  };

  const handleCancel = () => router.push(`${newsPath}/${id}`);

  const handleComplete = async (content: PostEditorContent) => {
    validateNewsForm(content);

    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

    const mainImage =
      content.mainImage && isLocalImage(content.mainImage) ? content.mainImage.file : null;

    const deleteIds = data.attachments
      .map((x) => x.id)
      .filter((id1) => uploadedAttachments.find((x) => x.id === id1) === undefined);

    await patchNews(id, {
      request: {
        title: content.title,
        titleForMain: content.titleForMain ? content.titleForMain : null,
        description: content.description,
        isPrivate: content.isPrivate,
        isSlide: content.isSlide,
        isImportant: content.isImportant,
        tags: content.tags,
        deleteIds,
        date: content.date,
      },
      mainImage,
      newAttachments: localAttachments,
    });

    revalidateNewsTag();
    router.replace(`${newsPath}/${id}`);
  };

  const handleDelete = async () => {
    await newsDeleteAction(id);
    router.replace(newsPath);
  };

  return (
    <PageLayout title="새 소식 편집" titleType="big" titleMargin="mb-[2.25rem]">
      <PostEditor
        tags={NEWS_TAGS}
        showMainImage
        showIsSlide
        showIsImportant
        showDate
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

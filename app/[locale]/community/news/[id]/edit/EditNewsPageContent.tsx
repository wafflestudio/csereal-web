'use client';

import { useRouter } from 'next/navigation';

import { deleteNewsAction, patchNewsAction } from '@/actions/news';

import PostEditor from '@/components/editor/PostEditor';
import {
  PostEditorContent,
  isLocalFile,
  isLocalImage,
  isUploadedFile,
  defaultContent,
} from '@/components/editor/PostEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NEWS_TAGS } from '@/constants/tag';

import { News } from '@/types/news';

import { validateNewsForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';
import { encodeFormDataFileName } from '@/utils/string';

const newsPath = getPath(news);

export default function EditNewsPageContent({ id, data }: { id: number; data: News }) {
  const router = useRouter();

  const initialContent: PostEditorContent = {
    ...defaultContent,

    title: data.title,
    titleForMain: data.titleForMain ?? '',
    description: data.description,
    isPrivate: data.isPrivate,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),

    tags: data.tags,
    mainImage: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    isSlide: data.isSlide,
    isImportant: data.isImportant,
    date: data.date,
  };

  const handleCancel = () => router.push(`${newsPath}/${id}`);

  const handleComplete = async (content: PostEditorContent) => {
    validateNewsForm(content);
    const formData = contentToFormData(data, content);
    await patchNewsAction(id, formData);
  };

  const handleDelete = async () => {
    await deleteNewsAction(id);
    router.replace(newsPath);
  };

  return (
    <PageLayout title="새 소식 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
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

const contentToFormData = (prevNews: News, content: PostEditorContent) => {
  const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
  const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

  const mainImage =
    content.mainImage && isLocalImage(content.mainImage) ? content.mainImage.file : null;

  const deleteIds = prevNews.attachments
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
          isSlide: content.isSlide,
          isImportant: content.isImportant,
          tags: content.tags,
          deleteIds,
          date: content.date,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  // TOOD: 이미지 이름 깨지는지 확인
  if (mainImage) {
    formData.append('newMainImage', mainImage);
  }

  encodeFormDataFileName(formData, 'newAttachments', localAttachments);

  return formData;
};

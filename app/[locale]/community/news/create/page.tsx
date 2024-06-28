'use client';

import { postNewsAction } from '@/actions/news';
import { useRouter } from '@/navigation';

import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent, isLocalFile, isLocalImage } from '@/components/editor/PostEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { news } from '@/constants/navTreeNode';
import { NEWS_TAGS } from '@/constants/tag';

import { validateNewsForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { encodeFormDataFileName } from '@/utils/string';

const newsPath = getPath(news);

export default function NewsCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(newsPath);

  const handleComplete = async (content: PostEditorContent) => {
    validateNewsForm(content);
    const formData = contentToFormData(content);
    await postNewsAction(formData);
  };

  return (
    <PageLayout title="새 소식 작성" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <PostEditor
        tags={NEWS_TAGS}
        showMainImage
        showIsSlide
        showIsImportant
        showDate
        actions={{
          type: 'CREATE',
          onCancel: handleCancel,
          onComplete: handleComplete,
        }}
      />
    </PageLayout>
  );
}

const contentToFormData = (content: PostEditorContent) => {
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
          date: content.date,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  if (content.mainImage && isLocalImage(content.mainImage)) {
    formData.append('mainImage', content.mainImage.file);
  }

  encodeFormDataFileName(
    formData,
    'attachments',
    content.attachments.filter(isLocalFile).map((x) => x.file),
  );

  return formData;
};

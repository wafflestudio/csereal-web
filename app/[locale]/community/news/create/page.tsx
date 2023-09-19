'use client';

import { useRouter } from 'next/navigation';

import { postNews } from '@/apis/news';

import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent, isLocalFile, isLocalImage } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

const newsPath = getPath(news);

export default function NewsCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(newsPath);

  const handleComplete = async (content: PostEditorContent) => {
    throwIfCantSubmit(content);

    const mainImage =
      content.mainImage && isLocalImage(content.mainImage) ? content.mainImage.file : null;

    const attachments = content.attachments.filter(isLocalFile).map((x) => x.file);
    await postNews({
      request: {
        title: content.title,
        titleForMain: content.titleForMain ? content.titleForMain : null,
        description: content.description,
        isPrivate: content.isPrivate,
        isSlide: content.isSlide,
        isImportant: content.isImportant,
        tags: content.tags,
        date: content.date,
      },
      mainImage,
      attachments,
    });

    router.replace(newsPath);
  };

  return (
    <PageLayout title="새 소식 쓰기" titleType="big" titleMargin="mb-[2.25rem]">
      <PostEditor
        tags={NewsTags}
        showMainImage
        showIsSlide
        showIsImportant
        actions={{
          type: 'CREATE',
          onCancel: handleCancel,
          onComplete: handleComplete,
        }}
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

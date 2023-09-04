'use client';

import { useRouter } from 'next/navigation';

import { postNews } from '@/apis/news';

import { infoToast } from '@/components/common/toast';
import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

const newsPath = getPath(news);

export default function NewsCreatePage() {
  const router = useRouter();

  const handleComplete = async (content: PostEditorContent) => {
    // if (content.title === '') {
    //   infoToast('제목을 입력해주세요');
    //   return;
    // }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('알림');
    router.replace(newsPath);

    // await postNews({
    //   request: {
    //     title: content.title,
    //     description: content.description,
    //     isPublic: content.isPublic,
    //     isSlide: content.isSlide,
    //     isImportant: content.isImportant,
    //     tags: content.tags,
    //   },
    //   mainImage: content.mainImage,
    //   attachments: content.attachments,
    // });
  };

  return (
    <PageLayout title="새 소식 쓰기" titleType="big" titleMargin="mb-[2.25rem]">
      <PostEditor
        tags={NewsTags}
        showMainImage
        showIsSlide
        actions={{
          type: 'CREATE',
          onComplete: handleComplete,
        }}
      />
    </PageLayout>
  );
}

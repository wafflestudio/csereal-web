'use client';

import { postNews } from '@/apis/news';

import { infoToast } from '@/components/common/toast';
import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

export default function NewsCreatePage() {
  const handleComplete = async (content: PostEditorContent) => {
      console.log(content.description);
    if (content.title === '') {
      infoToast('제목을 입력해주세요');
      return;
    }


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

'use client';

import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NoticeTags } from '@/constants/tag';

export default function NoticeCreatePage() {
  const handleComplete = async (content: PostEditorContent) => {
    console.log(content.description);
    // throw new Error();
  };

  return (
    <PageLayout title="공지사항 쓰기" titleType="big" titleMargin="mb-[2.25rem]">
      <PostEditor
        tags={NoticeTags}
        showMainImage
        showIsPinned
        showIsImportant
        showIsSlide
        actions={{
          type: 'CREATE',
          onComplete: handleComplete,
        }}
      />
    </PageLayout>
  );
}

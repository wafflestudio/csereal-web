'use client';

import { PostEditorContent } from '@/components/editor/EditorProps';
import PostEditor from '@/components/editor/PostEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

export default function NewsCreatePage() {
  const handleComplete = async (content: PostEditorContent) => {
    console.log(content);
    // throw new Error();
  };

  return (
    <PageLayout title="새 소식 쓰기" titleType="small">
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

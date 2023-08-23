'use client';

import PostEditor from '@/components/editor/PostEditor';
import { EditorContent } from '@/components/editor/PostEditorProp';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

export default function NewsCreatePage() {
  const handleComplete = async (content: EditorContent) => {
    console.log(content.description);
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

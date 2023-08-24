'use client';

import { getMockNewsPostDetail } from '@/apis/news';

import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

export default function NewsEditPage() {
  const handleComplete = async (content: PostEditorContent) => {
    console.log(content);
    // throw new Error();
  };

  const initialContent = getMockNewsPostDetail(1);

  const handleDelete = async () => {};

  return (
    <PageLayout title={'새 소식 편집'} titleType="small" titleMargin="mb-6">
      <PostEditor
        tags={NewsTags}
        showMainImage
        showIsSlide
        actions={{
          type: 'EDIT',
          onComplete: handleComplete,
          onDelete: handleDelete,
        }}
        // 첨부파일 관련 확정되면 적용
        // initialContent={initialContent}
      />
    </PageLayout>
  );
}

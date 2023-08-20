'use client';

import { getMockNewsPostDetail } from '@/apis/news';

import PostEditor from '@/components/editor/PostEditor';
import { EditorContent } from '@/components/editor/PostEditorProp';
import SeminarEditor from '@/components/editor/SeminarEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

export default function SeminarCreatePage() {
  const handleComplete = async (content: EditorContent) => {
    console.log(content);
    // throw new Error();
  };

  const initialContent = getMockNewsPostDetail(1);

  const handleDelete = async () => {};

  return (
    <PageLayout title={'세미나 쓰기'} titleType="small">
      <SeminarEditor
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

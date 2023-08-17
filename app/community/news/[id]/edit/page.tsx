'use client';

import { getMockNewsPostDetail } from '@/apis/news';

import PostEditor from '@/components/editor/PostEditor';
import { EditorContent } from '@/components/editor/PostEditorProp';

import { NewsTags } from '@/constants/tag';

export default function NewsEdit() {
  const handleComplete = async (content: EditorContent) => {
    console.log(content);
    // throw new Error();
  };

  const initialContent = getMockNewsPostDetail(1);

  const handleDelete = async () => {};

  return (
    <PostEditor
      title="새 소식 편집"
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
  );
}

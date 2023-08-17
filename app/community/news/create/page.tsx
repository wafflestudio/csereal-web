'use client';

import PostEditor from '@/components/editor/PostEditor';
import { EditorContent } from '@/components/editor/PostEditorProp';

import { NewsTags } from '@/constants/tag';

export default function NewsCreate() {
  const handleComplete = async (content: EditorContent) => {
    console.log(content);
    // throw new Error();
  };

  return (
    <PostEditor
      title="새 소식 쓰기"
      tags={NewsTags}
      showMainImage
      showIsSlide
      actions={{
        type: 'CREATE',
        onComplete: handleComplete,
      }}
    />
  );
}

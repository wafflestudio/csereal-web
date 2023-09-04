'use client';

import { useRouter } from 'next/navigation';

import { postNotice } from '@/apis/notice';

import { infoToast } from '@/components/common/toast';
import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NoticeTags } from '@/constants/tag';

import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

const noticePath = getPath(notice);

export default function NoticeCreatePage() {
  const router = useRouter();

  const handleComplete = async (content: PostEditorContent) => {
    if (content.title === '') {
      throw new Error('제목을 입력해주세요');
    }

    await postNotice({
      request: {
        title: content.title,
        description: content.description,
        isPublic: content.isPublic,
        isSlide: content.isSlide,
        isPinned: content.isPinned,
        isImportant: content.isImportant,
        tags: content.tags,
      },
      attachments: content.attachments,
    });

    router.replace(noticePath);
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

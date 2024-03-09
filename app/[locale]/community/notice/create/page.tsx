'use client';

import { useRouter } from 'next/navigation';

import { revalidateNoticeTag } from '@/actions/noticeActions';

import { postNotice } from '@/apis/notice';

import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent, isLocalFile } from '@/components/editor/PostEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NOTICE_TAGS } from '@/constants/tag';

import { validateNoticeForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

const noticePath = getPath(notice);

export default function NoticeCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(noticePath);

  const handleComplete = async (content: PostEditorContent) => {
    validateNoticeForm(content);

    await postNotice({
      request: {
        title: content.title,
        titleForMain: content.titleForMain ? content.titleForMain : null,
        description: content.description,
        isPrivate: content.isPrivate,
        isPinned: content.isPinned,
        isImportant: content.isImportant,
        tags: content.tags,
      },
      attachments: content.attachments.filter(isLocalFile).map((x) => x.file),
    });

    revalidateNoticeTag();
    router.replace(noticePath);
  };

  return (
    <PageLayout title="공지사항 작성" titleType="big" titleMargin="mb-[2.75rem]">
      <PostEditor
        tags={NOTICE_TAGS}
        showIsPinned
        showIsImportant
        actions={{
          type: 'CREATE',
          onCancel: handleCancel,
          onComplete: handleComplete,
        }}
      />
    </PageLayout>
  );
}

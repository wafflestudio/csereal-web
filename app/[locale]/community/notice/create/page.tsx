'use client';

import { useRouter } from 'next/navigation';

import { revalidateNoticeTag } from '@/actions/noticeActions';

import { postNotice } from '@/apis/notice';

import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent, isLocalFile } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NOTICE_TAGS } from '@/constants/tag';

import { notice } from '@/types/page';

import { validateNoticeForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';

const noticePath = getPath(notice);

export default function NoticeCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(noticePath);

  const handleComplete = async (content: PostEditorContent) => {
    validateNoticeForm(content);

    const attachments = content.attachments.filter(isLocalFile).map((x) => x.file);
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
      attachments,
    });
    revalidateNoticeTag();
    router.replace(noticePath);
  };

  return (
    <PageLayout title="공지사항 쓰기" titleType="big" titleMargin="mb-[2.25rem]">
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

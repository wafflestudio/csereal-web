'use client';

import { postNoticeAction } from '@/actions/notice';
import NoticeEditor, {
  NoticeFormData,
} from '@/app/[locale]/community/notice/components/NoticeEditor';
import { isLocalFile } from '@/components/form/PostEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';
import { encodeFormDataFileName } from '@/utils/string';

const noticePath = getPath(notice);

export default function NoticeCreatePage() {
  const router = useRouter();

  const onCancel = () => router.push(noticePath);

  const onSubmit = async (content: NoticeFormData) => {
    const formData = new FormData();

    formData.append(
      'request',
      new Blob(
        [
          JSON.stringify({
            title: content.title,
            titleForMain: content.titleForMain ? content.titleForMain : null,
            description: content.description,
            isPrivate: content.isPrivate,
            isPinned: content.isPinned,
            isImportant: content.isImportant,
            tags: content.tags,
          }),
        ],
        {
          type: 'application/json',
        },
      ),
    );

    encodeFormDataFileName(
      formData,
      'attachments',
      content.attachments.filter(isLocalFile).map((x) => x.file),
    );

    await postNoticeAction(formData);
  };

  return (
    <PageLayout title="공지사항 작성" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <NoticeEditor onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

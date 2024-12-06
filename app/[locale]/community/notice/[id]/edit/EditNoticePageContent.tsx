'use client';

import { useTransition } from 'react';

import { deleteNoticeAction, patchNoticeAction } from '@/actions/notice';
import NoticeEditor, {
  NoticeFormData,
} from '@/app/[locale]/community/notice/components/NoticeEditor';
import { isLocalFile, isUploadedFile } from '@/components/form/PostEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { Notice } from '@/types/notice';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';
import { encodeFormDataFileName } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

const noticePath = getPath(notice);

export default function EditNoticePageContent({ id, data }: { id: number; data: Notice }) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const defaultValues: NoticeFormData = {
    title: data.title,
    titleForMain: data.titleForMain ?? '',
    description: data.description,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
    tags: data.tags,
    isPrivate: data.isPrivate,
    isImportant: data.isImportant,
    isPinned: data.isPinned,
  };

  const onCancel = () => router.push(`${noticePath}/${id}`);

  const onSubmit = async (content: NoticeFormData) => {
    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

    const deleteIds = data.attachments
      .map((x) => x.id)
      .filter((id1) => uploadedAttachments.find((x) => x.id === id1) === undefined);

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
            deleteIds,
          }),
        ],
        {
          type: 'application/json',
        },
      ),
    );

    encodeFormDataFileName(formData, 'newAttachments', localAttachments);

    await patchNoticeAction(id, formData);
  };

  const onDelete = async () => {
    startTransition(async () => {
      const result = await deleteNoticeAction(id);
      if (result) {
        errorToast(result.message);
      } else {
        successToast('게시글을 삭제했습니다.');
      }
    });
  };

  return (
    <PageLayout title="공지사항 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <NoticeEditor
        onCancel={onCancel}
        onSubmit={onSubmit}
        onDelete={onDelete}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}

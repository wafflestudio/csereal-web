'use client';

import { useRouter } from 'next/navigation';

import { deleteNotice } from '@/apis/notice';
import { editSeminar } from '@/apis/seminar';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { seminar } from '@/types/page';
import { Seminar } from '@/types/seminar';

import { getPath } from '@/utils/page';

import { isLocalFile, isLocalImage, isUploadedFile } from '../editor/PostEditorProps';
import SeminarEditor from '../editor/SeminarEditor';
import { SeminarEditorContent, getSeminarEditorDefaultValue } from '../editor/SeminarEditorProps';

const seminarPath = getPath(seminar);

export default function EditSeminarPageContent({ id, data }: { id: number; data: Seminar }) {
  const router = useRouter();

  const initialContent: SeminarEditorContent = {
    title: data.title,
    titleForMain: data.titleForMain,
    description: data.description ?? '',
    location: data.location,
    schedule: {
      startDate: new Date(data.startDate),
      endDate: data.endDate !== null ? new Date(data.endDate) : null,
    },
    speaker: {
      name: data.name ?? '',
      nameURL: data.speakerURL,
      title: data.title,
      organization: data.affiliation ?? '',
      organizationURL: data.affiliationURL,
      description: data.introduction ?? '',
      image: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    },
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
    isPrivate: data.isPrivate,
    isImportant: data.isImportant,
    host: data.host,
  };

  const handleCancel = () => router.push(`${seminarPath}/${id}`);

  const handleComplete = async (content: SeminarEditorContent) => {
    throwIfCantSubmit(content);

    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);
    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);

    const deleteIds = data.attachments
      .map((x) => x.id)
      .filter((id1) => uploadedAttachments.find((x) => x.id === id1) === undefined);

    const image =
      content.speaker.image && isLocalImage(content.speaker.image)
        ? content.speaker.image.file
        : null;

    await editSeminar(id, {
      request: {
        title: content.title,
        titleForMain: content.titleForMain,
        description: emptyStringToNull(content.description),
        introduction: emptyStringToNull(content.speaker.description),
        name: emptyStringToNull(content.speaker.name),
        speakerURL: emptyStringToNull(content.speaker.nameURL),
        speakerTitle: emptyStringToNull(content.speaker.title),
        affiliation: emptyStringToNull(content.speaker.organization),
        affiliationURL: emptyStringToNull(content.speaker.organizationURL),
        startDate: content.schedule.startDate.toISOString(),
        endDate: content.schedule.endDate?.toISOString() ?? null,
        location: content.location,
        host: emptyStringToNull(content.host),
        isPrivate: content.isPrivate,
        isImportant: content.isImportant,

        deleteIds,
      },
      image,
      newAttachments: localAttachments,
    });

    router.replace(`${seminarPath}/${id}`);
  };

  const handleDelete = async () => {
    await deleteNotice(id);
    router.replace(seminarPath);
  };

  return (
    <PageLayout title="세미나 편집" titleType="big" titleMargin="mb-[2.25rem]">
      <SeminarEditor
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onComplete: handleComplete,
          onDelete: handleDelete,
        }}
        initialContent={initialContent}
      />
    </PageLayout>
  );
}

const throwIfCantSubmit = (content: SeminarEditorContent) => {
  if (content.title === '') {
    throw new Error('제목을 입력해주세요');
  }
  if (content.description === '') {
    throw new Error('내용을 입력해주세요');
  }
};

const emptyStringToNull = (str: string | null) => (str ? str : null);

'use client';

import { useRouter } from 'next/navigation';

import { deleteSeminarAction, patchSeminarAction } from '@/actions/seminar';

import { isLocalFile, isUploadedFile, isLocalImage } from '@/components/editor/PostEditorTypes';
import SeminarEditor from '@/components/editor/SeminarEditor';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Seminar } from '@/types/seminar';

import { validateSeminarForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';
import { errorToast } from '@/utils/toast';

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
    validateSeminarForm(content);
    const formData = contentToFormData(data, content);
    patchSeminarAction(id, formData);
  };

  const handleDelete = async () => {
    const result = await deleteSeminarAction(id);
    if (result) errorToast(result.message);
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

const emptyStringToNull = (str: string | null) => (str ? str : null);

const contentToFormData = (prevSeminar: Seminar, content: SeminarEditorContent) => {
  const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);
  const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);

  const deleteIds = prevSeminar.attachments
    .map((x) => x.id)
    .filter((id1) => uploadedAttachments.find((x) => x.id === id1) === undefined);

  const image =
    content.speaker.image && isLocalImage(content.speaker.image)
      ? content.speaker.image.file
      : null;

  const formData = new FormData();

  formData.append(
    'request',
    new Blob(
      [
        JSON.stringify({
          title: content.title,
          titleForMain: emptyStringToNull(content.titleForMain),
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
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  if (image) {
    formData.append('newMainImage', image);
  }

  for (const attachment of localAttachments) {
    formData.append('newAttachments', attachment);
  }

  return formData;
};

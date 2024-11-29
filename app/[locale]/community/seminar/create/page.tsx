'use client';

import { postSeminarAction } from '@/actions/seminar';
import { isLocalFile, isLocalImage } from '@/components/editor/PostEditorTypes';
import SeminarEditor from '@/components/editor/SeminarEditor';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { validateSeminarForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';
import { encodeFormDataFileName } from '@/utils/string';

const seminarPath = getPath(seminar);

export default function SeminarCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(seminarPath);

  const handleComplete = async (content: SeminarEditorContent) => {
    validateSeminarForm(content);
    const formData = contentToFormData(content);
    postSeminarAction(formData);
  };

  return (
    <PageLayout title="세미나 작성" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <SeminarEditor
        actions={{
          type: 'CREATE',
          onCancel: handleCancel,
          onSubmit: handleComplete,
        }}
      />
    </PageLayout>
  );
}

const contentToFormData = (content: SeminarEditorContent) => {
  const image =
    content.speaker.image && isLocalImage(content.speaker.image)
      ? content.speaker.image.file
      : null;
  const attachments = content.attachments.filter(isLocalFile).map((x) => x.file);

  const formData = new FormData();

  formData.append(
    'request',
    new Blob(
      [
        JSON.stringify({
          title: content.title,
          titleForMain: content.titleForMain ? content.titleForMain : null,
          description: content.description,
          introduction: content.speaker.description,
          name: content.speaker.name,
          speakerURL: content.speaker.nameURL,
          speakerTitle: content.speaker.title,
          affiliation: content.speaker.organization,
          affiliationURL: content.speaker.organizationURL,
          startDate: content.schedule.startDate.toISOString(),
          endDate: content.schedule.endDate?.toISOString() ?? null,
          location: content.location,
          host: content.host,
          isPrivate: content.isPrivate,
          isImportant: content.isImportant,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  if (image) {
    formData.append('mainImage', image);
  }

  encodeFormDataFileName(formData, 'attachments', attachments);

  return formData;
};

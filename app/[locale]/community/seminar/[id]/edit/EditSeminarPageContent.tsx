'use client';

import { deleteSeminarAction, patchSeminarAction } from '@/actions/seminar';
import { Seminar } from '@/apis/types/seminar';
import SeminarEditor, {
  SeminarFormData,
} from '@/app/[locale]/community/seminar/components/SeminarEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { seminar } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { isLocalFile, isLocalImage, isUploadedFile } from '@/types/form';
import { getPath } from '@/utils/page';
import { encodeFormDataFileName } from '@/utils/string';
import { errorToast } from '@/utils/toast';

const seminarPath = getPath(seminar);

export default function EditSeminarPageContent({ id, data }: { id: number; data: Seminar }) {
  const router = useRouter();

  const defaultValues: SeminarFormData = {
    ...data,
    description: data.description ?? '',
    host: data.host ?? '',
    name: data.name ?? '',
    speakerURL: data.speakerURL ?? '',
    speakerTitle: data.speakerTitle ?? '',
    affiliation: data.affiliation ?? '',
    affiliationURL: data.affiliationURL ?? '',
    introduction: data.introduction ?? '',
    startDate: new Date(data.startDate),
    endDate: data.endDate !== null ? new Date(data.endDate) : null,
    image: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
    isEndDateVisible: true,
  };

  const onCancel = () => router.push(`${seminarPath}/${id}`);

  const onSubmit = async (content: SeminarFormData) => {
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);
    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);

    const deleteIds = data.attachments
      .map((x) => x.id)
      .filter((id1) => uploadedAttachments.find((x) => x.id === id1) === undefined);

    const image = content.image && isLocalImage(content.image) ? content.image.file : null;

    const formData = new FormData();

    formData.append(
      'request',
      new Blob(
        [
          JSON.stringify({
            title: content.title,
            titleForMain: content.titleForMain || null,
            description: content.description || null,
            introduction: content.description || null,
            name: content.name || null,
            speakerURL: content.speakerURL || null,
            speakerTitle: content.speakerTitle || null,
            affiliation: content.affiliation || null,
            affiliationURL: content.affiliationURL || null,
            startDate: content.startDate.toISOString(),
            endDate: content.endDate?.toISOString() || null,
            location: content.location,
            host: content.host || null,
            isPrivate: content.isPrivate,
            isImportant: content.isImportant,

            deleteIds,
          }),
        ],
        { type: 'application/json' },
      ),
    );

    if (image) formData.append('newMainImage', image);
    encodeFormDataFileName(formData, 'newAttachments', localAttachments);
    patchSeminarAction(id, formData);
  };

  const onDelete = async () => {
    const result = await deleteSeminarAction(id);
    if (result) errorToast(result.message);
  };

  return (
    <PageLayout title="세미나 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <SeminarEditor
        onCancelAction={onCancel}
        onSubmitAction={onSubmit}
        onDelete={onDelete}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}

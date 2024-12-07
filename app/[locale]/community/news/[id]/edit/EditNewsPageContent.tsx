'use client';

import { deleteNewsAction, patchNewsAction } from '@/actions/news';
import { News } from '@/apis/types/news';
import NewsEditor, { NewsFormData } from '@/app/[locale]/community/news/components/NewsEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { news } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { isLocalFile, isLocalImage, isUploadedFile } from '@/types/form';
import { getPath } from '@/utils/page';
import { encodeFormDataFileName } from '@/utils/string';

const newsPath = getPath(news);

export default function EditNewsPageContent({ id, data }: { id: number; data: News }) {
  const router = useRouter();

  const defaultValues: NewsFormData = {
    title: data.title,
    titleForMain: data.titleForMain ?? '',
    description: data.description,
    isPrivate: data.isPrivate,
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),

    tags: data.tags,
    image: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    isSlide: data.isSlide,
    isImportant: data.isImportant,
    date: new Date(data.date),
  };

  const onCancel = () => router.push(`${newsPath}/${id}`);

  const onSubmit = async (content: NewsFormData) => {
    const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);
    const mainImage = content.image && isLocalImage(content.image) ? content.image.file : null;

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
            isSlide: content.isSlide,
            isImportant: content.isImportant,
            tags: content.tags,
            deleteIds,
            date: content.date,
          }),
        ],
        {
          type: 'application/json',
        },
      ),
    );

    // TOOD: 이미지 이름 깨지는지 확인
    if (mainImage) {
      formData.append('newMainImage', mainImage);
    }

    encodeFormDataFileName(formData, 'newAttachments', localAttachments);

    await patchNewsAction(id, formData);
  };

  const onDelete = async () => {
    await deleteNewsAction(id);
    router.push(newsPath);
  };

  return (
    <PageLayout title="새 소식 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <NewsEditor
        defaultValues={defaultValues}
        onCancel={onCancel}
        onSubmit={onSubmit}
        onDelete={onDelete}
      />
    </PageLayout>
  );
}

'use client';

import { postNewsAction } from '@/actions/news';
import NewsEditor, { NewsFormData } from '@/app/[locale]/community/news/components/NewsEditor';
import { isLocalFile, isLocalImage } from '@/components/form/types';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';
import { encodeFormDataFileName } from '@/utils/string';

const newsPath = getPath(news);

export default function NewsCreatePage() {
  const router = useRouter();

  const onCancel = () => router.push(newsPath);

  const onSubmit = async (content: NewsFormData) => {
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
            date: content.date,
          }),
        ],
        {
          type: 'application/json',
        },
      ),
    );

    if (content.image && isLocalImage(content.image)) {
      formData.append('mainImage', content.image.file);
    }

    encodeFormDataFileName(
      formData,
      'attachments',
      content.attachments.filter(isLocalFile).map((x) => x.file),
    );

    await postNewsAction(formData);
  };

  return (
    <PageLayout title="새 소식 작성" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <NewsEditor onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

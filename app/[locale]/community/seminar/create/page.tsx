'use client';

import { postSeminarAction } from '@/actions/seminar';
import SeminarEditor, {
  SeminarFormData,
} from '@/app/[locale]/community/seminar/components/SeminarEditor';
import { isLocalFile, isLocalImage } from '@/components/form/types';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';
import { encodeFormDataFileName } from '@/utils/string';

const seminarPath = getPath(seminar);

export default function SeminarCreatePage() {
  const router = useRouter();

  const onCancel = () => {
    router.push(seminarPath);
  };

  const onSubmit = async ({ image, attachments, ...rest }: SeminarFormData) => {
    const _attachments = attachments.filter(isLocalFile).map((x) => x.file);

    const formData = new FormData();

    formData.append('request', new Blob([JSON.stringify(rest)], { type: 'application/json' }));
    if (image && isLocalImage(image)) formData.append('mainImage', image.file);
    encodeFormDataFileName(formData, 'attachments', _attachments);

    postSeminarAction(formData);
  };

  return (
    <PageLayout title="세미나 작성" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <SeminarEditor onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

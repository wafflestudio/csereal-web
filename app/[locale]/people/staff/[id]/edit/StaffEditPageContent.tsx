'use client';

import { putStaffAction } from '@/actions/people';
import { Staff } from '@/apis/types/people';
import StaffEditor, {
  StaffEditorFormData,
} from '@/app/[locale]/people/staff/components/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { staff } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const staffPath = getPath(staff);

export default function StaffEditPageContent({
  data,
  language,
}: {
  data: WithLanguage<Staff>;
  language: Language;
}) {
  const router = useRouter();

  const onCancel = () => router.push(`${staffPath}/${data[language].id}`);

  const onSubmit = async (content: StaffEditorFormData) => {
    const image = content.ko.image;
    const formData = contentToFormData('EDIT', {
      requestObject: {
        ko: { ...content.ko, image, removeImage: undefined },
        en: { ...content.en, image, removeImage: undefined },
      },
      image: content.ko.image,
    });

    try {
      handleServerAction(
        await putStaffAction({ ko: data.ko.id, en: data.en.id }, formData, language),
      );
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  const defaultValues: StaffEditorFormData = {
    ko: {
      ...data.ko,
      image: data.ko.imageURL ? { type: 'UPLOADED_IMAGE', url: data.ko.imageURL } : null,
    },
    en: {
      ...data.en,
      image: data.en.imageURL ? { type: 'UPLOADED_IMAGE', url: data.en.imageURL } : null,
    },
  };

  return (
    <PageLayout title="행정직원 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <StaffEditor defaultValues={defaultValues} onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

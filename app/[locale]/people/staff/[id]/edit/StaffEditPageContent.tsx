'use client';

import { putStaffAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import StaffEditor, { StaffEditorContent } from '@/components/editor/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Language, WithLanguage } from '@/types/language';
import { Staff } from '@/types/people';

import { contentToFormData } from '@/utils/formData';
import { validateStaffForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { staff } from '@/utils/segmentNode';
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

  const handleCancel = () => router.push(`${staffPath}/${data[language].id}`);

  const handleComplete = async (content: WithLanguage<StaffEditorContent>) => {
    validateStaffForm(content);

    const requestObject = getRequestObject(
      content,
      data.ko.imageURL !== null && content.ko.image !== null,
    );
    const formData = contentToFormData('EDIT', {
      requestObject,
      image: content.ko.image,
    });

    try {
      handleServerAction(
        await putStaffAction({ ko: data.ko.id, en: data.en.id }, formData, language),
      );
    } catch {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout title="행정직원 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <StaffEditor
        initialContent={data}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleComplete }}
        initialLangauge={language}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: WithLanguage<StaffEditorContent>, removeImage: boolean) => {
  const image = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

  return {
    ko: { ...content.ko, image, removeImage },
    en: { ...content.en, image, removeImage },
  };
};

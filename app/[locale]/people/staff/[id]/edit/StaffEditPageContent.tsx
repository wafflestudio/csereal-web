'use client';

import { putStaffAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import { isLocalImage } from '@/components/editor/PostEditorTypes';
import StaffEditor, { StaffEditorContent } from '@/components/editor/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { LANGUAGE, Language, WithLanguage } from '@/types/language';
import { getKeys } from '@/types/object';
import { Staff } from '@/types/people';

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
    const formData = contentToFormData(content, data.ko.imageURL);

    try {
      handleServerAction(await putStaffAction({ ko: data.ko.id, en: data.en.id }, formData));
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

const contentToFormData = (content: WithLanguage<StaffEditorContent>, prevImage: string | null) => {
  const formData = new FormData();

  const requestObject = getRequestObject(content, Boolean(prevImage && !content.ko.image));

  formData.append(
    'request',
    new Blob([JSON.stringify(requestObject)], {
      type: 'application/json',
    }),
  );

  // 이미지는 한영 공통
  const image = content.ko.image;
  if (image && isLocalImage(image)) {
    formData.append('newImage', image.file);
  }

  return formData;
};

const getRequestObject = (content: WithLanguage<StaffEditorContent>, removeImage: boolean) =>
  getKeys(LANGUAGE).reduce((acc, lang) => {
    acc[lang] = {
      name: content[lang].name,
      role: content[lang].role,
      office: content[lang].office,
      phone: content[lang].phone,
      email: content[lang].email,
      tasks: content[lang].tasks,
      removeImage,
    };
    return acc;
  }, {} as WithLanguage);

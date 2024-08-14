'use client';

import { postStaffAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import { isLocalImage } from '@/components/editor/PostEditorTypes';
import StaffEditor, { StaffEditorContent } from '@/components/editor/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { LANGUAGE, Language, WithLanguage } from '@/types/language';
import { getKeys } from '@/types/object';

import { validateStaffForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { staff } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const staffPath = getPath(staff);

export default function StaffCreatePage({ params: { locale } }: { params: { locale: Language } }) {
  const router = useRouter();

  const handleCancel = () => router.push(staffPath);

  const handleComplete = async (content: WithLanguage<StaffEditorContent>) => {
    validateStaffForm(content);
    const formData = contentToFormData(content);

    try {
      handleServerAction(await postStaffAction(formData));
    } catch {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout title="행정직원 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <StaffEditor
        actions={{ type: 'CREATE', onCancel: handleCancel, onSubmit: handleComplete }}
        initialLangauge={locale}
      />
    </PageLayout>
  );
}

const contentToFormData = (content: WithLanguage<StaffEditorContent>) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(getRequestObject(content))], {
      type: 'application/json',
    }),
  );

  // 이미지는 한영 공통
  const image = content.ko.image;
  if (image && isLocalImage(image)) {
    formData.append('image', image.file);
  }

  return formData;
};

const getRequestObject = (content: WithLanguage<StaffEditorContent>) =>
  getKeys(LANGUAGE).reduce((acc, lang) => {
    acc[lang] = {
      name: content[lang].name,
      role: content[lang].role,
      office: content[lang].office,
      phone: content[lang].phone,
      email: content[lang].email,
      tasks: content[lang].tasks,
    };
    return acc;
  }, {} as WithLanguage);

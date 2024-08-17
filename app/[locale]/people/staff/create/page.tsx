'use client';

import { postStaffAction } from '@/actions/people';
import StaffEditor, { StaffEditorContent } from '@/components/editor/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Language, WithLanguage } from '@/types/language';
import { contentToFormData } from '@/utils/formData';
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

    const formData = contentToFormData('CREATE', {
      requestObject: getRequestObject(content),
      image: content.ko.image,
    });

    try {
      handleServerAction(await postStaffAction(formData, locale));
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

const getRequestObject = (content: WithLanguage<StaffEditorContent>) => {
  const image = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

  return {
    ko: { ...content.ko, image },
    en: { ...content.en, image },
  };
};

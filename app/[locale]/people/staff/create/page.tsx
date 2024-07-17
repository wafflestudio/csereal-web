'use client';

import { postStaffAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import { isLocalImage } from '@/components/editor/PostEditorTypes';
import StaffEditor, {
  StaffEditorContent,
  StaffEditorContentDetail,
} from '@/components/editor/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Locale } from '@/types/locale';

import { validateStaffForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { staff } from '@/utils/segmentNode';

const staffPath = getPath(staff);

export default function StaffCreatePage({ params: { locale } }: { params: { locale: Locale } }) {
  const router = useRouter();

  const handleCancel = () => router.push(staffPath);

  const handleComplete = async (content: StaffEditorContent) => {
    console.log(content);
    validateStaffForm(content);
    const formDataKo = contentToFormData(content.ko);
    const formDataEn = contentToFormData(content.en);
    postStaffAction({ ko: formDataKo, en: formDataEn });
  };

  return (
    <PageLayout title="행정직원 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <StaffEditor
        actions={{ type: 'CREATE', onCancel: handleCancel, onComplete: handleComplete }}
        initialLangauge={locale}
      />
    </PageLayout>
  );
}

const contentToFormData = (content: StaffEditorContentDetail) => {
  const image = content.image && isLocalImage(content.image) ? content.image.file : null;

  const formData = new FormData();

  formData.append(
    'request',
    new Blob(
      [
        JSON.stringify({
          language: content.language,
          name: content.name,
          role: content.role,
          phone: content.phone,
          email: content.email,
          office: content.office,
          tasks: content.tasks.map((task) => task.value),
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

  return formData;
};

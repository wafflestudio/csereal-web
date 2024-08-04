'use client';

import { postStaffAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import StaffEditor, { StaffEditorContent } from '@/components/editor/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Language, WithLanguage } from '@/types/language';

import { validateStaffForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { staff } from '@/utils/segmentNode';

const staffPath = getPath(staff);

export default function StaffCreatePage({ params: { locale } }: { params: { locale: Language } }) {
  const router = useRouter();

  const handleCancel = () => router.push(staffPath);

  const handleComplete = async (content: WithLanguage<StaffEditorContent>) => {
    validateStaffForm(content);
    postStaffAction();
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

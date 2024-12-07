'use client';
import { use } from 'react';

import { postStaffAction } from '@/actions/people';
import StaffEditor, {
  StaffEditorFormData,
} from '@/app/[locale]/people/staff/components/StaffEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { staff } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { Language } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { handleServerAction_legacy } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const staffPath = getPath(staff);

export default function StaffCreatePage(props: { params: Promise<{ locale: Language }> }) {
  const params = use(props.params);

  const { locale } = params;

  const router = useRouter();

  const onCancel = () => router.push(staffPath);

  const onSubmit = async (content: StaffEditorFormData) => {
    const formData = contentToFormData('CREATE', {
      requestObject: {
        ko: { ...content.ko, image: undefined },
        en: { ...content.en, image: undefined },
      },
      image: content.ko.image,
    });

    try {
      handleServerAction(await postStaffAction(formData, locale));
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="행정직원 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <StaffEditor onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

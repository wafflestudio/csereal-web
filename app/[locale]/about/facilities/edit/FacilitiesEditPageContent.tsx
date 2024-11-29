'use client';

import { putFacilityAction } from '@/actions/about';
import FacilityEditor, { FacilityEditorContent } from '@/components/editor/FacilityEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { Facility } from '@/types/about';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateFacilityForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { facilities } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const facilitiesPath = getPath(facilities);

export default function FacilitiesEditPageContent({ data }: { data: WithLanguage<Facility> }) {
  const router = useRouter();

  const handleCancel = () => router.push(facilitiesPath);

  const handleSubmit = async (content: WithLanguage<FacilityEditorContent>) => {
    validateFacilityForm(content);
    const formData = contentToFormData('EDIT', {
      requestObject: getRequestObject(
        content,
        data.ko.imageURL !== null && content.ko.mainImage === null,
      ),
      image: content.ko.mainImage,
    });

    try {
      handleServerAction(await putFacilityAction(data.ko.id, formData));
      successToast('시설 안내를 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="시설 안내 편집" titleType="big" hideNavbar>
      <FacilityEditor
        initialContent={data}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: WithLanguage<FacilityEditorContent>, removeImage: boolean) => {
  const mainImage = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

  return {
    ko: { ...content.ko, mainImage },
    en: { ...content.en, mainImage },
    removeImage,
  };
};

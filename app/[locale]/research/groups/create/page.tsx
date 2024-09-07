'use client';

import { postResearchGroupAction } from '@/actions/research';
import ResearchGroupEditor, {
  ResearchGroupEditorContent,
} from '@/components/editor/ResearchGroupEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateResearchGroupForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const groupsPath = getPath(researchGroups);

export default function GroupCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(groupsPath);

  const handleSubmit = async (content: ResearchGroupEditorContent) => {
    validateResearchGroupForm(content);
    const formData = contentToFormData('CREATE', {
      requestObject: getRequestObject(content),
      image: content.mainImage,
    });

    try {
      handleServerAction(await postResearchGroupAction(formData));
      successToast('연구 스트림을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구 스트림 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchGroupEditor
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: ResearchGroupEditorContent) => {
  const type = 'groups';

  return {
    ko: { name: content.name.ko, description: content.description.ko, type },
    en: { name: content.name.en, description: content.description.en, type },
  };
};

'use client';

import { postResearchGroupAction } from '@/actions/research';
import ResearchGroupEditor, {
  ResearchGroupEditorContent,
} from '@/components/editor/ResearchGroupEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { WithLanguage } from '@/types/language';
import { SimpleResearchLab } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateResearchGroupForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export default function GroupCreatePageContent({
  labs,
}: {
  labs: WithLanguage<SimpleResearchLab[]>;
}) {
  const router = useRouter();

  const handleCancel = () => router.push(status === 'INACTIVE' ? emeritusFacultyPath : facultyPath);

  const handleSubmit = async (content: ResearchGroupEditorContent) => {
    validateResearchGroupForm(content);
    const formData = contentToFormData('CREATE', {
      requestObject: getRequestObject(content),
      image: content.mainImage,
    });

    try {
      handleServerAction(await postResearchGroupAction(formData));
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="교수진 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchGroupEditor
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
        labs={labs}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: ResearchGroupEditorContent) => {
  const image = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

  return {
    ko: { ...content, image },
    en: { ...content, image },
  };
};

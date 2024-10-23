'use client';

import { putCareerDescriptionAction } from '@/actions/about';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const clubPath = getPath(studentClubs);

export default function CareerDescriptionEditPageContent({ data }: { data: WithLanguage<string> }) {
  const router = useRouter();

  const handleCancel = () => router.push(clubPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);

    const newData = {
      koDescription: content.description.ko,
      enDescription: content.description.en,
    };

    try {
      handleServerAction(await putCareerDescriptionAction(newData));
      successToast('졸업생 진로 본문을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="졸업생 진로 본문 편집" titleType="big" hideNavbar>
      <BasicEditor
        initialContent={{ description: data }}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showLanguage
      />
    </PageLayout>
  );
}

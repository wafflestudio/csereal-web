'use client';

import { putDirectionsAction } from '@/actions/about';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Direction } from '@/types/about';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { directions } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const directionsPath = getPath(directions);

export default function DirectionsEditPageContent({ data }: { data: WithLanguage<Direction> }) {
  const router = useRouter();

  const handleCancel = () => router.push(directionsPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);

    const newData = {
      koDescription: content.description.ko,
      enDescription: content.description.en,
    };

    try {
      handleServerAction(await putDirectionsAction(data.ko.id, newData));
      successToast('찾아오는 길을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title={`찾아오는 길(${data.ko.name}) 편집`} titleType="big" hideNavbar>
      <BasicEditor
        initialContent={{
          name: { ko: data.ko.name, en: data.en.name },
          description: { ko: data.ko.description, en: data.en.description },
        }}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showLanguage
      />
    </PageLayout>
  );
}

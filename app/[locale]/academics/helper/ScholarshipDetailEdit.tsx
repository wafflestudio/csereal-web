'use client';

import { putScholarshipAction } from '@/actions/academics';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Scholarship, StudentType } from '@/types/academics';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { validateBasicForm } from '@/utils/formValidation';
import { useTypedLocale } from '@/utils/hooks/useTypedLocale';
import { getPath } from '@/utils/page';
import { academics } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const academicsPath = getPath(academics);

export default function ScholarshipDetailEdit({
  type,
  scholarship,
}: {
  type: StudentType;
  scholarship: WithLanguage<Scholarship>;
}) {
  const language = useTypedLocale();
  const router = useRouter();

  const handleCancel = () => router.replace(`${academicsPath}/${type}/scholarship`);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);

    const { name, description } = content;
    const newData = {
      ko: { ...scholarship.ko, name: name.ko, description: description.ko },
      en: { ...scholarship.en, name: name.en, description: description.en },
    };

    try {
      handleServerAction(await putScholarshipAction(type, scholarship[language].id, newData));
      successToast('장학금을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout
      title={`${type === 'undergraduate' ? '학부' : '대학원'} 장학 제도 안내 편집`}
      titleType="big"
    >
      <BasicEditor
        initialContent={{
          name: { ko: scholarship.ko.name, en: scholarship.en.name },
          description: { ko: scholarship.ko.description, en: scholarship.en.description },
        }}
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onSubmit: handleSubmit,
        }}
        showName
        showLanguage
      />
    </PageLayout>
  );
}

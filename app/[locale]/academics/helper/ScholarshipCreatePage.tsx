'use client';

import { postScholarshipAction } from '@/actions/academics';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { StudentType } from '@/types/academics';
import { errorToStr } from '@/utils/error';
import { validateScholarshipForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { graduateScholarship, undergraduateScholarship } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const undergraduate = getPath(undergraduateScholarship);
const graduate = getPath(graduateScholarship);

export default function ScholarshipCreatePage({ type }: { type: StudentType }) {
  const router = useRouter();

  const handleCancel = () => router.replace(type === 'undergraduate' ? undergraduate : graduate);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateScholarshipForm(content);

    try {
      handleServerAction(
        await postScholarshipAction(type, {
          koName: content.name.ko,
          koDescription: content.description.ko,
          enName: content.name.en,
          enDescription: content.description.en,
        }),
      );
      successToast('장학금을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout
      title={`${type === 'undergraduate' ? '학부' : '대학원'} 장학금 추가`}
      titleType="big"
    >
      <BasicEditor
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showName
        showLanguage
      />
    </PageLayout>
  );
}

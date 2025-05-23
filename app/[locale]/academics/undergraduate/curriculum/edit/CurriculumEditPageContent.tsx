import { putCurriculumAction } from '@/actions/academics';
import { TimelineContent } from '@/apis/types/academics';
import TimelineEditor, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { curriculum } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const curriculumPath = getPath(curriculum);

export default function CurriculumEditPageContent({
  initContent,
}: {
  initContent: TimelineContent;
}) {
  const defaultValues: TimelineFormData = {
    year: initContent.year,
    description: initContent.description,
    file: initContent.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
  };

  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'newAttachments');
    await putCurriculumAction(initContent.year, formData);
  };

  return (
    <PageLayout title="전공 이수 표준 형태 편집" titleType="big">
      <TimelineEditor
        onSubmitAction={onSubmit}
        cancelPath={curriculumPath}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}

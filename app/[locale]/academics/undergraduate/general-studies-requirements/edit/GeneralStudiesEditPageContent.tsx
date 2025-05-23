import { putGeneralStudiesAction } from '@/actions/academics';
import { TimelineContent } from '@/apis/types/academics';
import TimelineEditor, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { generalStudies } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const generalStudiesPath = getPath(generalStudies);

export default function GeneralStudiesEditPageContent({
  initContent,
}: {
  initContent: TimelineContent;
}) {
  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'newAttachments');
    await putGeneralStudiesAction(initContent.year, formData);
  };

  const defaultValues: TimelineFormData = {
    year: initContent.year,
    description: initContent.description,
    file: initContent.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
  };

  return (
    <PageLayout title="필수 교양 과목 편집" titleType="big">
      <TimelineEditor
        onSubmitAction={onSubmit}
        cancelPath={generalStudiesPath}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}

import { putCurriculumAction } from '@/actions/academics';
import { AcademicsCommon } from '@/apis/v2/academics/types';
import TimelineEditor, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { curriculum } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const curriculumPath = getPath(curriculum);

export default function CurriculumEditPageContent({
  initContent,
}: {
  initContent: AcademicsCommon;
}) {
  const defaultValues: TimelineFormData = {
    year: initContent.year,
    description: initContent.description,
    file: [], // TODO: 채우기
  };

  const onSubmit = async (formData: FormData) => {
    'use server';
    await putCurriculumAction(initContent.year, formData);
  };

  return (
    <PageLayout title="전공 이수 표준 형태 편집" titleType="big">
      <TimelineEditor
        onSubmit={onSubmit}
        cancelPath={curriculumPath}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}

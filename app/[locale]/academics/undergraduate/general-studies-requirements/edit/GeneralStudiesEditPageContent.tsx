import { putAcademicsByPostType } from '@/apis/v1/academics/[studentType]/[postType]';
import TimelineEditor, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { GeneralStudiesRequirement } from '@/types/academics';
import { getPath } from '@/utils/page';
import { curriculum } from '@/constants/segmentNode';

const curriculumPath = getPath(curriculum);

export default function GeneralStudiesEditPageContent({
  initContent,
}: {
  initContent: GeneralStudiesRequirement;
}) {
  const onSubmit = async (formData: FormData) => {
    'use server';
    putAcademicsByPostType('undergraduate', 'general-studies-requirements', formData);
  };

  const defaultValues: TimelineFormData = {
    year: initContent.year,
    description: initContent.description,
    file: [],
  };

  return (
    <PageLayout title="필수 교양 과목 편집" titleType="big">
      <TimelineEditor
        onSubmit={onSubmit}
        cancelPath={curriculumPath}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}

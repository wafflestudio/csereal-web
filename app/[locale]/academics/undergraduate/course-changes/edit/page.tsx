import { revalidateTag } from 'next/cache';

import { getCourseChanges } from '@/apis/v1/academics/[studentType]/course-changes';
import { putCourseChanges } from '@/apis/v1/academics/[studentType]/course-changes/[year]';
import TimelineEditor, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_COURSE_CHANGES } from '@/constants/network';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { undergraduateCourseChanges } from '@/utils/segmentNode';
import { decodeFormDataFileName } from '@/utils/string';

const courseChangePath = getPath(undergraduateCourseChanges);

export default async function Page(props: { searchParams: Promise<{ year: string }> }) {
  const searchParams = await props.searchParams;
  const data = await getCourseChanges('undergraduate');
  const year = Number(searchParams.year);
  const selected = data.find((x) => x.year === year);

  if (!selected) {
    return <div>해당 연도 내용이 존재하지 않습니다.</div>;
  }

  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'newAttachments');
    await putCourseChanges('undergraduate', year, formData);
    revalidateTag(FETCH_TAG_COURSE_CHANGES);
    redirectKo(courseChangePath);
  };

  const defaultValues: TimelineFormData = {
    year: selected.year,
    description: selected.description,
    file: selected.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
  };

  return (
    <PageLayout title="학부 교과목 변경 내역 편집" titleType="big">
      <TimelineEditor
        cancelPath={courseChangePath}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}

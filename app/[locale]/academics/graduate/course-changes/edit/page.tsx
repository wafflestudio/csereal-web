import { getCourseChanges } from '@/apis/v1/academics/[studentType]/course-changes';
import { getPath } from '@/utils/page';
import { graduateCourseChanges } from '@/utils/segmentNode';

import CourseChangesEditPageContent from '../../../components/course-changes/CourseChangeEditPageContent';

const courseChangePath = getPath(graduateCourseChanges);

export default async function GraduateCourseChangesEditPage({
  searchParams,
}: {
  searchParams: { year: string };
}) {
  const data = await getCourseChanges('graduate');
  const year = Number(searchParams.year);
  const selected = data.find((x) => x.year === year);

  if (!selected) {
    return <div>해당 연도 내용이 존재하지 않습니다.</div>;
  }

  return (
    <CourseChangesEditPageContent
      type="graduate"
      initContent={selected}
      courseChangePath={courseChangePath}
    />
  );
}

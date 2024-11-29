import { Metadata } from 'next';

import { getCourseChanges } from '@/apis/v1/academics/[type]/course-changes';
import { getMetadata } from '@/utils/metadata';
import { graduateCourseChanges } from '@/utils/segmentNode';

import CourseChangesPageContent from '../../helper/course-changes/CourseChangesPageContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateCourseChanges });
}

export default async function GraduateCourseChangesPage() {
  const changes = await getCourseChanges('graduate');

  return <CourseChangesPageContent changes={changes} type="graduate" />;
}

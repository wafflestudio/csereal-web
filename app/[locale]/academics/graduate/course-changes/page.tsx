import { Metadata } from 'next';

import { getCourseChanges } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { graduateCourseChanges } from '@/utils/segmentNode';

import CourseChangesPageContent from '../../helper/CourseChangesPageContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateCourseChanges });
}

export default async function GraduateCourseChangesPage() {
  const changes = await getCourseChanges('graduate');

  return <CourseChangesPageContent changes={changes} />;
}

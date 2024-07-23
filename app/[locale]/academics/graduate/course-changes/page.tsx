import { Metadata } from 'next';

import { getCourseChanges } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { graduateCourseChanges } from '@/utils/segmentNode';

import CourseChanges from '../../helper/CourseChanges';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateCourseChanges });
}

export default async function GraduateCourseChangesPage() {
  const changes = await getCourseChanges('graduate');

  return <CourseChanges changes={changes} />;
}

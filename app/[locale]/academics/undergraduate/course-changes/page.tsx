import { getCourseChanges } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { undergraduateCourseChanges } from '@/utils/segmentNode';

import CourseChanges from '../../helper/CourseChanges';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateCourseChanges });
}

export default async function UndergraduateCourseChangesPage() {
  const changes = await getCourseChanges('undergraduate');

  return <CourseChanges changes={changes} />;
}

import { getCourseChanges } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { undergraduateCourseChanges } from '@/utils/segmentNode';

import CourseChangesPageContent from '../../helper/course-changes/CourseChangesPageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateCourseChanges });
}

export default async function UndergraduateCourseChangesPage() {
  const changes = await getCourseChanges('undergraduate');

  return <CourseChangesPageContent changes={changes} type="undergraduate" />;
}

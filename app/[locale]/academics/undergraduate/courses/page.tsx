import { getCourses } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

import { getMetadata } from '@/utils/metadata';
import { undergraduateCourses } from '@/utils/segmentNode';

import UndergraduateCoursePageContent from './UndergraduateCoursePageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateCourses });
}

export default async function UndergraduateCoursePage() {
  const data: Course[] = await getCourses('undergraduate');

  return (
    <PageLayout titleType="big">
      {/* 추후 RoadMapButton 복구 */}
      <UndergraduateCoursePageContent courses={data} />
    </PageLayout>
  );
}

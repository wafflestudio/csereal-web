import { getCourses } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';
import { Language } from '@/types/language';

import { getMetadata } from '@/utils/metadata';
import { undergraduateCourses } from '@/utils/segmentNode';

import UndergraduateCoursePageContent from './UndergraduateCoursePageContent';

interface CoursePageProps {
  params: { locale: Language };
}

export async function generateMetadata({ params: { locale } }: CoursePageProps) {
  return await getMetadata({ locale, node: undergraduateCourses });
}

export default async function UndergraduateCoursePage({ params: { locale } }: CoursePageProps) {
  const data: Course[] = await getCourses('undergraduate', locale);
  return (
    <PageLayout titleType="big">
      {/* 추후 RoadMapButton 복구 */}
      <UndergraduateCoursePageContent courses={data} />
    </PageLayout>
  );
}

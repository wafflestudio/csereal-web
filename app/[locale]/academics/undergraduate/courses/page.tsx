import { Course } from '@/apis/types/academics';
import { getCourses } from '@/apis/v2/academics/courses';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateCourses } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

import UndergraduateCoursePageContent from './UndergraduateCoursePageContent';

interface CoursePageProps {
  params: Promise<{ locale: Language }>;
}

export async function generateMetadata(props: CoursePageProps) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: undergraduateCourses });
}

export default async function UndergraduateCoursePage(props: CoursePageProps) {
  const params = await props.params;

  const { locale } = params;

  const data: Course[] = await getCourses('undergraduate', locale);

  return (
    <PageLayout titleType="big">
      {/* 추후 RoadMapButton 복구 */}
      <UndergraduateCoursePageContent courses={data} language={locale} />
    </PageLayout>
  );
}

import { getCourses } from '@/apis/academics';
import CoursePageContent from '@/app/[locale]/academics/undergraduate/courses/CoursePageContent';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Course } from '@/types/academics';
import { getMetadata } from '@/utils/metadata';
import { undergraduateGuide } from '@/utils/segmentNode';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateGuide });
}

export default async function UndergraduateCoursePage() {
  const data: Course[] = await getCourses('undergraduate');

  return (
    <PageLayout titleType="big">
      {/* 추후 RoadMapButton 복구 */}
      <CoursePageContent courses={data} />
    </PageLayout>
  );
}

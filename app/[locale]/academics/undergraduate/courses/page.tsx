import { getCourses } from '@/apis/academics';

import RoadMapButton from '@/app/[locale]/academics/helper/RoadMapButton';
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

  console.log(data);

  return (
    <PageLayout titleType="big">
      <RoadMapButton />
      <CoursePageContent courses={data} />
    </PageLayout>
  );
}

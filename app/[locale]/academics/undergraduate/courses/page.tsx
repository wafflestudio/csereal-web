import { getCourses } from '@/apis/academics';

import RoadMapButton from '@/app/[locale]/academics/helper/RoadMapButton';
import CoursePageContent from '@/app/[locale]/academics/undergraduate/courses/CoursePageContent';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { undergraduateGuide } from '@/constants/navTreeNode';

import { Course } from '@/types/academics';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateGuide });
}

export default async function UndergraduateCoursePage() {
  const data: Course[] = await getCourses('undergraduate');

  return (
    <PageLayout titleType="big">
      <RoadMapButton />
      <CoursePageContent courses={data} />
    </PageLayout>
  );
}

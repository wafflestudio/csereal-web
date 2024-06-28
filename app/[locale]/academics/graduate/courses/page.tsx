import { Metadata } from 'next';

import { getCourses } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { graduateCourses } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

import CoursePageContent from './CoursePageContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateCourses });
}

export default async function GraduateCoursePage() {
  const courseList = await getCourses('graduate');

  return (
    <PageLayout titleType="big">
      <CoursePageContent courses={courseList} />
    </PageLayout>
  );
}

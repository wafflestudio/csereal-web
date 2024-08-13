import { Metadata } from 'next';

import { getCourses } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { graduateCourses } from '@/utils/segmentNode';

import GraduateCoursePageContent from './GraduateCoursePageContent';

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
      <GraduateCoursePageContent courses={courseList} />
    </PageLayout>
  );
}

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getCourses } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import CoursePageContent from './CoursePageContent';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('교과과정'),
    description: '서울대학교 컴퓨터공학부 교과과정(대학원) 페이지입니다.',
  };
}

export default async function GraduateCoursePage() {
  const courseList = await getCourses('graduate');

  return (
    <PageLayout titleType="big">
      <CoursePageContent courses={courseList} />
    </PageLayout>
  );
}

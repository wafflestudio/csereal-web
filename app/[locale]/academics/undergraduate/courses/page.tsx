import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getCourses } from '@/apis/academics';

import RoadMapButton from '@/app/[locale]/academics/helper/RoadMapButton';
import CoursePageContent from '@/app/[locale]/academics/undergraduate/courses/CoursePageContent';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('교과과정'),
    description: '서울대학교 컴퓨터공학부 교과과정(학부) 페이지입니다.',
  };
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

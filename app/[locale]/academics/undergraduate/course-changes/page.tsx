import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getCourseChanges } from '@/apis/academics';

import CourseChanges from '../../helper/CourseChanges';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('교과목 변경 내역'),
    description: '서울대학교 컴퓨터공학부 교과목 변경 내역(학부) 페이지입니다.',
  };
}

const TIME_SPOTS_LIST: { year: number; margin?: string; isLast?: boolean }[][] = [
  [
    { year: 2020, margin: 'mr-7' },
    { year: 2019, margin: 'mr-7' },
    { year: 2018, margin: 'mr-7' },
    { year: 2017, margin: 'mr-7' },
    { year: 2016, margin: 'mr-7' },
    { year: 2015, margin: 'sm:mr-[5.375rem]' },
  ],
  [
    { year: 2013, margin: 'mr-7' },
    { year: 2012, margin: 'mr-7' },
    { year: 2011, margin: 'mr-7' },
    { year: 2010, isLast: true },
  ],
];

export default async function UndergraduateCourseChangesPage() {
  const changes = await getCourseChanges('undergraduate');

  return <CourseChanges changes={changes} yearLimit={2011} timeSpotsList={TIME_SPOTS_LIST} />;
}

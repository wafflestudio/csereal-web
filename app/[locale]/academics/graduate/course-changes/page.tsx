import { Metadata } from 'next';

import { getCourseChanges } from '@/apis/academics';

import { graduateCourseChanges } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

import CourseChanges from '../../helper/CourseChanges';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateCourseChanges });
}

const TIME_SPOTS_LIST: { year: number; margin?: string; isLast?: boolean }[][] = [
  [
    { year: 2020, margin: 'mr-7' },
    { year: 2019, margin: 'mr-7' },
    { year: 2018, margin: 'mr-7' },
    { year: 2017, margin: 'mr-7' },
    { year: 2016, margin: 'mr-7' },
    { year: 2015, margin: 'mr-[12.625rem]' },
  ],
  [{ year: 2011, isLast: true }],
];

export default async function GraduateCourseChangesPage() {
  const changes = await getCourseChanges('graduate');

  return <CourseChanges changes={changes ?? []} yearLimit={2011} timeSpotsList={TIME_SPOTS_LIST} />;
}

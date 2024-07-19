import { getCourseChanges } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { undergraduateCourseChanges } from '@/utils/segmentNode';

import CourseChanges from '../../helper/CourseChanges';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateCourseChanges });
}

const TIME_SPOTS_LIST: { year: number; isLast?: boolean }[][] = [
  [{ year: 2020 }, { year: 2019 }, { year: 2018 }, { year: 2017 }, { year: 2016 }, { year: 2015 }],
  [{ year: 2013 }, { year: 2012 }, { year: 2011 }, { year: 2010, isLast: true }],
];

export default async function UndergraduateCourseChangesPage() {
  const changes = await getCourseChanges('undergraduate');

  console.log(changes);

  return <CourseChanges changes={changes} yearLimit={2011} timeSpotsList={TIME_SPOTS_LIST} />;
}

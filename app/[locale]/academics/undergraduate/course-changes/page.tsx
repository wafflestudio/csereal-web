import { getCourseChanges } from '@/apis/academics';

import CourseChanges from '../../helper/CourseChanges';

const TIME_SPOTS: { year: number; margin?: string; isLast?: boolean }[] = [
  { year: 2020 },
  { year: 2019, margin: 'ml-7' },
  { year: 2018, margin: 'ml-7' },
  { year: 2017, margin: 'ml-7' },
  { year: 2016, margin: 'ml-7' },
  { year: 2015, margin: 'ml-7' },
  { year: 2013, margin: 'ml-[5.375rem]' },
  { year: 2012, margin: 'ml-7' },
  { year: 2011, margin: 'ml-7' },
  { year: 2010, margin: 'ml-7', isLast: true },
];

export default async function UndergraduateCourseChangesPage() {
  const changes = await getCourseChanges('undergraduate');

  return <CourseChanges changes={changes} yearLimit={2011} timeSpots={TIME_SPOTS} />;
}

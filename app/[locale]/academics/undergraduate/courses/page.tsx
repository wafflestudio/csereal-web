import { getCourses } from '@/apis/academics';

import CoursePageContent from '@/components/academics/CoursePageContent';
import RoadMapButton from '@/components/academics/RoadMapButton';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

export default async function UndergraduateCoursePage() {
  const data: Course[] = await getCourses('undergraduate');

  return (
    <PageLayout titleType="big" titleMargin="mb-[44px]">
      <RoadMapButton />
      <CoursePageContent courses={data} />
    </PageLayout>
  );
}

import { getCourses } from '@/apis/academics';

import CoursePageContent from '@/components/academics/CoursePageContent';
import RoadMapButton from '@/components/academics/RoadMapButton';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

export default async function UndergraduateCoursePage() {
  const data: Course[] = await getCourses('undergraduate');

  return (
    <PageLayout titleType="big" titleMargin="mb-[44px]">
      <div className="pl-[100px] pr-[350px] pt-[36px] pb-[150px]">
        <RoadMapButton />
        <CoursePageContent courses={data} />
      </div>
    </PageLayout>
  );
}

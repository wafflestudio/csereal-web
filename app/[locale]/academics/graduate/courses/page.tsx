import { getCourses } from '@/apis/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { graduateCourses } from '@/utils/segmentNode';

import GraduateCoursePageContent from './GraduateCoursePageContent';

interface CoursePageProps {
  params: { locale: Language };
}

export async function generateMetadata({ params: { locale } }: CoursePageProps) {
  return await getMetadata({ locale, node: graduateCourses });
}

export default async function GraduateCoursePage({ params: { locale } }: CoursePageProps) {
  const courseList = await getCourses('graduate', locale);

  return (
    <PageLayout titleType="big">
      <GraduateCoursePageContent courses={courseList} language={locale} />
    </PageLayout>
  );
}

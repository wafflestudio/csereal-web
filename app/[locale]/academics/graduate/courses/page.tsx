import { getCourses } from '@/apis/v2/academics/courses';
import GraduateCoursePageContent from '@/app/[locale]/academics/graduate/courses/GraduateCoursePageContent';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateCourses } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

interface CoursePageProps {
  params: Promise<{ locale: Language }>;
}

export async function generateMetadata(props: CoursePageProps) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: graduateCourses });
}

export default async function GraduateCoursePage(props: CoursePageProps) {
  const params = await props.params;

  const { locale } = params;

  const courseList = await getCourses('graduate', locale);

  return (
    <PageLayout titleType="big">
      <GraduateCoursePageContent courses={courseList} language={locale} />
    </PageLayout>
  );
}

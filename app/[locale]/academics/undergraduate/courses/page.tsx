import Link from 'next-intl/link';

import { getCourses } from '@/apis/academics';

import CourseList from '@/components/academics/CourseList';
import CourseRow from '@/components/academics/CourseRow';
import RoadMapButton from '@/components/academics/RoadMapButton';
import { Tag } from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Classification, Course, SortOption } from '@/types/academics';
import { undergraduateCourses } from '@/types/page';

import { getPath } from '@/utils/page';
import { replaceDashWithSpace, replaceSpaceWithDash } from '@/utils/replaceCharacter';

interface UndergraduateCoursePageProps {
  params: { locale: string };
  searchParams: { sortby?: string };
}

export default async function UndergraduateCoursePage({
  searchParams: { sortby = '' },
}: UndergraduateCoursePageProps) {
  const data: Course[] = await getCourses('undergraduate');
  const optionWithoutDash = replaceDashWithSpace(sortby);
  const selectedOption: SortOption = isValidSortOption(optionWithoutDash)
    ? optionWithoutDash
    : '학년';
  const sortedCourses = sortCourses(data ?? [], selectedOption);

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <RoadMapButton />
      <h4 className="my-8 font-bold">교과목 정보</h4>
      <SortOptions selectedOption={selectedOption} />
      <CourseList courses={data} />
      {/* {sortedCourses.length > 0 && (
        <div className="mt-6 flex flex-col gap-8">
          {sortedCourses.map((courses, i) => (
            <CourseRow courses={courses} selectedOption={selectedOption} key={i} />
          ))}
        </div>
      )} */}
    </PageLayout>
  );
}

interface SortOptionsProps {
  selectedOption: SortOption;
}

const SORT_OPTIONS: SortOption[] = ['학년', '교과목 구분', '학점'];

const coursePath = getPath(undergraduateCourses);

function SortOptions({ selectedOption }: SortOptionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SORT_OPTIONS.map((option) =>
        option === selectedOption ? (
          <Tag key={option} tag={option} defaultStyle="fill" />
        ) : (
          <Link key={option} href={`${coursePath}?sortby=${replaceSpaceWithDash(option)}`}>
            <Tag tag={option} hoverStyle="fill" defaultStyle="orange" />
          </Link>
        ),
      )}
    </div>
  );
}

const isValidSortOption = (searchParam: string): searchParam is (typeof SORT_OPTIONS)[number] => {
  return SORT_OPTIONS.findIndex((x) => x === searchParam) !== -1;
};

const getSortGroupIndexByClassification = (classification: Classification) => {
  if (classification === '전공필수') return 0;
  else if (classification === '전공선택') return 1;
  else return 2;
};

const sortCourses = (courses: Course[], sortOption: SortOption) => {
  const sortedCourses: Course[][] = [];

  if (sortOption === '학년') {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[parseInt(course.grade) - 1].push(course));
  } else if (sortOption === '교과목 구분') {
    sortedCourses.push([], [], []);
    courses.forEach((course) =>
      sortedCourses[getSortGroupIndexByClassification(course.classification)].push(course),
    );
  } else {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[course.credit - 1].push(course));
  }

  return sortedCourses;
};

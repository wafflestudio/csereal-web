import { Academic, AcademicsSearchResult } from '@/apis/types/search';
import BasicRow from '@/app/[locale]/search/helper/BasicRow';
import Section from '@/app/[locale]/search/helper/Section';
import {
  curriculum,
  degree,
  generalStudies,
  graduateCourseChanges,
  graduateCourses,
  graduateGuide,
  graduateScholarship,
  undergraduateCourseChanges,
  undergraduateCourses,
  undergraduateGuide,
  undergraduateScholarship,
} from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

// TODO: 장학 제도 등 상세 페이지로 연결
export default async function AcademicSection({ academic }: { academic: AcademicsSearchResult }) {
  return (
    <Section title="학사 및 교과" size={academic.total}>
      <div className="flex flex-col gap-7">
        {academic.results.map((result) => {
          const node = toNode(result);

          return (
            <BasicRow
              key={result.id}
              href={getPath(node)}
              title={result.name}
              node={node}
              {...result}
            />
          );
        })}
      </div>
    </Section>
  );
}

const toNode = (academic: Academic) => {
  // 공통

  // 학부/대학원 안내
  if (academic.academicType === 'GUIDE')
    return academic.studentType === 'UNDERGRADUATE' ? undergraduateGuide : graduateGuide;

  // 교과과정
  if (academic.postType === 'COURSE')
    return academic.studentType === 'UNDERGRADUATE' ? undergraduateCourses : graduateCourses;

  // 교과목 변경 내역
  if (academic.academicType === 'COURSE_CHANGES')
    return academic.studentType === 'UNDERGRADUATE'
      ? undergraduateCourseChanges
      : graduateCourseChanges;

  // 장학 제도
  if (academic.postType === 'SCHOLARSHIP')
    return academic.studentType === 'UNDERGRADUATE'
      ? undergraduateScholarship
      : graduateScholarship;

  // 학부 전용

  // 전공이수표준형태
  if (academic.academicType === 'CURRICULUM') return curriculum;

  // 필수 교양 과목
  if (
    academic.academicType === 'GENERAL_STUDIES_REQUIREMENTS' ||
    academic.academicType === 'GENERAL_STUDIES_REQUIREMENTS_SUBJECT_CHANGES'
  )
    return generalStudies;

  // 졸업 규정
  if (
    academic.academicType === 'DEGREE_REQUIREMENTS' ||
    academic.academicType === 'DEGREE_REQUIREMENTS_YEAR_LIST'
  )
    return degree;

  // TODO: fallback 없애기
  return undergraduateCourses;
};

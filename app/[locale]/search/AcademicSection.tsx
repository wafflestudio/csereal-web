import { Academic, AcademicsSearchResult } from '@/types/search';

import { getPath } from '@/utils/page';
import {
  graduateCourseChanges,
  graduateCourses,
  graduateGuide,
  graduateScholarship,
  undergraduateCourseChanges,
  undergraduateCourses,
  undergraduateGuide,
  undergraduateScholarship,
} from '@/utils/segmentNode';

import BasicRow from './helper/BasicRow';
import Section from './helper/Section';

export default async function AcademicSection({ academic }: { academic: AcademicsSearchResult }) {
  return (
    <Section title="학사 및 교과" size={academic.total}>
      <div className="flex flex-col gap-7">
        {academic.results.map((result) => {
          console.log(result);
          // TODO
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
  // 학부/대학원 공통
  if (academic.academicType === 'GUIDE')
    return academic.studentType === 'UNDERGRADUATE' ? undergraduateGuide : graduateGuide;

  if (academic.postType === 'COURSE')
    return academic.studentType === 'UNDERGRADUATE' ? undergraduateCourses : graduateCourses;

  if (academic.academicType === 'CURRICULUM')
    return academic.studentType === 'UNDERGRADUATE'
      ? undergraduateCourseChanges
      : graduateCourseChanges;

  if (academic.postType === 'SCHOLARSHIP')
    return academic.studentType === 'UNDERGRADUATE'
      ? undergraduateScholarship
      : graduateScholarship;

  // 학부 전용
  // TODO

  return undergraduateGuide;
};

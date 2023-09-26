'use client';

import { Course } from '@/types/academics';

export const COURSE_ROW_ITEM_WIDTH = {
  name: 'w-56',
  classification: 'w-[6.75rem]',
  code: 'w-[11.75rem]',
  credit: 'w-[3.75rem]',
  grade: 'w-[5.25rem]',
} as const;

export default function CourseListRow({ course }: { course: Course }) {
  return (
    <li className="flex items-center h-14 text-xs [&>span]:px-3">
      <NameCell name={course.name} />
      <ClassificationCell classification={course.classification} />
      <CodeCell code={course.code} />
      <CreditCell credit={course.credit} />
      <GradeCell grade={course.grade} />
    </li>
  );
}

function NameCell({ name }: { name: string }) {
  return <span className={`${COURSE_ROW_ITEM_WIDTH.name}`}>{name}</span>;
}

function ClassificationCell({ classification }: { classification: string }) {
  return (
    <span className={`${COURSE_ROW_ITEM_WIDTH.classification} text-neutral-400`}>
      {classification}
    </span>
  );
}

function CodeCell({ code }: { code: string }) {
  return <span className={`${COURSE_ROW_ITEM_WIDTH.code} text-neutral-400`}>{code}</span>;
}

function CreditCell({ credit }: { credit: number }) {
  return <span className={`${COURSE_ROW_ITEM_WIDTH.credit} text-neutral-400`}>{credit}</span>;
}

function GradeCell({ grade }: { grade: string }) {
  return <span className={`${COURSE_ROW_ITEM_WIDTH.grade} text-neutral-400`}>{grade}</span>;
}

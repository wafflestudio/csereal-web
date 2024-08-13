'use client';

import { Course, GRADE } from '@/types/academics';

import useModal from '@/utils/hooks/useModal';

import CourseDetailModal from './CourseDetailModal';

export const COURSE_ROW_ITEM_WIDTH = {
  name: 'sm:w-[16rem]',
  classification: 'sm:w-[10rem]',
  code: 'sm:w-[13rem]',
  credit: 'sm:w-[6rem]',
  grade: 'sm:w-[5.25rem]',
} as const;

export default function CourseListRow({ course }: { course: Course }) {
  return (
    <li className="grid grid-cols-[auto,_auto,_1fr] grid-rows-3 gap-1 px-7 py-6 text-md odd:bg-neutral-50 sm:flex sm:h-14 sm:items-center sm:gap-0 sm:px-4 sm:py-0 sm:odd:bg-white">
      <NameCell name={course.name} course={course} />
      <ClassificationCell classification={course.classification} />
      <CodeCell code={course.code} />
      <CreditCell credit={course.credit} />
      <GradeCell grade={course.grade} />
    </li>
  );
}

function NameCell({ name, course }: { name: string; course: Course }) {
  const { openModal, closeModal } = useModal();

  return (
    <span
      className={`${COURSE_ROW_ITEM_WIDTH.name} order-1 col-span-3 pr-2 text-base font-semibold sm:text-md sm:font-normal`}
    >
      <button
        className="text-left"
        onClick={() => openModal(<CourseDetailModal course={course} onClose={closeModal} />)}
      >
        {name}
      </button>
    </span>
  );
}

function ClassificationCell({ classification }: { classification: string }) {
  return (
    <span
      className={`${COURSE_ROW_ITEM_WIDTH.classification} order-3 whitespace-nowrap pr-1 text-neutral-400 sm:order-2 sm:pr-0`}
    >
      {classification}
    </span>
  );
}

function CodeCell({ code }: { code: string }) {
  return (
    <span
      className={`${COURSE_ROW_ITEM_WIDTH.code} order-2 col-span-3 text-neutral-500 sm:order-3 sm:text-neutral-400`}
    >
      {code}
    </span>
  );
}

function CreditCell({ credit }: { credit: number }) {
  return (
    <span className={`${COURSE_ROW_ITEM_WIDTH.credit} order-5 text-neutral-400 sm:order-4 sm:pl-2`}>
      {credit}
      <span className="sm:hidden">학점</span>
    </span>
  );
}

function GradeCell({ grade }: { grade: number }) {
  return (
    <span
      className={`${COURSE_ROW_ITEM_WIDTH.grade} order-4 whitespace-nowrap pr-1 text-neutral-400 sm:order-5 sm:pr-0`}
    >
      {GRADE[grade]}
    </span>
  );
}

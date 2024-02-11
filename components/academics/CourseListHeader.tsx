'use client';

import { COURSE_ROW_ITEM_WIDTH } from './CourseListRow';

export default function CourseListHeader() {
  return (
    <h5 className="flex items-center h-11 text-md border-y border-neutral-100 bg-neutral-100 [&>span]:px-4">
      <span className={COURSE_ROW_ITEM_WIDTH.name}>교과목명</span>
      <span className={COURSE_ROW_ITEM_WIDTH.classification}>교과목 구분</span>
      <span className={COURSE_ROW_ITEM_WIDTH.code}>교과목 번호</span>
      <span className={COURSE_ROW_ITEM_WIDTH.credit}>학점</span>
      <span className={COURSE_ROW_ITEM_WIDTH.grade}>학년</span>
    </h5>
  );
}

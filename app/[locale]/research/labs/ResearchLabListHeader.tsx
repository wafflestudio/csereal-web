'use client';

import { LAB_ROW_ITEM_WIDTH } from './ResearchLabListRow';

export default function ResearchLabListHeader() {
  return (
    <h5 className="hidden h-10 items-center whitespace-nowrap bg-neutral-100 pl-2 text-sm font-medium tracking-[0.02em] sm:flex [&>span]:px-3">
      <span className={LAB_ROW_ITEM_WIDTH.name}>연구실</span>
      <span className={LAB_ROW_ITEM_WIDTH.professor}>지도교수</span>
      <span className={LAB_ROW_ITEM_WIDTH.location}>연구실 위치</span>
      <span className={LAB_ROW_ITEM_WIDTH.tel}>전화</span>
      <span className={LAB_ROW_ITEM_WIDTH.acronym}>약자</span>
      <span className={LAB_ROW_ITEM_WIDTH.introMaterial}>소개 자료</span>
    </h5>
  );
}

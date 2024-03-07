'use client';

import { LAB_ROW_ITEM_WIDTH } from './ResearchLabListRow';

export default function ResearchLabListHeader() {
  return (
    <h5 className="hidden sm:flex items-center h-10 whitespace-nowrap text-sm font-medium bg-neutral-100 pl-2 [&>span]:px-3 tracking-[0.02em]">
      <span className={LAB_ROW_ITEM_WIDTH.name}>연구실</span>
      <span className={LAB_ROW_ITEM_WIDTH.professor}>지도교수</span>
      <span className={LAB_ROW_ITEM_WIDTH.location}>연구실 위치</span>
      <span className={LAB_ROW_ITEM_WIDTH.tel}>전화</span>
      <span className={LAB_ROW_ITEM_WIDTH.acronym}>약자</span>
      <span className={LAB_ROW_ITEM_WIDTH.introMaterial}>소개 자료</span>
    </h5>
  );
}

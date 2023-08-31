import { SLIDE_ROW_CELL_WIDTH } from './SlideListRow';

export default function SlideListHeader() {
  return (
    <h5 className="pl-[3.125rem] pr-[4.375rem] h-10 flex items-center border-b border-neutral-300 font-yoon text-xs text-neutral-700 tracking-wide">
      <span className={`${SLIDE_ROW_CELL_WIDTH.order} text-center tracking-wide`}>연번</span>
      <span className={`${SLIDE_ROW_CELL_WIDTH.title} pl-3 tracking-wide`}>제목</span>
      <span className={`${SLIDE_ROW_CELL_WIDTH.date} pl-8 tracking-wide`}>날짜</span>
    </h5>
  );
}

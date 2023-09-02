import { IMPORTANT_ROW_CELL_WIDTH } from './ImportantListRow';

export default function ImportantListHeader() {
  return (
    <h5 className="pl-[3.125rem] pr-[4.375rem] h-10 flex items-center border-b border-neutral-300 font-yoon text-xs text-neutral-700 tracking-wide">
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.index} text-center tracking-wide`}>연번</span>
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.category} text-center tracking-wide`}>종류</span>
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.title} pl-3 tracking-wide`}>제목</span>
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.date} pl-8 tracking-wide`}>날짜/일시</span>
    </h5>
  );
}

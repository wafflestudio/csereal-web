import { IMPORTANT_ROW_CELL_WIDTH } from './ImportantListRow';

export default function ImportantListHeader() {
  return (
    <h5 className="flex h-10 items-center border-b border-t border-neutral-200 pl-[3.125rem] pr-[4.375rem] text-md tracking-wide text-neutral-700">
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.index} text-center tracking-wide`}>연번</span>
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.category} text-center tracking-wide`}>종류</span>
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.title} pl-3 tracking-wide`}>제목</span>
      <span className={`${IMPORTANT_ROW_CELL_WIDTH.date} pl-8 tracking-wide`}>날짜/일시</span>
    </h5>
  );
}

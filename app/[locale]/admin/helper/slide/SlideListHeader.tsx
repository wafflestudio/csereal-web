import { SLIDE_ROW_CELL_WIDTH } from '@/app/[locale]/admin/helper/slide/SlideListRow';

export default function SlideListHeader() {
  return (
    <h5 className="flex h-10 items-center border-b border-t border-neutral-200 pr-[4.375rem] text-md tracking-wide text-neutral-700">
      {/* 아래 본문 리스트와 간격 맞추기 위해 빈 탭 하나 필요 */}
      <span className={`${SLIDE_ROW_CELL_WIDTH.check}`} />
      <span className={`${SLIDE_ROW_CELL_WIDTH.index} text-center tracking-wide`}>연번</span>
      <span className={`${SLIDE_ROW_CELL_WIDTH.title} grow pl-3 tracking-wide`}>제목</span>
      <span className={`${SLIDE_ROW_CELL_WIDTH.date} pl-8 tracking-wide`}>날짜</span>
    </h5>
  );
}

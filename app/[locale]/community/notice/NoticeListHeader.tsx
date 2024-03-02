import { NOTICE_ROW_CELL_WIDTH } from './NoticeListRow';

export default function NoticeListHeader({ isEditMode }: { isEditMode: boolean }) {
  const paddingLeft = isEditMode ? 'pl-[6.25rem]' : 'pl-[3.125rem]';

  return (
    <h5
      className={`h-11 ${paddingLeft} flex text-[15px] items-center border-b border-neutral-200 text-neutral-800`}
    >
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} pl-3 tracking-wide`}>제목</span>
      <span className={`${NOTICE_ROW_CELL_WIDTH.date} pl-8 tracking-wide`}>날짜</span>
    </h5>
  );
}

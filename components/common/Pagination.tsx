import { useEffect } from 'react';

interface PaginationProps {
  totalPostsCount: number;
  postsCountPerPage: number; // 한번에 보여줄 글 개수
  currentPage: number;
  setCurrentPage(pageNum: number): void;
  disabled?: boolean;
}

const PAGE_LIMIT = 10; // 페이지네이션 바에 한번에 보여줄 페이지 개수
const MAX_PAGE = 10000; // totalPostsCount 실제값이 아닌 추정치가 왔을 경우 사용할 마지막 페이지 번호

export default function Pagination({
  totalPostsCount,
  postsCountPerPage,
  currentPage,
  setCurrentPage,
  disabled = false,
}: PaginationProps) {
  const NUM_PAGES = Math.ceil((totalPostsCount || 1) / postsCountPerPage); // 전체 페이지 개수
  const firstNum = currentPage - ((currentPage - 1) % PAGE_LIMIT); // 페이지네이션 시작 번호

  // fetch하는 동안 NUM_PAGES가 1이 되기에 최솟값이 1이도록 처리
  const paginationNumberCnt = Math.max(1, Math.min(PAGE_LIMIT, NUM_PAGES - firstNum + 1));

  // // 페이지 범위 넘어가면 마지막 페이지로 리다이렉트
  if (NUM_PAGES < currentPage) setCurrentPage(NUM_PAGES);

  return (
    <div className={`flex justify-center ${disabled && 'opacity-30'}`}>
      <ul className="flex gap-x-[0.3125rem] font-yoon h-[1.375rem] mx-auto text-neutral-700 tracking-wide">
        <PaginationArrow
          iconName="keyboard_double_arrow_left"
          num={1}
          disabled={currentPage === 1 || disabled}
          movePageNumber={setCurrentPage}
        />
        <PaginationArrow
          iconName="navigate_before"
          num={firstNum - 1}
          disabled={firstNum === 1 || disabled}
          movePageNumber={setCurrentPage}
        />
        {Array(paginationNumberCnt)
          .fill(firstNum)
          .map((num, i) => (
            <PaginationNumber
              num={num + i}
              isSelected={currentPage === num + i}
              disabled={disabled}
              movePageNumber={setCurrentPage}
              key={i}
            />
          ))}
        <PaginationArrow
          iconName="navigate_next"
          num={firstNum + PAGE_LIMIT}
          disabled={firstNum + PAGE_LIMIT > NUM_PAGES || disabled}
          movePageNumber={setCurrentPage}
        />
        <PaginationArrow
          iconName="keyboard_double_arrow_right"
          num={currentPage === 1 ? MAX_PAGE : NUM_PAGES}
          disabled={currentPage === NUM_PAGES || disabled}
          movePageNumber={setCurrentPage}
        />
      </ul>
    </div>
  );
}

interface PaginationArrowProps {
  iconName: string;
  num: number;
  disabled: boolean;
  movePageNumber(num: number): void;
}

function PaginationArrow({ iconName, num, disabled, movePageNumber }: PaginationArrowProps) {
  const arrowStyle = disabled
    ? 'cursor-default text-neutral-400'
    : 'cursor-pointer hover:text-main-orange';

  return (
    <li className={arrowStyle} onClick={() => disabled || movePageNumber(num)}>
      <span className="material-symbols-rounded font-light text-xl">{iconName}</span>
    </li>
  );
}

interface PaginationNumberProps {
  num: number;
  isSelected: boolean;
  disabled: boolean;
  movePageNumber(num: number): void;
}

function PaginationNumber({ num, isSelected, disabled, movePageNumber }: PaginationNumberProps) {
  const cursorStyle = isSelected || disabled ? 'cursor-default' : 'cursor-pointer';
  const textStyle = isSelected ? 'text-main-orange' : disabled ? '' : 'hover:text-main-orange';

  return (
    <li
      className={`flex items-center justify-center px-2 ${cursorStyle} ${textStyle}`}
      onClick={() => !isSelected && !disabled && movePageNumber(num)}
    >
      <span className={`text-xs ${isSelected && 'font-bold underline'}`}>{num}</span>
    </li>
  );
}

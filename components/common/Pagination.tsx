interface PaginationProps {
  totalPostsCount: number;
  postsCountPerPage: number; // 한번에 보여줄 글 개수
  currentPage: number;
  setCurrentPage(pageNum: number): void;
  isDisabled?: boolean;
}

const PAGE_LIMIT = 10; // 페이지네이션 바에 한번에 보여줄 페이지 개수

export default function Pagination({
  totalPostsCount,
  postsCountPerPage,
  currentPage,
  setCurrentPage,
  isDisabled = false,
}: PaginationProps) {
  const NUM_PAGES = Math.ceil((totalPostsCount || 1) / postsCountPerPage); // 전체 페이지 개수
  const firstNum = currentPage - ((currentPage - 1) % PAGE_LIMIT); // 페이지네이션 시작 번호

  return (
    <div className={`flex justify-center ${isDisabled && 'opacity-30'}`}>
      <ul className="flex gap-x-[0.3125rem] font-yoon h-[1.375rem] mx-auto text-neutral-700 tracking-wide">
        <PaginationArrow
          iconName="keyboard_double_arrow_left"
          num={1}
          disabled={currentPage === 1 || isDisabled}
          movePageNumber={setCurrentPage}
        />
        <PaginationArrow
          iconName="navigate_before"
          num={firstNum - PAGE_LIMIT}
          disabled={firstNum === 1 || isDisabled}
          movePageNumber={setCurrentPage}
        />
        {Array(Math.min(PAGE_LIMIT, NUM_PAGES - firstNum + 1))
          .fill(firstNum)
          .map((num, i) => (
            <PaginationNumber
              num={num + i}
              isSelected={currentPage === num + i}
              isDisabled={isDisabled}
              movePageNumber={setCurrentPage}
              key={i}
            />
          ))}
        <PaginationArrow
          iconName="navigate_next"
          num={firstNum + PAGE_LIMIT}
          disabled={firstNum + PAGE_LIMIT > NUM_PAGES || isDisabled}
          movePageNumber={setCurrentPage}
        />
        <PaginationArrow
          iconName="keyboard_double_arrow_right"
          num={NUM_PAGES}
          disabled={currentPage === NUM_PAGES || isDisabled}
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
  isDisabled: boolean;
  movePageNumber(num: number): void;
}

function PaginationNumber({ num, isSelected, isDisabled, movePageNumber }: PaginationNumberProps) {
  const cursorStyle = isSelected || isDisabled ? 'cursor-default' : 'cursor-pointer';
  const textStyle = isSelected ? 'text-main-orange' : isDisabled ? '' : 'hover:text-main-orange';

  return (
    <li
      className={`flex items-center justify-center w-[22px] ${cursorStyle} ${textStyle}`}
      onClick={() => !isSelected && !isDisabled && movePageNumber(num)}
    >
      <span className={`text-xs ${isSelected && 'font-bold underline'}`}>{num}</span>
    </li>
  );
}

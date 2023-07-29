import { QueryParams } from '@/utils/search';

interface PaginationProps {
  total: number;
  limit: number;
  current: number;
  setCurrent(newParams: QueryParams, purpose: 'search' | 'pagination'): void;
}

const PAGE_LIMIT = 10;

export default function Pagination({ total, limit, current, setCurrent }: PaginationProps) {
  const NUM_PAGES = Math.ceil(total / limit);
  const firstNum = current - ((current - 1) % PAGE_LIMIT); // 페이지네이션 시작 번호

  const movePageNumber = (num: number) => {
    setCurrent({ page: `${num}` }, 'pagination');
  };

  return (
    <div className="flex justify-center">
      <ul className="flex gap-x-[0.3125rem] font-yoon h-[22px] mx-auto">
        <PaginationArrow
          iconName="keyboard_double_arrow_left"
          num={1}
          disabled={current === 1}
          movePageNumber={movePageNumber}
        />
        <PaginationArrow
          iconName="navigate_before"
          num={current - 1}
          disabled={firstNum === 1}
          movePageNumber={movePageNumber}
        />
        {Array(Math.min(limit, NUM_PAGES - firstNum + 1))
          .fill(firstNum)
          .map((num, i) => (
            <PaginationNumber
              num={num + i}
              isSelected={current === num + i}
              movePageNumber={movePageNumber}
              key={i}
            />
          ))}
        <PaginationArrow
          iconName="navigate_next"
          num={current + 1}
          disabled={firstNum + PAGE_LIMIT > NUM_PAGES}
          movePageNumber={movePageNumber}
        />
        <PaginationArrow
          iconName="keyboard_double_arrow_right"
          num={NUM_PAGES}
          disabled={current === NUM_PAGES}
          movePageNumber={movePageNumber}
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
  movePageNumber(num: number): void;
}

function PaginationNumber({ num, isSelected, movePageNumber }: PaginationNumberProps) {
  return (
    <li
      className={`flex items-center justify-center w-[22px] ${
        isSelected ? 'cursor-auto text-main-orange' : 'cursor-pointer'
      } hover:text-main-orange`}
      onClick={() => movePageNumber(num)}
    >
      <span className={`text-xs ${isSelected && 'font-bold underline'}`}>{num}</span>
    </li>
  );
}

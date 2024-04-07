'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { Link, useRouter } from '@/navigation';

import { urlSearchParamsToString } from '@/utils/convertParams';
import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import useResponsive from '@/utils/hooks/useResponsive';

interface PaginationProps {
  totalPostsCount: number;
  /** 한 페이지에 보여줄 글 개수 */
  postsCountPerPage: number;
  disabled?: boolean;
}

const MAX_PAGE = 10000; // totalPostsCount 실제값이 아닌 추정치가 왔을 경우 사용할 마지막 페이지 번호
const DESKTOP_PAGE_NUM_COUNT = 10;
const MOBILE_PAGE_NUM_COUNT = 5;

export default function Pagination({
  totalPostsCount,
  postsCountPerPage,
  disabled = false,
}: PaginationProps) {
  const router = useRouter();
  const { page } = useCustomSearchParams();
  const { isMobile } = useResponsive();
  // 페이지네이션 바에 보여줄 페이지 개수
  // TODO: 외부에서 설정 가능하게?
  const pageLimit = isMobile ? MOBILE_PAGE_NUM_COUNT : DESKTOP_PAGE_NUM_COUNT;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getURL = (page: number) => {
    const tmp = new URLSearchParams(searchParams);
    tmp.set('pageNum', page.toString());
    return `${pathname}${urlSearchParamsToString(tmp)}`;
  };

  const numPages = Math.ceil((totalPostsCount || 1) / postsCountPerPage); // 전체 페이지 개수
  const firstNum = page - ((page - 1) % pageLimit); // 페이지네이션 시작 번호

  // fetch하는 동안 NUM_PAGES가 1이 되기에 최솟값이 1이도록 처리
  const paginationNumberCnt = Math.max(1, Math.min(pageLimit, numPages - firstNum + 1));

  // 페이지 범위 넘어가면 마지막 페이지로 리다이렉트
  if (numPages < page) router.replace(getURL(numPages));

  return (
    <div className={`flex justify-center ${disabled && 'opacity-30'}`}>
      <ul className="mx-auto flex h-6 gap-x-2 tracking-wide text-neutral-800">
        <PaginationArrow
          iconName="keyboard_double_arrow_left"
          disabled={page === 1 || disabled}
          href={getURL(1)}
        />
        <PaginationArrow
          iconName="navigate_before"
          disabled={firstNum === 1 || disabled}
          href={getURL(firstNum - 1)}
        />
        <div className="flex gap-x-2 px-2">
          {Array(paginationNumberCnt)
            .fill(firstNum)
            .map((num, i) => (
              <PaginationNumber
                num={num + i}
                isSelected={page === num + i}
                disabled={disabled}
                href={getURL(num + i)}
                key={i}
              />
            ))}
        </div>
        <PaginationArrow
          iconName="navigate_next"
          disabled={firstNum + pageLimit > numPages || disabled}
          href={getURL(firstNum + pageLimit)}
        />
        <PaginationArrow
          iconName="keyboard_double_arrow_right"
          disabled={page === numPages || disabled}
          href={getURL(page === 1 ? MAX_PAGE : numPages)}
        />
      </ul>
    </div>
  );
}

interface PaginationArrowProps {
  iconName: string;
  disabled: boolean;
  href: string;
}

function PaginationArrow({ iconName, disabled, href }: PaginationArrowProps) {
  const arrowStyle = disabled
    ? 'cursor-default text-neutral-400 pointer-events-none'
    : 'cursor-pointer hover:text-main-orange';

  return (
    <Link className={arrowStyle} href={href}>
      <span className="material-symbols-rounded text-2xl font-light">{iconName}</span>
    </Link>
  );
}

interface PaginationNumberProps {
  num: number;
  isSelected: boolean;
  disabled: boolean;
  href: string;
}

function PaginationNumber({ num, isSelected, disabled, href }: PaginationNumberProps) {
  const cursorStyle =
    isSelected || disabled ? 'cursor-default pointer-events-none' : 'cursor-pointer';
  const textStyle = isSelected ? 'text-main-orange' : disabled ? '' : 'hover:text-main-orange';

  return (
    <Link
      className={`flex items-center justify-center px-2 ${cursorStyle} ${textStyle}`}
      href={href}
    >
      <span className={`text-md ${isSelected && 'font-bold underline'}`}>{num}</span>
    </Link>
  );
}

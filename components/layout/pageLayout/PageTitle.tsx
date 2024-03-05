'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

import { Link } from '@/navigation';

import { CurvedHorizontalNodeGray } from '@/components/common/Nodes';

import { getLocationLog, getPath } from '@/utils/page';
import { refreshPage } from '@/utils/refreshPage';
import { SegmentNode } from '@/utils/segmentNode';

interface PageTitleProps {
  title: string | JSX.Element;
  currentPage: SegmentNode;
  titleType: 'big' | 'small';
  margin: string;
}

export const PAGE_TITLE_LEFT_MARGIN_PX = 100;

export default function PageTitle({ title, currentPage, titleType, margin }: PageTitleProps) {
  const titleStyle = titleType === 'big' ? 'text-2xl font-bold' : 'text-lg font-medium';

  return (
    <div className="pt-[54px] px-5 sm:px-[100px]">
      <div
        className={`w-fit min-w-[15.625rem] max-w-[51.875rem] row-start-1 col-start-1 ${margin}`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Breadcrumb currentPage={currentPage} />
          <CurvedHorizontalNodeGray />
        </div>
        <h3
          className={`mr-[100px] ${titleStyle} text-[24px] sm:text-[32px] break-keep text-white tracking-wide `}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function Breadcrumb({ currentPage }: { currentPage: SegmentNode }) {
  const t = useTranslations('Nav');
  const log: SegmentNode[] = getLocationLog(currentPage);
  const exactCurrentPagePathname = usePathname(); // 정확한 현재 페이지 주소 (e.g. 공지목록에서 하위 페이지로 들어간 경우 currentPage가 목록 페이지로 되어있음)

  return log.length ? (
    <ol className="flex items-center gap-0.5 text-neutral-300">
      {log.map((location, i) => {
        return (
          <Fragment key={location.name}>
            <li className="flex">
              <LocationText
                path={location.isPage ? getPath(location) : null}
                name={t(location.name)}
                isCurrent={exactCurrentPagePathname === getPath(location)}
              />
            </li>
            {i !== log.length - 1 && (
              <li className="material-symbols-outlined text-xs font-extralight">
                arrow_forward_ios
              </li>
            )}
          </Fragment>
        );
      })}
    </ol>
  ) : null;
}

interface LoactionText {
  path: string | null;
  name: string;
  isCurrent: boolean;
}

function LocationText({ path, name, isCurrent }: LoactionText) {
  const textStyle = 'text-xs sm:text-md font-normal tracking-[.02em]';

  return isCurrent ? (
    <button className={`${textStyle} hover:text-main-orange`} onClick={refreshPage}>
      {name}
    </button>
  ) : path ? (
    <Link href={path} className={`${textStyle} hover:text-main-orange`}>
      {name}
    </Link>
  ) : (
    <span className={textStyle}>{name}</span>
  );
}

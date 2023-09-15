import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { Fragment } from 'react';

import { CurvedHorizontalNode } from '@/components/common/Nodes';

import { SegmentNode } from '@/types/page';

import { getLocationLog, getPath } from '@/utils/page';

interface PageTitleProps {
  title: string | JSX.Element;
  currentPage: SegmentNode;
  titleType: 'big' | 'small';
  margin: string;
}

export default function PageTitle({ title, currentPage, titleType, margin }: PageTitleProps) {
  const titleStyle = titleType === 'big' ? 'text-2xl font-bold' : 'text-lg font-medium';

  return (
    <div
      className={`w-fit min-w-[15.625rem] max-w-[51.875rem] row-start-1 col-start-1 ${margin} mt-1`}
    >
      <div className="flex gap-2 mb-2">
        <LocationLog currentPage={currentPage} />
        <CurvedHorizontalNode grow={true} />
      </div>
      <h3 className={`mr-[65px] ${titleStyle} break-keep font-yoon text-neutral-800 tracking-wide`}>
        {title}
      </h3>
    </div>
  );
}

function LocationLog({ currentPage }: { currentPage: SegmentNode }) {
  const t = useTranslations('Nav');
  const log: SegmentNode[] = getLocationLog(currentPage);
  const exactCurrentPagePathname = usePathname(); // 정확한 현재 페이지 주소 (목록에서 하위 페이지로 들어간 경우 currentPage가 목록 페이지로 되어있음)

  return log.length ? (
    <ol className="flex items-center gap-0.5 text-neutral-700">
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
  return path ? (
    <Link
      href={path}
      className="text-xs font-yoon font-normal tracking-[.02em] hover:text-main-orange"
      onClick={() => isCurrent && window.location.reload()}
    >
      {name}
    </Link>
  ) : (
    <span className="text-xs font-yoon font-normal tracking-[.02em]">{name}</span>
  );
}

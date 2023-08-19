import Link from 'next/link';
import { Fragment } from 'react';

import { CurvedHorizontalNode } from '@/components/common/Nodes';

import { SegmentNode } from '@/types/page';

import { getLocationLog, getPath } from '@/utils/page';

interface PageTitleProps {
  title: string;
  currentPage: SegmentNode;
  titleType: 'big' | 'small';
  margin: string;
}

export default function PageTitle({ title, currentPage, titleType, margin }: PageTitleProps) {
  const titleStyle = titleType === 'big' ? 'text-2xl font-bold' : 'text-lg font-medium';

  return (
    <div
      className={`w-fit min-w-[15.625rem] max-w-[51.875rem] row-start-1 col-start-1 ${margin} mt-3`}
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
  const log: SegmentNode[] = getLocationLog(currentPage);

  return (
    <ol className="flex items-center gap-0.5 text-neutral-700">
      {log.map((location, i) => {
        return (
          <Fragment key={location.name}>
            <li className="flex">
              <LocationText
                path={location.isPage ? getPath(location) : null}
                name={location.name}
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
  );
}

function LocationText({ path, name }: { path: string | null; name: string }) {
  return path ? (
    <Link
      href={path}
      className="text-xs font-yoon font-normal tracking-[.02em] hover:text-main-orange"
    >
      {name}
    </Link>
  ) : (
    <span className="text-xs font-yoon font-normal tracking-[.02em]">{name}</span>
  );
}

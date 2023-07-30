import Link from 'next/link';
import { Fragment } from 'react';

import { SegmentNode } from '@/types/page';

import { getLocationLog, getPath } from '@/utils/page';

import { CurvedHorizontalNode } from './Nodes';

interface PageTitleProps {
  title: string;
  currentPage: SegmentNode;
  textSize?: 'text-lg' | 'text-2xl';
}

export default function PageTitle({ title, currentPage, textSize }: PageTitleProps) {
  return (
    <div className="w-fit min-w-[250px] max-w-[830px] row-start-1 col-start-1">
      <div className="flex gap-2 mb-2">
        <LocationLog currentPage={currentPage} />
        <CurvedHorizontalNode grow={true} />
      </div>
      <h3 className={`mr-[65px] ${textSize} font-bold break-keep font-yoon`}>{title}</h3>
    </div>
  );
}

function LocationLog({ currentPage }: { currentPage: SegmentNode }) {
  const log: SegmentNode[] = getLocationLog(currentPage);

  return (
    <ol className="flex items-center gap-0.5">
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
      className="text-xs font-yoon font-normal tracking-[.015em] hover:text-main-orange"
    >
      {name}
    </Link>
  ) : (
    <span className="text-xs font-yoon font-normal tracking-[.015em]">{name}</span>
  );
}

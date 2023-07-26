import Link from 'next/link';
import { ReactNode } from 'react';

import { SegmentNode } from '@/types/page';

import { getLocationLog, getPath } from '@/utils/page';

import { CurvedHorizontalNode } from './Nodes';

interface PageTitleProps {
  currentPage: SegmentNode;
  margin?: string;
  children: ReactNode;
}

export default function PageTitle({ currentPage, margin = '', children }: PageTitleProps) {
  return (
    <div className={`w-fit min-w-[350px] max-w-[600px] ${margin}`}>
      <div className="flex gap-2 mb-2">
        <LocationLog currentPage={currentPage} />
        <CurvedHorizontalNode grow={true} />
      </div>
      <div className="mr-[55px]">{children}</div>
    </div>
  );
}

function LocationLog({ currentPage }: { currentPage: SegmentNode }) {
  const log: SegmentNode[] = getLocationLog(currentPage);

  return (
    <ol className="flex items-center gap-0.5">
      {log.map((location, i) => {
        return (
          <>
            <li key={location.name} className="flex">
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
          </>
        );
      })}
    </ol>
  );
}

function LocationText({ path, name }: { path: string | null; name: string }) {
  return path ? (
    <Link href={path} className="text-xs font-yoon font-normal tracking-[.015em] hover:underline">
      {name}
    </Link>
  ) : (
    <span className="text-xs font-yoon font-normal tracking-[.015em]">{name}</span>
  );
}

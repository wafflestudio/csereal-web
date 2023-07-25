import Link from 'next/link';
import { ReactNode } from 'react';

import { Location2 } from '@/types/common';

import { CurvedHorizontalNode } from './Nodes';

interface PageTitleProps {
  currentPage: Location2;
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

const calculateLog = (location: Location2) => {
  const log: Location2[] = [location];
  let curr = location;
  while (curr.parent !== null) {
    log.push(curr.parent);
    curr = curr.parent;
  }
  return log.reverse();
};

const getFullPath = (location: Location2) => {
  let fullPath = '/';
  let curr = location;
  while (curr.parent !== null) {
    fullPath = '/' + curr.path + fullPath;
    curr = curr.parent;
  }
  return fullPath;
};

function LocationLog({ currentPage }: { currentPage: Location2 }) {
  const log: Location2[] = calculateLog(currentPage);

  return (
    <ol className="flex items-center gap-0.5">
      {log.map((location, i) => {
        return (
          <>
            <li key={location.name} className="flex">
              <LocationText
                path={location.isPage ? getFullPath(location) : null}
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

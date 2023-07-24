import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

import { Location } from '@/types/common';

import { CurvedNode } from './Node';

interface PageTitleProps {
  locationLog: Location[];
  margin?: string;
  children: ReactNode;
}

export default function PageTitle({ locationLog, margin = '', children }: PageTitleProps) {
  return (
    <div className={`w-fit min-w-[350px] max-w-[600px] ${margin}`}>
      <div className="flex gap-2 mb-2">
        <LocationLog locations={locationLog} />
        <CurvedNode grow={true} />
      </div>
      <div className="mr-[55px]">{children}</div>
    </div>
  );
}

function LocationLog({ locations }: { locations: Location[] }) {
  return (
    <ol className="flex items-center gap-0.5">
      {locations.map((loca, i) => {
        return (
          <>
            <li key={loca.name} className="flex">
              <LocationText path={loca.path} name={loca.name} />
            </li>
            {i !== locations.length - 1 && (
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

function LocationText({ path, name }: { path?: string; name: string }) {
  if (path) {
    return (
      <Link href={path} className="text-xs font-yoon font-normal tracking-[.015em] hover:underline">
        {name}
      </Link>
    );
  } else {
    return <span className="text-xs font-yoon font-normal tracking-[.015em]">{name}</span>;
  }
}

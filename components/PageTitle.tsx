import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

import { Location } from '@/types/common';

import { CurvedNode } from './Node';

interface PageTitleProps {
  locationLog: Location[];
  children: ReactNode;
}

export default function PageTitle({ locationLog, children }: PageTitleProps) {
  return (
    <div className="w-fit min-w-[350px] max-w-[600px]">
      <div className="flex gap-2 mb-2">
        <LocationLog locations={locationLog} />
        <CurvedNode grow={true} />
      </div>
      {children}
    </div>
  );
}

function LocationLog({ locations }: { locations: Location[] }) {
  return (
    <div className="flex items-center gap-0.5">
      {locations.map((loca, i) => {
        return (
          <Fragment key={loca.name}>
            <LocationText path={loca.path} name={loca.name} />
            {i !== locations.length - 1 && (
              <span className="material-icons text-xs">arrow_forward_ios</span>
            )}
          </Fragment>
        );
      })}
    </div>
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

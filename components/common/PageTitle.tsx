import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

import { Location } from '@/types/common';

import { CurvedHorizontalNode } from './Nodes';

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
        <CurvedHorizontalNode grow={true} />
      </div>
      <div className="mr-[55px]">{children}</div>
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

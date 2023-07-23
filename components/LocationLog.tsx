import Link from 'next/link';
import { Fragment } from 'react';

import { Location } from '@/types/common';

export default function LocationLog({ locations }: { locations: Location[] }) {
  return (
    <div className="flex items-center gap-0.5">
      {locations.map((loca, i) => {
        return (
          <Fragment key={loca.name}>
            <LocationText path={loca.path} name={loca.name} />
            {i !== locations.length - 1 && (
              <span className="material-icons text-[0.32rem]">arrow_forward_ios</span>
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

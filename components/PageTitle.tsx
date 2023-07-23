import Link from 'next/link';

import { Location } from '@/types/common';

import { CurvedNode } from './Node';

interface PageTitleProps {
  locationLog: Location[];
  title: string;
}

export default function PageTitle({ locationLog, title }: PageTitleProps) {
  return (
    <div className="w-fit min-w-[350px] max-w-[600px]">
      <div className="flex gap-2 mb-2">
        <LocationLog locations={locationLog} />
        <CurvedNode grow={true} />
      </div>
      <h3 className="text-lg font-bold break-keep mr-[55px] font-yoon">{title}</h3>
    </div>
  );
}

function LocationLog({ locations }: { locations: Location[] }) {
  return (
    <div className="flex items-center w-fit text-sm gap-0.5">
      {locations.map((loca, i) => {
        return (
          <span key={loca.name} className="flex items-center gap-0.5">
            {loca.path ? (
              <Link href={loca.path} className="hover:underline">
                {loca.name}
              </Link>
            ) : (
              <span>{loca.name}</span>
            )}
            {i === locations.length - 1 ? null : (
              <span className="material-icons text-sm">arrow_forward_ios</span>
            )}
          </span>
        );
      })}
    </div>
  );
}

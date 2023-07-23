import { Location } from '@/types/common';

import LocationLog from './LocationLog';
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

import { LuChevronRight } from 'react-icons/lu';

import { CurvedNode } from './Node';

interface TitleProps {
  location: string[];
  title: string;
}

export default function Title({ location, title }: TitleProps) {
  return (
    <div className="w-fit min-w-[350px] max-w-[600px]">
      <div className="flex gap-2 mb-2">
        <Location location={location} />
        <CurvedNode grow={true} />
      </div>
      <h3 className="text-xl font-bold break-keep mr-[55px]">{title}</h3>
    </div>
  );
}

function Location({ location }: { location: string[] }) {
  return (
    <div className="flex items-center w-fit text-sm">
      {location.map((loca, i) => {
        return (
          <span key={loca} className="flex items-center">
            {loca}
            {i === location.length - 1 ? null : <LuChevronRight />}
          </span>
        );
      })}
    </div>
  );
}

'use client';

import { Link } from '@/navigation';

import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';


export default function ResearchGroupLabs({ labs }: { labs: { id: number; name: string }[] }) {
  return (
    <div className="mt-[40px]">
      <h3 className="font-bold text-[20px] mb-[4px] pl-2.5 py-1 leading-loose">연구실</h3>
      <ul>
        {labs.map((lab) => (
          <ResearchGroupLab lab={lab} key={lab.id} />
        ))}
      </ul>
    </div>
  );
}

const labPath = getPath(researchLabs);

function ResearchGroupLab({ lab }: { lab: { id: number; name: string } }) {
  return (
    <li className="mb-[0.125rem] w-fit">
      <Link href={`${labPath}/${lab.id}`} className="flex h-7 gap-2.5 px-3 items-center group">
        <div className="border border-main-orange rounded-full w-2.5 h-2.5 group-hover:bg-main-orange duration-300" />
        <span className="font-medium text-[14px] group-hover:text-main-orange duration-300">
          {lab.name}
        </span>
      </Link>
    </li>
  );
}

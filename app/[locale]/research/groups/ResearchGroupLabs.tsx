'use client';

import { Link } from '@/navigation';

import { researchLabs } from '@/constants/navTreeNode';

import { getPath } from '@/utils/page';

export default function ResearchGroupLabs({ labs }: { labs: { id: number; name: string }[] }) {
  return (
    <div className="mt-10 sm:mx-0">
      <h3 className="mb-1 whitespace-nowrap text-md font-bold leading-loose sm:py-1 sm:pl-2.5 sm:text-[20px]">
        연구실
      </h3>
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
    <li className="mb-[0.125rem] w-fit whitespace-nowrap">
      <Link href={`${labPath}/${lab.id}`} className="group flex h-7 items-center gap-2.5 sm:px-3">
        <div className="h-2.5 w-2.5 rounded-full border border-main-orange duration-300 group-hover:bg-main-orange" />
        <span className="text-sm font-medium duration-300 group-hover:text-main-orange sm:text-md">
          {lab.name}
        </span>
      </Link>
    </li>
  );
}

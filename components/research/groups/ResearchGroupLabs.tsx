import Link from 'next-intl/link';

import { researchLabs } from '@/types/page';

import { getPath } from '@/utils/page';

export default function ResearchGroupLabs({ labs }: { labs: { id: number; name: string }[] }) {
  return (
    <div>
      <h5 className="font-noto font-bold pl-2.5 py-1">연구실</h5>
      <div className="h-px bg-neutral-200 my-3" />
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
        <span className="font-medium text-sm group-hover:text-main-orange duration-300">
          {lab.name}
        </span>
      </Link>
    </li>
  );
}

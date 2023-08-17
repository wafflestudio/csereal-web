import Link from 'next/link';

import { researchLabs } from '@/types/page';

import { getPath } from '@/utils/page';

export default function ResearchGroupLabs({ labNames }: { labNames: string[] }) {
  return (
    <div>
      <h5 className="font-noto font-bold ml-2.5 py-1">연구실</h5>
      <div className="border border-neutral-200 my-3" />
      <ul className="">
        {labNames.map((name) => (
          <ResearchGroupLab labName={name} key={name} />
        ))}
      </ul>
    </div>
  );
}

const labPath = getPath(researchLabs);

function ResearchGroupLab({ labName }: { labName: string }) {
  return (
    <li className="mb-[0.125rem] w-fit">
      <Link href={`${labPath}/${labName}`} className="flex h-7 gap-2.5 px-3 items-center group">
        <div className="border border-main-orange rounded-full w-2.5 h-2.5 group-hover:bg-main-orange duration-300" />
        <span className="font-medium text-sm group-hover:text-main-orange duration-300">
          {labName}
        </span>
      </Link>
    </li>
  );
}

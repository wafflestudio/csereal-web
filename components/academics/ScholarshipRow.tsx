import Link from 'next/link';

import { undergraduateScholarship } from '@/types/page';

import { getPath } from '@/utils/page';

export interface ScholarshipRowProps {
  id: number;
  name: string;
}
const undergraduateScholarshipPath = getPath(undergraduateScholarship);

export function ScholarshipRow({ id, name }: ScholarshipRowProps) {
  return (
    <li className="w-fit my-1">
      <Link
        href={`${undergraduateScholarshipPath}/${id}`}
        className="flex h-7 gap-2.5 px-3 items-center group"
      >
        <div className="border border-main-orange rounded-full w-2.5 h-2.5 group-hover:bg-main-orange duration-300" />
        <span className="font-medium text-sm group-hover:text-main-orange duration-300">
          {name}
        </span>
      </Link>
    </li>
  );
}

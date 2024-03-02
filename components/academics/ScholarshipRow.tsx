'use client';
import { Link } from '@/navigation';

import { getPath } from '@/utils/page';
import { graduateScholarship, undergraduateScholarship } from '@/utils/segmentNode';


export interface ScholarshipRowProps {
  id: number;
  name: string;
  type: 'GRADUATE' | 'UNDERGRADUATE';
}
const undergraduateScholarshipPath = getPath(undergraduateScholarship);
const graduateScholarshipPath = getPath(graduateScholarship);

export function ScholarshipRow({ id, name, type }: ScholarshipRowProps) {
  return (
    <li className="w-fit my-1">
      <Link
        href={`${
          type === 'GRADUATE' ? graduateScholarshipPath : undergraduateScholarshipPath
        }/${id}`}
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

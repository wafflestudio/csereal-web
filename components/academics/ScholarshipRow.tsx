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
    <li className="w-fit py-2">
      <Link
        href={`${
          type === 'GRADUATE' ? graduateScholarshipPath : undergraduateScholarshipPath
        }/${id}`}
        className="group flex items-center gap-2.5 px-3"
      >
        <div className="h-2.5 w-2.5 shrink-0 rounded-full border border-main-orange duration-300 group-hover:bg-main-orange" />
        <span className="text-sm font-medium duration-300 group-hover:text-main-orange">
          {name}
        </span>
      </Link>
    </li>
  );
}

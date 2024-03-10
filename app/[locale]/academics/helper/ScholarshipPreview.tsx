import Link from 'next/link';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getPath } from '@/utils/page';
import { undergraduateScholarship, graduateScholarship } from '@/utils/segmentNode';

type GradeType = 'GRADUATE' | 'UNDERGRADUATE';

const undergraduateScholarshipPath = getPath(undergraduateScholarship);
const graduateScholarshipPath = getPath(graduateScholarship);

export default async function ScholarshipPreview({
  description,
  scholarshipList,
  type,
}: {
  description: string;
  scholarshipList: { id: number; name: string }[];
  type: GradeType;
}) {
  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={description} />
      <div className=" mt-10 flex flex-col">
        <h3 className="border-b-[1px] border-b-neutral-200 pb-2 text-[20px] font-bold leading-10">
          장학금 종류
        </h3>
        <ul className="mt-2">
          {scholarshipList.map((item) => (
            <ScholarshipRow id={item.id} name={item.name} key={item.id} type={type} />
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}

export interface ScholarshipRowProps {
  id: number;
  name: string;
  type: GradeType;
}

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

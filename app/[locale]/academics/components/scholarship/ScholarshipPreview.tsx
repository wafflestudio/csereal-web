'use client';

import { BlackButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateScholarship, undergraduateScholarship } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { StudentType } from '@/types/academics';
import { getPath } from '@/utils/page';

const undergraduateScholarshipPath = getPath(undergraduateScholarship);
const graduateScholarshipPath = getPath(graduateScholarship);

export default function ScholarshipPreview({
  description,
  scholarshipList,
  type,
}: {
  description: string;
  scholarshipList: { id: number; name: string }[];
  type: StudentType;
}) {
  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <EditButton type={type} />
      </LoginVisible>
      <HTMLViewer htmlContent={description} />
      <div className=" mt-10 flex flex-col">
        <h3 className="border-b-[1px] border-b-neutral-200 pb-2 text-[20px] font-bold leading-10">
          장학금 종류
        </h3>
        <ul className="mt-4">
          {scholarshipList.map((item) => (
            <ScholarshipRow id={item.id} name={item.name} key={item.id} type={type} />
          ))}
        </ul>
      </div>
      <LoginVisible staff>
        <CreateButton type={type} />
      </LoginVisible>
    </PageLayout>
  );
}

function EditButton({ type }: { type: StudentType }) {
  return (
    <Link href={`/academics/${type}/scholarship/edit`} className="mb-7 ml-auto block w-fit">
      <BlackButton title="편집" />
    </Link>
  );
}

function CreateButton({ type }: { type: StudentType }) {
  return (
    <Link
      href={`${
        type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath
      }/create`}
      className="mt-3 flex w-[220px] items-center gap-1.5 rounded-sm border border-main-orange px-2 py-2.5 text-main-orange duration-200 hover:bg-main-orange hover:text-white"
    >
      <span className="material-symbols-outlined font-light">add</span>
      <span className="text-md font-medium">장학금 추가</span>
    </Link>
  );
}

interface ScholarshipRowProps {
  id: number;
  name: string;
  type: StudentType;
}

export function ScholarshipRow({ id, name, type }: ScholarshipRowProps) {
  return (
    <li className="w-fit py-2">
      <Link
        href={`${
          type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath
        }/${id}`}
        className="group flex items-center gap-2.5 px-3"
      >
        <div className="h-2.5 w-2.5 shrink-0 rounded-full border border-main-orange duration-300 group-hover:bg-main-orange" />
        <span className="text-md font-medium duration-300 group-hover:text-main-orange">
          {name}
        </span>
      </Link>
    </li>
  );
}

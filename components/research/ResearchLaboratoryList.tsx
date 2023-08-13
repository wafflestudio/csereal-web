import Link from 'next/link';
import { Fragment } from 'react';

import { faculty, laboratories } from '@/types/page';
import { ResearchLabInfo } from '@/types/research';

import { getPath } from '@/utils/page';

interface ResearchLaboratoryListProps {
  labInfos: ResearchLabInfo[];
}

export default function ResearchLaboratoryList({ labInfos }: ResearchLaboratoryListProps) {
  return (
    <div>
      <LaboratoryListTitle />
      <ul className="divide-y divide-neutral-200 divide-dashed font-noto border-b border-neutral-200">
        {labInfos.map((lab) => (
          <LaboratoryListRow lab={lab} key={lab.name} />
        ))}
      </ul>
    </div>
  );
}

function LaboratoryListTitle() {
  return (
    <h5 className="flex font-yoon items-center h-10 text-xs border-b border-neutral-300">
      <span className="px-3 w-56">연구실</span>
      <span className="px-3 w-[6.75rem]">지도교수</span>
      <span className="px-3 w-64">연구실 위치</span>
      <span className="px-3 w-[6.5rem]">전화</span>
      <span className="px-3 w-[4.5rem]">약자</span>
      <span className="px-3 w-[4.75rem]">소개 자료</span>
    </h5>
  );
}

const laboratoriesPath = getPath(laboratories);
const facultyPath = getPath(faculty);

function LaboratoryListRow({ lab }: { lab: ResearchLabInfo }) {
  return (
    <li className="flex items-center h-14 text-xs">
      <span className="px-3 w-56 hover:text-main-orange">
        <Link href={`${laboratoriesPath}/${lab.name}`}>{lab.name}</Link>
      </span>
      <span className="px-3 w-[6.75rem] text-neutral-400">
        {lab.professors.map((prof, i) => (
          <Fragment key={prof}>
            <Link
              href={`${facultyPath}/${prof}`}
              className="hover:underline hover:text-neutral-700"
            >
              {prof}
            </Link>
            {i !== lab.professors.length - 1 && <span>, </span>}
          </Fragment>
        ))}
      </span>
      <span className="px-3 w-64 text-neutral-400">{lab.location}</span>
      <span className="px-3 w-[6.5rem] text-neutral-400">{lab.tel}</span>
      <span className="px-3 w-[4.5rem] text-neutral-400">{lab.acronym}</span>
      <span className="px-3 w-[4.75rem] text-neutral-400 flex items-center gap-3">
        {lab.introductionMaterials.attachment && (
          <span className="material-symbols-outlined text-[1.25rem] hover:text-neutral-700">
            draft
          </span>
        )}
        {lab.introductionMaterials.youtube && (
          <Link href={lab.introductionMaterials.youtube} className="h-5">
            <span className="material-symbols-outlined text-[1.25rem] hover:text-neutral-700">
              youtube_activity
            </span>
          </Link>
        )}
      </span>
    </li>
  );
}

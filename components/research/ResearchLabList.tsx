import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import youtubeIcon from '@/public/image/youtube_icon.svg';

import { faculty, researchLabs } from '@/types/page';
import { ResearchLabInfo } from '@/types/research';

import { getPath } from '@/utils/page';

interface ResearchLabListProps {
  labInfos: ResearchLabInfo[];
}

export default function ResearchLabList({ labInfos }: ResearchLabListProps) {
  return (
    <div>
      <LabListTitle />
      <ul className="divide-y divide-neutral-200 divide-dashed font-noto border-b border-neutral-200">
        {labInfos.map((lab) => (
          <LabListRow lab={lab} key={lab.name} />
        ))}
      </ul>
    </div>
  );
}

function LabListTitle() {
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

const laboratoriesPath = getPath(researchLabs);
const facultyPath = getPath(faculty);

function LabListRow({ lab }: { lab: ResearchLabInfo }) {
  const imageColorFilter =
    'invert-[.64] sepia-0 saturate-0 hue-rotate-[142deg] brightness-100 contrast-[.98]';
  const imageHoverColorFilter =
    'hover:invert-[.21] hover:sepia-[.16] hover:saturate-0 hover:hue-rotate-[286deg] hover:brightness-[.101] hover:contrast-[.90]';

  return (
    <li className="flex items-center h-14 text-xs">
      <span className="px-3 w-56 hover:text-main-orange">
        <Link href={`${laboratoriesPath}/${lab.name}`}>{lab.name}</Link>
      </span>
      <span className="px-3 w-[6.75rem] text-neutral-400">
        {lab.professors.map((prof, i) => (
          <Fragment key={prof}>
            <Link href={`${facultyPath}/${prof}`} className="hover:text-neutral-700">
              {prof}
            </Link>
            {i !== lab.professors.length - 1 && <span>, </span>}
          </Fragment>
        ))}
      </span>
      <span className="px-3 w-64 text-neutral-400">{lab.location}</span>
      <span className="px-3 w-[6.5rem] text-neutral-400">{lab.tel}</span>
      <span className="px-3 w-[4.5rem] text-neutral-400">{lab.acronym}</span>
      <span className="px-3 w-[4.75rem] flex items-center gap-3">
        {lab.introductionMaterials.pdf && (
          <Link
            href={lab.introductionMaterials.pdf}
            download={`${lab.name} 소개자료`}
            className="h-5"
            title="PDF"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[1.25rem] text-neutral-400  hover:text-neutral-700">
              draft
            </span>
          </Link>
        )}
        {lab.introductionMaterials.youtube && (
          <Link
            href={lab.introductionMaterials.youtube}
            className="h-5 py-[0.1875rem]"
            title="YOUTUBE"
          >
            <Image
              src={youtubeIcon}
              width={20}
              alt="youtube_link"
              className={`${imageColorFilter} ${imageHoverColorFilter}`}
            />
          </Link>
        )}
      </span>
    </li>
  );
}

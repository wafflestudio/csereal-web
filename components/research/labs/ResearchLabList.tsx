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

const laboratoriesPath = getPath(researchLabs);
const facultyPath = getPath(faculty);

export default function ResearchLabList({ labInfos }: ResearchLabListProps) {
  return (
    <div className="w-[48.75rem] border-y border-neutral-200">
      <LabListHeader />
      <ul className="divide-y divide-neutral-200 divide-dashed font-noto ">
        {labInfos.map((lab) => (
          <LabListRow lab={lab} key={lab.name} />
        ))}
      </ul>
    </div>
  );
}

const LAB_ROW_ITEM_WIDTH = {
  name: 'w-56',
  professor: 'w-[6.75rem]',
  location: 'w-[11.75rem]',
  tel: 'w-28',
  acronym: 'w-[4.5rem]',
  introMaterial: 'w-[4.75rem]',
} as const;

function LabListHeader() {
  return (
    <h5 className="flex font-yoon items-center h-10 text-xs border-b border-neutral-200 bg-neutral-50 [&>span]:px-3">
      <span className={LAB_ROW_ITEM_WIDTH.name}>연구실</span>
      <span className={LAB_ROW_ITEM_WIDTH.professor}>지도교수</span>
      <span className={LAB_ROW_ITEM_WIDTH.location}>연구실 위치</span>
      <span className={LAB_ROW_ITEM_WIDTH.tel}>전화</span>
      <span className={LAB_ROW_ITEM_WIDTH.acronym}>약자</span>
      <span className={LAB_ROW_ITEM_WIDTH.introMaterial}>소개 자료</span>
    </h5>
  );
}

const NEUTRAL_400_FILTER =
  'invert-[.64] sepia-0 saturate-0 hue-rotate-[142deg] brightness-100 contrast-[.98]';
const NEUTRAL_700_HOVER_FILTER =
  'hover:invert-[.21] hover:sepia-[.16] hover:saturate-0 hover:hue-rotate-[286deg] hover:brightness-[.101] hover:contrast-[.90]';

function LabListRow({ lab }: { lab: ResearchLabInfo }) {
  return (
    <li className="flex items-center h-14 text-xs [&>span]:px-3">
      <span className={`${LAB_ROW_ITEM_WIDTH.name} hover:text-main-orange`}>
        <Link href={`${laboratoriesPath}/${lab.name}`}>{lab.name}</Link>
      </span>
      <span className={`${LAB_ROW_ITEM_WIDTH.professor} text-neutral-400`}>
        {lab.professors.map((prof, i) => (
          <Fragment key={prof}>
            <Link href={`${facultyPath}/${prof}`} className="hover:text-neutral-700">
              {prof}
            </Link>
            {i !== lab.professors.length - 1 && ', '}
          </Fragment>
        ))}
      </span>
      <span className={`${LAB_ROW_ITEM_WIDTH.location} text-neutral-400`}>{lab.location}</span>
      <span className={`${LAB_ROW_ITEM_WIDTH.tel} text-neutral-400`}>{lab.tel}</span>
      <span className={`${LAB_ROW_ITEM_WIDTH.acronym} text-neutral-400`}>{lab.acronym}</span>
      <span className={`${LAB_ROW_ITEM_WIDTH.introMaterial} flex items-center gap-3`}>
        <LabIntroMaterials
          labName={lab.name}
          pdf={lab.introductionMaterials.pdf}
          youtube={lab.introductionMaterials.youtube}
        />
      </span>
    </li>
  );
}

interface LabIntroMaterialsProps {
  labName: string;
  pdf: string | null;
  youtube: string | null;
}

function LabIntroMaterials({ labName, pdf, youtube }: LabIntroMaterialsProps) {
  return (
    <>
      {pdf && (
        <Link
          href={pdf}
          download={`${labName} 소개자료`}
          className="h-5"
          title="PDF"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[1.25rem] text-neutral-400  hover:text-neutral-700">
            draft
          </span>
        </Link>
      )}
      {youtube && (
        <Link href={youtube} className="h-5 py-[0.1875rem]" title="YOUTUBE">
          <Image
            src={youtubeIcon}
            width={20}
            alt="youtube_link"
            className={`${NEUTRAL_400_FILTER} ${NEUTRAL_700_HOVER_FILTER}`}
          />
        </Link>
      )}
    </>
  );
}

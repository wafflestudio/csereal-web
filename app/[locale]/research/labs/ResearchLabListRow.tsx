'use client';

import { Fragment } from 'react';

import { Link } from '@/navigation';
import YoutubeIcon from '@/public/image/youtube_icon.svg';

import { SimpleResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';
import { faculty, researchLabs } from '@/utils/segmentNode';

export const LAB_ROW_ITEM_WIDTH = {
  name: 'sm:w-[14.5rem]',
  professor: 'sm:w-[6.875rem]',
  location: 'sm:w-[12.5rem]',
  tel: 'sm:w-[7.5rem]',
  acronym: 'sm:w-20',
  introMaterial: 'sm:w-[5.625rem]',
} as const;

const laboratoriesPath = getPath(researchLabs);
const facultyPath = getPath(faculty);

export default function ResearchLabListRow({ lab }: { lab: SimpleResearchLab }) {
  return (
    <li className="grid grid-cols-[auto,_1fr] grid-rows-5 gap-2 sm:gap-0 sm:flex sm:flex-nowrap items-end sm:items-center sm:h-14 text-sm sm:pl-2 sm:px-0 sm:py-0 px-7 py-6 sm:[&>span]:px-3 tracking-[0.02em]  bg-white odd:bg-neutral-50 sm:odd:bg-white">
      <NameCell name={lab.name} id={lab.id} />
      <ProfessorsCell professors={lab.professors} />
      <LocationCell location={lab.location} />
      <TelephoneCell tel={lab.tel} />
      <AcronymCell acronym={lab.acronym} />
      <IntroMaterialsCell
        labName={lab.name}
        pdf={lab.introductionMaterials.pdf}
        youtube={lab.introductionMaterials.youtube}
      />
    </li>
  );
}

function NameCell({ name, id }: { name: string; id: number }) {
  return (
    <span
      className={`${LAB_ROW_ITEM_WIDTH.name} order-first text-base sm:text-sm font-semibold sm:font-normal whitespace-nowrap sm:whitespace-normal row-span-1 col-span-1`}
    >
      <Link className="hover:text-main-orange" href={`${laboratoriesPath}/${id}`}>
        {name}
      </Link>
    </span>
  );
}

function ProfessorsCell({ professors }: { professors: { id: number; name: string }[] }) {
  return (
    <span
      className={`${LAB_ROW_ITEM_WIDTH.professor} text-neutral-800 sm:text-neutral-400 col-span-3 text-md sm:text-sm`}
    >
      <span className="sm:hidden">지도교수: </span>
      {professors.map((info, i) => (
        <Fragment key={info.id}>
          <Link
            href={`${facultyPath}/${info.id}`}
            className="hover:text-main-orange sm:hover:text-neutral-800"
          >
            {info.name}
          </Link>
          {i !== professors.length - 1 && ', '}
        </Fragment>
      ))}
    </span>
  );
}

function LocationCell({ location }: { location: string }) {
  return (
    <span className={`${LAB_ROW_ITEM_WIDTH.location} text-neutral-400 col-span-3`}>{location}</span>
  );
}

function TelephoneCell({ tel }: { tel: string }) {
  return <span className={`${LAB_ROW_ITEM_WIDTH.tel} text-neutral-400`}>{tel}</span>;
}

function AcronymCell({ acronym }: { acronym: string }) {
  return (
    <span
      className={`${LAB_ROW_ITEM_WIDTH.acronym} text-main-orange sm:text-neutral-400 -order-2 sm:order-none col-span-2 row-span-1`}
    >
      {acronym}
    </span>
  );
}

interface LabIntroMaterialsProps {
  labName: string;
  pdf: string | null;
  youtube: string | null;
}

function IntroMaterialsCell({ labName, pdf, youtube }: LabIntroMaterialsProps) {
  return (
    <span className={`${LAB_ROW_ITEM_WIDTH.introMaterial} flex items-center gap-3 col-span-3`}>
      {pdf && (
        <a
          href={pdf}
          download={`${labName} 소개자료`}
          className="h-5"
          title="PDF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[1.25rem] text-neutral-400  hover:text-neutral-800">
            draft
          </span>
        </a>
      )}
      {youtube && (
        <a
          href={youtube}
          className="h-5 py-[0.1875rem]"
          title="YOUTUBE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon className="fill-neutral-400 hover:fill-neutral-800" />
        </a>
      )}
    </span>
  );
}

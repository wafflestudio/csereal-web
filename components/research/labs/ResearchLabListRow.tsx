'use client';

import { Fragment } from 'react';

import { Link } from '@/navigation';
import YoutubeIcon from '@/public/image/youtube_icon.svg';

import { faculty, researchLabs } from '@/types/page';
import { SimpleResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';

export const LAB_ROW_ITEM_WIDTH = {
  name: 'w-[14.5rem]',
  professor: 'w-[6.875rem]',
  location: 'w-[12.5rem]',
  tel: 'w-[7.5rem]',
  acronym: 'w-20',
  introMaterial: 'w-[5.625rem]',
} as const;

const laboratoriesPath = getPath(researchLabs);
const facultyPath = getPath(faculty);

export default function ResearchLabListRow({ lab }: { lab: SimpleResearchLab }) {
  return (
    <li className="flex items-center h-14 text-sm pl-2 [&>span]:px-3 tracking-[0.02em]">
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
    <span className={`${LAB_ROW_ITEM_WIDTH.name}`}>
      <Link className="hover:text-main-orange" href={`${laboratoriesPath}/${id}`}>
        {name}
      </Link>
    </span>
  );
}

function ProfessorsCell({ professors }: { professors: { id: number; name: string }[] }) {
  return (
    <span className={`${LAB_ROW_ITEM_WIDTH.professor} text-neutral-400`}>
      {professors.map((info, i) => (
        <Fragment key={info.id}>
          <Link href={`${facultyPath}/${info.id}`} className="hover:text-neutral-800">
            {info.name}
          </Link>
          {i !== professors.length - 1 && ', '}
        </Fragment>
      ))}
    </span>
  );
}

function LocationCell({ location }: { location: string }) {
  return <span className={`${LAB_ROW_ITEM_WIDTH.location} text-neutral-400`}>{location}</span>;
}

function TelephoneCell({ tel }: { tel: string }) {
  return <span className={`${LAB_ROW_ITEM_WIDTH.tel} text-neutral-400`}>{tel}</span>;
}

function AcronymCell({ acronym }: { acronym: string }) {
  return <span className={`${LAB_ROW_ITEM_WIDTH.acronym} text-neutral-400`}>{acronym}</span>;
}

interface LabIntroMaterialsProps {
  labName: string;
  pdf: string | null;
  youtube: string | null;
}

function IntroMaterialsCell({ labName, pdf, youtube }: LabIntroMaterialsProps) {
  return (
    <span className={`${LAB_ROW_ITEM_WIDTH.introMaterial} flex items-center gap-3`}>
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

import Link from 'next/link';
import { Fragment } from 'react';

import YoutubeIcon from '@/public/image/youtube_icon.svg';

import { faculty, researchLabs } from '@/types/page';
import { ResearchLabInfo } from '@/types/research';

import { getPath } from '@/utils/page';

export const LAB_ROW_ITEM_WIDTH = {
  name: 'w-56',
  professor: 'w-[6.75rem]',
  location: 'w-[11.75rem]',
  tel: 'w-28',
  acronym: 'w-[4.5rem]',
  introMaterial: 'w-[4.75rem]',
} as const;

const laboratoriesPath = getPath(researchLabs);
const facultyPath = getPath(faculty);

export default function ResearchLabListRow({ lab }: { lab: ResearchLabInfo }) {
  return (
    <li className="flex items-center h-14 text-xs [&>span]:px-3">
      <NameCell name={lab.name} />
      <ProfessorsCell professorNames={lab.professors} />
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

function NameCell({ name }: { name: string }) {
  return (
    <span className={`${LAB_ROW_ITEM_WIDTH.name}`}>
      <Link className="hover:text-main-orange" href={`${laboratoriesPath}/${name}`}>
        {name}
      </Link>
    </span>
  );
}

function ProfessorsCell({ professorNames }: { professorNames: string[] }) {
  return (
    <span className={`${LAB_ROW_ITEM_WIDTH.professor} text-neutral-400`}>
      {professorNames.map((name, i) => (
        <Fragment key={name}>
          <Link href={`${facultyPath}/${name}`} className="hover:text-neutral-700">
            {name}
          </Link>
          {i !== professorNames.length - 1 && ', '}
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
          <YoutubeIcon className="fill-neutral-400 hover:fill-neutral-700" />
        </Link>
      )}
    </span>
  );
}

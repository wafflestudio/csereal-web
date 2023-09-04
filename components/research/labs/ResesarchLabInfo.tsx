import Link from 'next/link';
import { Fragment } from 'react';

import StickyNote from '@/public/image/sticky_note.svg';

import { faculty } from '@/types/page';
import { ResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';

export default function ResearchLabInfo({ lab }: { lab: ResearchLab }) {
  return (
    <div className="mt-[-64px] mb-11 ml-11 w-60 h-40 border">
      <StickyNote />
      <ul className="absolute top-[-64px] w-60 h-40 py-5 px-6 flex flex-col gap-1 font-noto">
        <ProfessorsInfo professors={lab.professors} />
        <LocationInfo location={'테ㅡ트'} />
        <TelephoneInfo tel={lab.tel} />
        <WebsiteInfo url={lab.websiteURL} />
      </ul>
    </div>
  );
}

const facultyPath = getPath(faculty);

function ProfessorsInfo({ professors }: { professors: { id: number; name: string }[] }) {
  return (
    <li className="text-sm flex gap-1">
      <span className="whitespace-nowrap">
        교수:{' '}
        {professors.map((info, i) => (
          <Fragment key={info.id}>
            <Link href={`${facultyPath}/${info.id}`} className="hover:text-main-orange">
              {info.name}
            </Link>
            {i !== professors.length - 1 && ', '}
          </Fragment>
        ))}
      </span>
    </li>
  );
}

function LocationInfo({ location }: { location: string }) {
  return (
    <li className="text-sm flex gap-1">
      <span className="whitespace-nowrap">랩실: </span>
      <span>{location}</span>
    </li>
  );
}

function TelephoneInfo({ tel }: { tel: string }) {
  return (
    <li className="text-sm flex gap-1 grow">
      <span className="whitespace-nowrap">전화: {tel}</span>
    </li>
  );
}

function WebsiteInfo({ url }: { url: string }) {
  return (
    <li>
      <Link href={url} className="mt-auto w-fit underline text-sm hover:text-main-orange">
        Website
      </Link>
    </li>
  );
}

import { Fragment } from 'react';

import { Link } from '@/navigation';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle';

import { COLOR_THEME } from '@/constants/color';

import { ResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';
import { faculty } from '@/utils/segmentNode';

export default function ResearchLabInfo({ lab }: { lab: ResearchLab }) {
  const dropShadow = 'drop-shadow(1px 2px 2px rgba(0,0,0,0.25))';
  const triangleLength = 2.5; // 20px
  const radius = 0.125; // 2px

  return (
    <CornerFoldedRectangle
      triangleDropShadow={dropShadow}
      radius={radius}
      triangleLength={triangleLength}
      colorTheme={COLOR_THEME.black}
      margin="sm:mt-[-64px] sm:mb-11 sm:ml-11"
    >
      <ul className="flex h-40 w-60 flex-col gap-1 px-6 py-5">
        <ProfessorsInfo professors={lab.professors} />
        <LocationInfo location={lab.location} />
        <TelephoneInfo tel={lab.tel} />
        <WebsiteInfo url={lab.websiteURL} />
      </ul>
    </CornerFoldedRectangle>
  );
}

const facultyPath = getPath(faculty);

function ProfessorsInfo({ professors }: { professors: { id: number; name: string }[] }) {
  return (
    <li className="flex gap-1 text-sm">
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
    <li className="flex gap-1 text-sm">
      <span className="whitespace-nowrap">랩실: </span>
      <span>{location}</span>
    </li>
  );
}

function TelephoneInfo({ tel }: { tel: string }) {
  return (
    <li className="flex grow gap-1 text-sm">
      <span className="whitespace-nowrap">전화: {tel}</span>
    </li>
  );
}

function WebsiteInfo({ url }: { url: string }) {
  return (
    <li>
      <Link href={url} className="mt-auto w-fit text-sm underline hover:text-main-orange">
        Website
      </Link>
    </li>
  );
}

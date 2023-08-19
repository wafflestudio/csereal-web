import Link from 'next/link';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle';

import { COLOR_THEME } from '@/constants/color';

import { ResearchLab } from '@/types/research';

export default function ResearchLabInfo({ lab }: { lab: ResearchLab }) {
  const dropShadow = 'drop-shadow(1px 2px 2px rgba(0,0,0,0.25)';
  const triangleLength = 2.5; // 20px
  const radius = 0.125; // 2px

  return (
    <CornerFoldedRectangle
      triangleDropShadow={dropShadow}
      rectangleDropShadow={dropShadow}
      radius={radius}
      triangleLength={triangleLength}
      colorTheme={COLOR_THEME.white}
      margin="mt-[-64px] mb-11 ml-11"
    >
      <ul className="w-60 h-40 py-5 px-6 flex flex-col gap-1 font-noto">
        <ProfessorsInfo professors={lab.professors} />
        <LocationInfo location={lab.location} />
        <TelephoneInfo tel={lab.tel} />
        <WebsiteInfo url={lab.websiteURL} />
      </ul>
    </CornerFoldedRectangle>
  );
}

function ProfessorsInfo({ professors }: { professors: string[] }) {
  return (
    <li className="text-sm flex gap-1">
      <span className="whitespace-nowrap">교수: </span>
      <span> {professors.join(', ')}</span>
    </li>
  );
}

function LocationInfo({ location }: { location: string }) {
  return (
    <li className="text-sm flex gap-1">
      <span className="whitespace-nowrap">랩실: </span> <span>{location}</span>
    </li>
  );
}

function TelephoneInfo({ tel }: { tel: string }) {
  return (
    <li className="text-sm flex gap-1 grow">
      <span className="whitespace-nowrap">전화: </span> <span>{tel}</span>
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

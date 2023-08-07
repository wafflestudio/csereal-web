import Link from 'next/link';

import { COLOR_THEME } from '@/constants/color';

import { Club } from '@/types/club';
import { studentClubs } from '@/types/page';

import { getPath } from '@/utils/page';

import CornerFoldedRectangle from '../common/CornerFoldedRectangle';

interface ClubListProps {
  clubs: Club[];
  selectedClub?: Club;
}

const clubPath = getPath(studentClubs);

export default function ClubList({ clubs, selectedClub }: ClubListProps) {
  return (
    <ul className="grid grid-cols-4 gap-3 mb-8">
      {clubs.map((club) => (
        <ClubItem key={club.name} name={club.name} isSelected={selectedClub?.name === club.name} />
      ))}
    </ul>
  );
}

interface ClubItemProps {
  name: string;
  isSelected: boolean;
}

function ClubItem({ name, isSelected }: ClubItemProps) {
  const itemCommonStyle = 'w-[12.5625rem] h-10 py-3 text-center text-sm tracking-wide font-yoon';
  const dropShadow = 'drop-shadow(1px 2px 4px rgba(0,0,0,0.25)';

  return isSelected ? (
    <li>
      <CornerFoldedRectangle
        colorTheme={COLOR_THEME.orange}
        rectClassName={`${itemCommonStyle} text-white`}
        triangleLength={1.25}
        radius={0.125}
        triangleDropShadow={dropShadow}
      >
        {name}
      </CornerFoldedRectangle>
    </li>
  ) : (
    <li>
      <Link
        href={`${clubPath}?selected=${name}`}
        className={`${itemCommonStyle} block bg-neutral-100 text-neutral-500`}
      >
        {name}
      </Link>
    </li>
  );
}

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
  const itemCommonStyle =
    'block w-[12.5625rem] h-10 py-3 text-center text-sm tracking-wide font-yoon';
  const dropShadow = 'drop-shadow(1px 2px 4px rgba(0,0,0,0.25)';

  return (
    <li>
      <CornerFoldedRectangle
        colorTheme={isSelected ? COLOR_THEME.orange : COLOR_THEME.lightGray}
        triangleLength={1.25}
        radius={0.125}
        triangleDropShadow={dropShadow}
        isAnimated={!isSelected}
      >
        {isSelected ? (
          <span className={`${itemCommonStyle} text-white`}>{name}</span>
        ) : (
          <Link
            href={`${clubPath}?selected=${name}`}
            className={`${itemCommonStyle} text-neutral-500`}
          >
            {name}
          </Link>
        )}
      </CornerFoldedRectangle>
    </li>
  );
}

import { Dispatch, SetStateAction } from 'react';

import { COLOR_THEME } from '@/constants/color';

import { Club } from '@/types/club';

import CornerFoldedRectangle from '../common/CornerFoldedRectangle';

interface ClubListProps {
  clubs: Club[];
  selectedClub: Club | undefined;
  setSelectedClub: Dispatch<SetStateAction<Club | undefined>>;
}

export default function ClubList({ clubs, selectedClub, setSelectedClub }: ClubListProps) {
  return (
    <ul className="grid grid-cols-4 gap-3 mb-8">
      {clubs.map((club) => (
        <ClubItem
          key={club.name}
          name={club.name}
          isSelected={selectedClub?.name === club.name}
          selectClub={() => setSelectedClub(club)}
        />
      ))}
    </ul>
  );
}

interface ClubItemProps {
  name: string;
  isSelected: boolean;
  selectClub(): void;
}

function ClubItem({ name, isSelected, selectClub }: ClubItemProps) {
  const itemCommonStyle = 'w-[12.5625rem] h-10 py-3 text-center text-sm tracking-wide font-yoon';
  const dropShadow = 'drop-shadow(1px 2px 4px rgba(0,0,0,0.25)';

  return isSelected ? (
    <li>
      <CornerFoldedRectangle
        colorTheme={COLOR_THEME.orange}
        rectClassName={`${itemCommonStyle} rounded-sm text-white`}
        triangleLength={20}
        radius={2}
        triangleDropShadow={dropShadow}
      >
        {name}
      </CornerFoldedRectangle>
    </li>
  ) : (
    <li
      className={`${itemCommonStyle} bg-neutral-100 text-neutral-500 cursor-pointer`}
      onClick={selectClub}
    >
      {name}
    </li>
  );
}

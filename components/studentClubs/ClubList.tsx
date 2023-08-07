import { Dispatch, SetStateAction } from 'react';

import { MAIN_ORANGE, NEUTRAL_100 } from '@/constants/color';

import { Club } from '@/types/club';

import CornerFoldedRectangle from '../common/CornerFoldedRectangle';

interface ClubListProps {
  clubs: Club[];
  selectedClub: Club | null;
  setSelectedClub: Dispatch<SetStateAction<Club | null>>;
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

  return isSelected ? (
    <li>
      <CornerFoldedRectangle
        rectBgColor={MAIN_ORANGE}
        rectClassName={`${itemCommonStyle} rounded-sm`}
        triangleColor={NEUTRAL_100}
        triangleLength={18}
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

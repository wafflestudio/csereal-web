import { Dispatch, SetStateAction } from 'react';

import { Club } from '@/types/club';

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
  const itemStyle = isSelected
    ? 'bg-[linear-gradient(-135deg,_transparent_13px,_#ff6914_0)] text-white'
    : 'bg-neutral-100 text-neutral-500 cursor-pointer';

  return (
    <li
      className={`relative w-[201px] h-[40px] py-3 rounded-sm text-center text-sm tracking-wide font-yoon ${itemStyle}`}
      onClick={isSelected ? () => {} : selectClub}
    >
      {name}
      {isSelected && (
        <svg
          className="triangle absolute top-0 right-0 drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
          viewBox="0 0 100 100"
          width="18"
          height="18"
        >
          <polygon points="0, 100 0 0, 100 100" fill="#f5f5f5" />
        </svg>
      )}
    </li>
  );
}

import Link from 'next/link';

import { studentClubs } from '@/types/page';

import { getPath } from '@/utils/page';

interface Club {
  name: string;
  eng: string;
}

const CLUBS: Club[] = [
  { name: '와플스튜디오', eng: 'Waffle Studio' },
  { name: '바쿠스', eng: 'Baccus' },
  { name: '사커301', eng: 'Soccer 301' },
  { name: '슈타인', eng: 'Stein' },
  { name: '스눕스', eng: 'Snups' },
  { name: '유피넬', eng: 'UPNL' },
];

export default function ClubList({ currentClubName }: { currentClubName?: string }) {
  return (
    <ul className="grid grid-cols-4 gap-3 mb-8">
      {CLUBS.map((club) => (
        <ClubItem key={club.name} name={club.name} isSelected={currentClubName === club.name} />
      ))}
    </ul>
  );
}

const clubsPath = getPath(studentClubs);

function ClubItem({ name, isSelected }: { name: string; isSelected: boolean }) {
  const itemStyle = isSelected
    ? 'bg-[linear-gradient(-135deg,_transparent_13px,_#ff6914_0)] text-white'
    : 'bg-neutral-100 text-neutral-500';

  return (
    <li className="relative">
      <Link
        href={`${clubsPath}/${name}`}
        className={`inline-block w-[201px] h-[40px] py-3 rounded-sm text-center text-sm tracking-wide font-yoon ${itemStyle}`}
      >
        {name}
      </Link>
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

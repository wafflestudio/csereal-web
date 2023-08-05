'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import PageLayout from '@/components/layout/PageLayout';

import { studentClubs } from '@/types/page';

import { getPath } from '@/utils/page';

export default function StudentClubPage() {
  const { name } = useParams();
  console.log(name);
  // 존재하지 않는 동아리일 경우 404페이지

  return (
    <PageLayout currentPage={studentClubs} title={studentClubs.name} titleSize="text-2xl">
      <ul className="grid grid-cols-4 gap-3">
        {CLUBS.map((club) => (
          <ClubItem key={club} name={club} isSelected={decodeURI(name) === club} />
        ))}
      </ul>
    </PageLayout>
  );
}

const CLUBS = ['와플스튜디오', 'baccus', '사커301', '슈타인', '스눕스', '유피넬'];

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

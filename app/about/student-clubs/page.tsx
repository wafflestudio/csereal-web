'use client';

import { useEffect, useState } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import ClubDetails from '@/components/studentClubs/ClubDetails';
import ClubList from '@/components/studentClubs/ClubList';

import { Club } from '@/types/club';
import { studentClubs } from '@/types/page';

const clubMock = {
  name: '와플스튜디오',
  eng: 'Waffle Studio',
  description: '맛있는 서비스가 탄생하는 곳',
};

const clubsMock = [
  {
    name: '가디언',
    eng: 'Guardian',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '바쿠스',
    eng: 'Baccus',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '사커301',
    eng: 'Soccer301',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '슈타인',
    eng: 'Stein',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '스눕스',
    eng: 'SNUPS',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '와플스튜디오',
    eng: 'Waffle Studio',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '유피넬',
    eng: 'UPNL',
    description: '맛있는 서비스가 탄생하는 곳',
  },
];

export default function StudentClubsPage() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  useEffect(() => {
    // get club list
    setClubs(clubsMock);
    setSelectedClub(clubMock);
  }, []);

  return (
    <PageLayout currentPage={studentClubs} title={studentClubs.name} titleSize="text-2xl">
      <ClubList clubs={clubs} selectedClub={selectedClub} setSelectedClub={setSelectedClub} />
      {selectedClub && <ClubDetails club={selectedClub} />}
    </PageLayout>
  );
}

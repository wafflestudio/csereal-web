'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import ClubList from '@/components/studentClubs/ClubList';
import StudentClub from '@/components/studentClubs/StudentClub';

import { studentClubs } from '@/types/page';

import { getPath } from '@/utils/page';

const studentClubsPath = getPath(studentClubs);

const clubMock = {
  name: '와플스튜디오',
  eng: 'Waffle Studio',
  description: '맛있는 서비스가 탄생하는 곳',
};

interface Club {
  name: string;
  eng: string;
  description: string;
}

export default function StudentClubsPage() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [currentClub, setCurrentClub] = useState<Club>();
  const router = useRouter();
  const name = useSearchParams().get('name');
  // 존재하지 않는 동아리일 경우 404페이지로

  useEffect(() => {
    if (!name) {
      router.push(`${studentClubsPath}?와플스튜디오`);
    } else {
      setCurrentClub(clubMock);
    }
  }, [name, router]);

  useEffect(() => {
    // get club list
    setClubs([clubMock]);
  }, []);

  return (
    <PageLayout currentPage={studentClubs} title={studentClubs.name} titleSize="text-2xl">
      <ClubList currentClubName={name ? decodeURI(name) : undefined} />
      {currentClub && <StudentClub club={clubMock} />}
    </PageLayout>
  );
}

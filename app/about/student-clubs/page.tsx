'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function StudentClubsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/about/student-clubs/wafflestudio');
  }, [router]);

  return <div>동아리 세부 페이지로 리다이렉트</div>;
}

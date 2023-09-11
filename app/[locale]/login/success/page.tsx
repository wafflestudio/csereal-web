'use client';

import { useRouter } from 'next/navigation';
import useSWR from 'swr';

import { useSessionContext } from '@/contexts/SessionContext';

import { getIsStaff } from '@/apis/auth';

export default function LoginSuccessPage() {
  const { isStaff, setIsStaff } = useSessionContext();
  const { data } = useSWR('/user/is-staff', getIsStaff);
  const router = useRouter();

  if (data) {
    setIsStaff((prev) => {
      console.log('is staff: ' + prev);
      return data.isStaff;
    });
    router.replace('/'); // 일단 메인으로 리다이렉트
  }

  return <div>로그인 성공, 기존 페이지로 이동하는 중...</div>;
}

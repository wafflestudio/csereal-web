'use client';

import { useRouter } from 'next/navigation';
import useSWR from 'swr';

import { useSessionContext } from '@/contexts/SessionContext';

import { getIsStaff } from '@/apis/auth';

import { errorToast } from '@/components/common/toast';

export default function LoginSuccessPage() {
  //   const result = await getIsStaff();
  //   console.log(result);

  const { user, setUser } = useSessionContext();
  const { data } = useSWR('/user/is-staff', getIsStaff);
  const router = useRouter();

  console.log('asdf');
  console.log('Data:', data);
  console.log(user);

  if (data) {
    setUser((prev) => {
      console.log('user: ', user);
      return data;
    });

    router.back(); // 이전 히스토리로
  } else {
    errorToast('알 수 없는 오류가 발생했습니다.');
  }

  return <div>로그인 성공, 기존 페이지로 이동하는 중...</div>;
}

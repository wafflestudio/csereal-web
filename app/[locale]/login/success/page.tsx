'use client';

import { useRouter } from 'next/navigation';

export default function LoginSuccessPage() {
  const router = useRouter();

  // router.push('/'); // 일단 메인으로

  return <div>로그인 성공, 기존 페이지로 이동하는 중...</div>;
}

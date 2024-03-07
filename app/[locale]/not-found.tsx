'use client';

import { usePathname } from 'next/navigation';

import { Link } from '@/navigation';

export default function NotFound() {
  const path = usePathname();
  return (
    <div className="mx-[3.75rem] mt-3 flex flex-col items-start">
      <p className="text-lg">{path}는 존재하지 않는 경로입니다.</p>
      <Link href="/" className="text-sm text-link underline">
        메인으로 가기
      </Link>
    </div>
  );
}

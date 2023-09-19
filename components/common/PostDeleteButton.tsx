'use client';

import { useRouter } from 'next/navigation';

import { deleteRequestWithCookie } from '@/apis';

export default function PostDeleteButton({ postType, id }: { postType: string; id: string }) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await deleteRequestWithCookie(`/${postType}/${id}`);
        router.replace(`/community/${postType}`);
      }}
      className="ml-4 px-5 py-2 rounded-[0.0625rem] bg-neutral-200 hover:bg-neutral-300 text-sm tracking-[0.02em] font-noto font-bold"
    >
      삭제
    </button>
  );
}

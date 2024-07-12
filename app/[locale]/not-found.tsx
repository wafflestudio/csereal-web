import Header from '@/components/layout/header/Header';

import { NOT_FOUND_DISABLED } from '@/constants/audit';

export default function NotFound() {
  if (NOT_FOUND_DISABLED) return null;

  return (
    <>
      <Header />
      <div className="grow p-[3.75rem]">
        <p className="text-lg text-white">존재하지 않는 경로입니다.</p>
      </div>
    </>
  );
}

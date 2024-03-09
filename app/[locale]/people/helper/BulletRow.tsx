import { ReactNode } from 'react';

export default function BulletRow({ children }: { children: ReactNode }) {
  return (
    <li className="mr-[1px] flex items-center space-x-2 px-2 text-sm font-normal leading-[26px]">
      <div className="h-[3px] w-[3px] rounded-full bg-neutral-950"></div>
      <p>{children}</p>
    </li>
  );
}

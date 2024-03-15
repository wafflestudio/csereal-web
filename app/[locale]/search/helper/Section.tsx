import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

export default function Section({
  title,
  size,
  children,
}: {
  title: string;
  size: number;
  children: ReactNode;
}) {
  const t = useTranslations('Nav');

  return (
    <div className="flex flex-col">
      <div className="mb-[2.88rem] flex">
        <h3 className=" inline border-b border-neutral-300 pb-[.59rem] text-[1.25rem] font-bold leading-loose text-neutral-700">
          {t(title)}({size})
        </h3>
        <div className="flex h-5 self-end">
          <div className="w-[1.7rem] origin-bottom-left rotate-[-45deg] self-end border-b border-neutral-300" />
          <div className="w-[10rem] translate-x-[-0.53rem] self-start border-t border-neutral-300" />
        </div>
      </div>
      {children}
    </div>
  );
}

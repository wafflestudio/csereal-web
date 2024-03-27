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
  if (size === 0) return <></>;

  return (
    <div className="flex flex-col" id={`nav_${title.replace(' ', '_')}`}>
      <div className="mb-8 flex">
        <h3 className="inline border-b-2 border-neutral-200 pb-[.59rem] pl-[.63rem] pr-[.63rem] text-[1.25rem] font-semibold leading-loose text-neutral-950">
          {t(title)}({size})
        </h3>
        <div className="flex h-5 self-end">
          <div className="w-[1.7rem] origin-bottom-left rotate-[-45deg] self-end border-b-2 border-neutral-200" />
          <div className="w-[10rem] translate-x-[-0.6rem] self-start border-t-2 border-neutral-200" />
        </div>
      </div>
      {children}
    </div>
  );
}

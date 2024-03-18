import { useTranslations } from 'next-intl';

export default function CircleTitle({ title, size }: { title: string; size: number }) {
  const t = useTranslations();

  return (
    <div className="flex items-center gap-2">
      <OrangeCircle />
      <h3 className=" text-[1.0625rem] font-semibold leading-loose text-neutral-950">
        {t(title)}({size})
      </h3>
    </div>
  );
}

function OrangeCircle() {
  return <div className="h-[.625rem] w-[.625rem] rounded-full border border-main-orange" />;
}

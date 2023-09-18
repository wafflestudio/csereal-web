import Link from 'next/link';

interface ShortCutsProps {
  shortCuts: { title: string; href: string }[];
}

const locations = [
  'top-[199px] right-[71px]',
  'top-[389px] left-[60px]',
  'top-[545px] right-[203px]',
];

export default function ShortCuts({ shortCuts }: ShortCutsProps) {
  return (
    <section className="">
      {shortCuts.map((shortcut, i) => (
        <ShortCutBox
          key={shortcut.title}
          title={shortcut.title}
          href={shortcut.href}
          location={locations[i]}
        />
      ))}
    </section>
  );
}

interface ShortCutBoxProps {
  title: string;
  href: string;
  location: string;
}

function ShortCutBox({ title, href, location }: ShortCutBoxProps) {
  return (
    <Link
      href={href}
      className={` absolute px-3 py-2.5 bg-main-orange flex flex-col gap-3 rounded-sm w-fit ${location}`}
    >
      <span className="min-w-[8.4375rem] font-yoon font-bold text-sm tracking-wide">{title}</span>
      <span className="min-w-[8.4375rem] flex items-center justify-end">
        <span className="font-yoon font-medium text-[10px] tracking-wide">바로가기</span>
        <span className="material-symbols-outlined font-light text-md">navigate_next</span>
      </span>
    </Link>
  );
}

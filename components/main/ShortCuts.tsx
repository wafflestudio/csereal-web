import Link from 'next/link';

interface ShortCutsProps {
  shortCuts: { title: string; href: string }[];
}

const locations = [
  'top-[100px] right-[100px]',
  'top-[280px] left-[80px]',
  'top-[450px] right-[220px]',
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
      <span className="min-w-[8.4375rem] font-yoon font-medium text-xs tracking-wide flex items-center justify-end">
        <span>바로가기</span>
        <span className="material-symbols-outlined font-light text-md">navigate_next</span>
      </span>
    </Link>
  );
}

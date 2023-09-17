import Link from 'next/link';

interface ShortCutsProps {
  shortCuts: { title: string; href: string }[];
}

export default function ShortCuts({ shortCuts }: ShortCutsProps) {
  return (
    <section>
      {shortCuts.map((shortcut) => (
        <ShortCutBox key={shortcut.title} title={shortcut.title} href={shortcut.href} />
      ))}
    </section>
  );
}

interface ShortCutBoxProps {
  title: string;
  href: string;
}

function ShortCutBox({ title, href }: ShortCutBoxProps) {
  return (
    <Link href={href} className="px-3 py-2.5 bg-main-orange flex flex-col gap-3 rounded-sm w-fit">
      <span className="min-w-[8.4375rem] font-yoon font-bold text-sm tracking-wide">{title}</span>
      <span className="min-w-[8.4375rem] font-yoon font-medium text-xs tracking-wide flex items-center justify-end">
        <span>바로가기</span>
        <span className="material-symbols-outlined font-light text-md">navigate_next</span>
      </span>
    </Link>
  );
}

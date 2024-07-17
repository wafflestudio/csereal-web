import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  mb?: string;
  titleMb: string;
  disabled?: boolean;
  children: ReactNode;
}

export default function Section({ title, mb, titleMb, disabled, children }: SectionProps) {
  return (
    <section className={`${mb} ${disabled && 'opacity-30'}`}>
      <div className={`mb-3 text-md font-semibold tracking-wide ${titleMb}`}>{title}</div>
      {children}
    </section>
  );
}

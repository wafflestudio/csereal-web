import { ReactNode } from 'react';

interface FieldsetProps {
  title: string;
  mb: 'mb-6' | 'mb-9';
  children: ReactNode;
}

export default function Fieldset({ title, mb, children }: FieldsetProps) {
  return (
    <fieldset className={`flex flex-col ${mb}`}>
      <label className="font-yoon text-sm font-medium tracking-wide mb-2">{title}</label>
      {children}
    </fieldset>
  );
}

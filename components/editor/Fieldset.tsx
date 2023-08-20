import { ReactNode } from 'react';

interface FieldsetProps {
  title: string;
  mb: 'mb-6' | 'mb-9';
  titleMb: 'mb-2' | 'mb-3';
  children: ReactNode;
  required?: boolean;
}

export default function Fieldset({
  title,
  mb,
  titleMb,
  required = false,
  children,
}: FieldsetProps) {
  return (
    <fieldset className={`flex flex-col ${mb}`}>
      <legend className={`font-yoon text-sm font-medium tracking-wide ${titleMb}`}>
        {title}
        {required && <span className="text-main-orange">*</span>}
      </legend>
      {children}
    </fieldset>
  );
}

import { ReactNode } from 'react';

interface FieldsetProps {
  title: string;
  titleMb: string;
  children: ReactNode;
  mb?: string;
  required?: boolean;
}

export default function Fieldset({
  title,
  titleMb,
  children,
  mb,
  required = false,
}: FieldsetProps) {
  return (
    <fieldset className={`flex flex-col ${mb ?? ''} flex-1`}>
      <legend className={`font-yoon text-sm font-medium tracking-wide ${titleMb}`}>
        {title}
        {required && <span className="text-main-orange">*</span>}
      </legend>
      {children}
    </fieldset>
  );
}

import { ReactNode } from 'react';

interface FieldsetProps {
  title: string;
  titleMb: string;
  children: ReactNode;
  mb?: string;
  required?: boolean;
  grow?: boolean;
  className?: string;
}

export default function Fieldset({
  title,
  titleMb,
  children,
  mb,
  required = false,
  grow = true,
  className,
}: FieldsetProps) {
  return (
    <fieldset className={`flex flex-col ${mb ?? ''} ${grow && 'flex-1'} ${className}`}>
      <legend className={`text-md font-medium tracking-wide ${titleMb}`}>
        {title}
        {required && <span className="text-main-orange">*</span>}
      </legend>
      {children}
    </fieldset>
  );
}

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

function Fieldset({
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

function Editor({ children }: { children: ReactNode }) {
  return (
    <Fieldset title="내용" mb="mb-6" titleMb="mb-2" required>
      {children}
    </Fieldset>
  );
}

export default Object.assign(Fieldset, { Editor });

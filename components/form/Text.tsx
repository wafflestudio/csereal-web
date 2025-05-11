import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface BasicTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options?: RegisterOptions;
  maxWidth?: string;
  bgColor?: string;
  textCenter?: boolean;
  isHidden?: boolean;
}

export default function Text({
  maxWidth,
  bgColor = 'bg-white',
  textCenter,
  name,
  options,
  className,
  isHidden,
  ...props
}: BasicTextInputProps) {
  const { register } = useFormContext();
  const registerReturn = register(name, options);

  if (isHidden) return null;

  return (
    <input
      type="text"
      className={clsx(
        maxWidth,
        'autofill-bg-white h-8 rounded-sm border border-neutral-300',
        bgColor,
        'pl-2 text-sm outline-none placeholder:text-neutral-300 disabled:text-neutral-400',
        textCenter && 'pr-2 text-center',
        className,
      )}
      {...props}
      {...registerReturn}
    />
  );
}

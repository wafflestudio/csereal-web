import { InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface BasicTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options?: RegisterOptions;
  maxWidth?: string;
  bgColor?: string;
  textCenter?: boolean;
}

export default function Text({
  maxWidth,
  bgColor = 'bg-white',
  textCenter,
  name,
  options,
  ...props
}: BasicTextInputProps) {
  const { register } = useFormContext();

  return (
    <input
      type="text"
      className={`${maxWidth} autofill-bg-white h-8 rounded-sm border border-neutral-300
            ${bgColor} pl-2 text-sm outline-none placeholder:text-neutral-300 disabled:text-neutral-400 ${
              textCenter && 'pr-2 text-center'
            }`}
      {...props}
      {...register(name, options)}
    />
  );
}

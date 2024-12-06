import { TextareaHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export default function TextArea({
  name,
  options,
  className,
  ...props
}: { name: string; options?: RegisterOptions } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { register } = useFormContext();
  return (
    <textarea
      {...register(name, options)}
      {...props}
      className={`${className} autofill-bg-white h-20 w-full resize-none rounded-sm border border-neutral-300 p-2 text-md outline-none placeholder:text-neutral-300`}
    />
  );
}

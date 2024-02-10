import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export default function BasicButton({
  type = 'button',
  className,
  children,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`bg-white text-neutral-700 disabled:text-neutral-300 rounded-sm border border-neutral-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

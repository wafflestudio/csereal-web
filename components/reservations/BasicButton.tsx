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
      className={`rounded-sm border border-neutral-200 bg-white text-xs text-neutral-700 enabled:hover:bg-neutral-100 disabled:text-neutral-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

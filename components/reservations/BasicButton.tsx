import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export default function BasicButton({
  type = 'button',
  className,
  onClick,
  children,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`text-xs text-neutral-700 rounded-sm border border-neutral-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

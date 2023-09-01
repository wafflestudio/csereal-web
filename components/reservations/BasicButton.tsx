import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export default function BasicButton({
  type = 'button',
  className,
  onClick,
  children,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return (
    <button
      type={type}
      className={`text-xs text-neutral-700 rounded-sm border border-neutral-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

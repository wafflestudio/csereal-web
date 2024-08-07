import { MouseEventHandler } from 'react';

export function GrayButton({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`rounded-[.0625rem] border-[1px] border-neutral-200 bg-neutral-100 px-[.875rem] py-[.3125rem] text-md font-medium leading-[1.5rem] text-neutral-500 enabled:hover:bg-neutral-200 ${
        disabled && 'opacity-30'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export function BlackButton({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`rounded-[.0625rem] bg-neutral-700 px-[.875rem] py-[.34rem] text-xs font-bold leading-[1.5rem] text-white enabled:hover:bg-neutral-500 ${
        disabled && 'opacity-30'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

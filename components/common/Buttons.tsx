import { MouseEventHandler } from 'react';

import { Link } from '@/i18n/routing';

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
      className={`whitespace-nowrap rounded-[.0625rem] border-[1px] border-neutral-200 bg-neutral-100 px-[.875rem] py-[.3125rem] text-md font-medium leading-[1.5rem] text-neutral-500 enabled:hover:bg-neutral-200 ${
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
      className={`whitespace-nowrap rounded-[.0625rem] bg-neutral-700 px-[.875rem] py-[.3125rem] text-md font-semibold leading-[1.5rem] text-white enabled:hover:bg-neutral-500 ${
        disabled && 'opacity-30'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export function OrangeButton({
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
      className={`h-9 rounded-[.0625rem] bg-main-orange px-[.875rem] py-[.3125rem] text-md font-semibold text-white ${
        disabled && 'opacity-30'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export function CreateButton({ href }: { href: string }) {
  return (
    <div className="mb-9 max-w-[768px] text-right">
      <Link href={href} className="inline-block">
        <BlackButton title="추가하기" />
      </Link>
    </div>
  );
}

export function EditButton({ href }: { href: string }) {
  return (
    <Link href={href} className="inline-block">
      <GrayButton title="편집" />
    </Link>
  );
}

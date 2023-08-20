import { ChangeEventHandler } from 'react';

interface BasicTextInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export default function BasicTextInput({ value, onChange, placeholder }: BasicTextInputProps) {
  return (
    <input
      type="text"
      className={`mw-[40rem] rounded-sm border border-neutral-700 h-[1.875rem] 
            outline-none font-noto text-xs pl-2 font-normal`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export interface BasicTextInputProps {
  value: string | null;
  onChange: (text: string) => void;
  maxWidth: string;
  placeholder?: string;
}

export default function BasicTextInput({
  value,
  onChange,
  placeholder,
  maxWidth,
}: BasicTextInputProps) {
  return (
    <input
      type="text"
      className={`${maxWidth} rounded-sm border border-neutral-900 bg-white h-[1.875rem]
            outline-none text-xs pl-2`}
      placeholder={placeholder}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

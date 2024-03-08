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
      className={`${maxWidth} autofill-bg-white h-[1.875rem] rounded-sm border border-neutral-900
            bg-white pl-2 text-xs outline-none`}
      placeholder={placeholder}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

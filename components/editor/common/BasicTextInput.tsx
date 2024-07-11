export interface BasicTextInputProps {
  value: string | null;
  onChange: (text: string) => void;
  maxWidth: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function BasicTextInput({
  value,
  onChange,
  placeholder,
  maxWidth,
  disabled,
}: BasicTextInputProps) {
  return (
    <input
      type="text"
      className={`${maxWidth} autofill-bg-white h-8 rounded-sm border border-neutral-300
            bg-white pl-2 text-sm outline-none`}
      placeholder={placeholder}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
}

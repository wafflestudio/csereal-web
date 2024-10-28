export interface BasicTextInputProps {
  value: string | null;
  onChange: (text: string) => void;
  maxWidth: string;
  placeholder?: string;
  disabled?: boolean;
  bgColor?: string;
  textCenter?: boolean;
}

export default function BasicTextInput({
  value,
  onChange,
  placeholder,
  maxWidth,
  disabled,
  bgColor = 'bg-white',
  textCenter,
}: BasicTextInputProps) {
  return (
    <input
      type="text"
      className={`${maxWidth} autofill-bg-white h-8 rounded-sm border border-neutral-300
            ${bgColor} pl-2 text-sm outline-none placeholder:text-neutral-300 disabled:text-neutral-400 ${
              textCenter && 'pr-2 text-center'
            }`}
      placeholder={placeholder}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
}

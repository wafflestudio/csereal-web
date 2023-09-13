interface CheckboxProps {
  label: string;
  isChecked: boolean;
  toggleCheck(tag: string, isChecked: boolean): void;
  disabled?: boolean;
}

export default function Checkbox({
  label,
  isChecked,
  toggleCheck,
  disabled = false,
}: CheckboxProps) {
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';

  return (
    <label
      htmlFor={label}
      className={`flex items-center gap-1 whitespace-nowrap w-fit h-5 ${
        !disabled && 'cursor-pointer'
      }`}
    >
      <span className="material-symbols-rounded text-neutral-700 text-lg font-light">
        {iconName}
      </span>
      <span className="font-yoon text-xs text-neutral-700 font-light tracking-wide">{label}</span>
      <input
        type="checkbox"
        id={label}
        name="tag"
        className="appearance-none"
        value={label}
        checked={isChecked}
        disabled={disabled}
        onChange={() => toggleCheck(label, isChecked)}
      />
    </label>
  );
}

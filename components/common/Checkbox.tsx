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
      className={`group flex items-center gap-1 whitespace-nowrap w-fit h-5 ${
        !disabled && 'cursor-pointer'
      }`}
    >
      <span
        className={`material-symbols-rounded text-neutral-400 text-lg font-light ${
          !disabled && 'group-hover:text-neutral-600 group-active:text-main-orange'
        } ${isChecked && 'text-neutral-600'}`}
      >
        {iconName}
      </span>
      <span
        className={`text-[14px] text-neutral-600 tracking-wide ${
          !disabled && 'group-active:text-main-orange'
        }`}
      >
        {label}
      </span>
      <input
        type="checkbox"
        id={label}
        name="tag"
        className="appearance-none"
        value={label}
        checked={isChecked}
        disabled={disabled}
        onChange={() => toggleCheck(label, !isChecked)}
      />
    </label>
  );
}

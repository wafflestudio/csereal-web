interface TagCheckboxProps {
  tag: string;
  isChecked: boolean;
  toggleCheck(tag: string, isChecked: boolean): void;
  disabled?: boolean;
}

export default function TagCheckbox({
  tag,
  isChecked,
  toggleCheck,
  disabled = false,
}: TagCheckboxProps) {
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';

  return (
    <label
      htmlFor={tag}
      className={`flex items-center gap-1 whitespace-nowrap w-fit h-5 ${
        !disabled && 'cursor-pointer'
      }`}
    >
      <span className="material-symbols-rounded text-neutral-700 text-lg font-light">
        {iconName}
      </span>
      <span className="font-yoon text-xs text-neutral-700 font-light tracking-wide">{tag}</span>
      <input
        type="checkbox"
        id={tag}
        name="tag"
        className="appearance-none"
        value={tag}
        checked={isChecked}
        disabled={disabled}
        onChange={() => toggleCheck(tag, isChecked)}
      />
    </label>
  );
}

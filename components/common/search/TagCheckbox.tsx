interface TagCheckboxProps {
  tag: string;
  isChecked: boolean;
  toggleCheck(tag: string, isChecked: boolean): void;
}

export default function TagCheckbox({ tag, isChecked, toggleCheck }: TagCheckboxProps) {
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';

  return (
    <label
      htmlFor={tag}
      className="flex items-center gap-1 whitespace-nowrap cursor-pointer w-fit h-5"
    >
      <span className="material-symbols-rounded text-lg font-light">{iconName}</span>
      <span className="font-yoon text-xs">{tag}</span>
      <input
        type="checkbox"
        id={tag}
        name="tag"
        className="appearance-none"
        value={tag}
        checked={isChecked}
        onChange={() => toggleCheck(tag, isChecked)}
      />
    </label>
  );
}

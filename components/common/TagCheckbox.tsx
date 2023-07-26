import { QueryName } from '@/utils/search';

interface TagCheckboxProps {
  tag: string;
  isChecked: boolean;
  setSearchParams(name: QueryName, value: string, replace?: boolean): void;
  deleteSearchParams(name: QueryName, value?: string): void;
}

export default function TagCheckbox({
  tag,
  isChecked,
  setSearchParams,
  deleteSearchParams,
}: TagCheckboxProps) {
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';
  const NAME: QueryName = 'tag';

  const toggleCheck = () => {
    if (isChecked) {
      deleteSearchParams(NAME, tag);
    } else {
      setSearchParams(NAME, tag, false);
    }
  };

  return (
    <div className="h-[18px]">
      <label
        htmlFor={tag}
        className="flex items-center gap-1 font-yoon text-xs whitespace-nowrap cursor-pointer"
      >
        <span className="material-symbols-rounded text-lg font-light">{iconName}</span>
        <span>{tag}</span>
      </label>
      <input
        type="checkbox"
        id={tag}
        name="tag"
        className="appearance-none"
        value={tag}
        checked={isChecked}
        onChange={toggleCheck}
      />
    </div>
  );
}

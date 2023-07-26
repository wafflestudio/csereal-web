import { QueryBehavior, QueryName } from '@/utils/search';

interface TagCheckboxProps {
  tag: string;
  isChecked: boolean;
  setSearchParams(type: QueryBehavior, name: QueryName, value: string, replace?: boolean): void; // useMyURLSearchParams에 있는 setSearchParams
}

export default function TagCheckbox({ tag, isChecked, setSearchParams }: TagCheckboxProps) {
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';
  const NAME: QueryName = 'tag';

  const toggleCheck = () => {
    setSearchParams(isChecked ? 'delete' : 'add', NAME, tag, false);
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

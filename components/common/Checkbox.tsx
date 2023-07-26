import { ChangeEvent } from 'react';

import { QueryKey as QueryName } from '@/utils/search';

interface CheckboxProps {
  tag: string;
  isChecked: boolean;
  setSearchParams(key: QueryName, value: string, replace?: boolean): void;
  deleteSearchParams(key: QueryName, value?: string): void;
}

export default function Checkbox({
  tag,
  isChecked,
  setSearchParams,
  deleteSearchParams,
}: CheckboxProps) {
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';
  const NAME: QueryName = 'tag';

  const toggleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(tag);
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
        value={tag}
        checked={isChecked}
        className="appearance-none"
        onChange={toggleCheck}
      />
    </div>
  );
}

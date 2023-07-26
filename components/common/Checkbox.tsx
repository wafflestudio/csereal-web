import { useState } from 'react';

interface CheckboxProps {
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  tag: string;
}

export default function Checkbox({ tag }: CheckboxProps) {
  // const [isChecked, setIsChecked] = useState<boolean>(false);
  const isChecked = false;
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';

  const toggleCheck = () => {
    // setIsChecked(!isChecked);
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
        // checked={isChecked}
        // className="appearance-none"
        onChange={toggleCheck}
      />
    </div>
  );
}

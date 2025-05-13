import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';

import { Rules } from '@/types/form';
import { useClickOutside } from '@/utils/hooks/useClickOutside';

// TODO: onClick을 인덱스 기반에서 값 기반으로 사용하는 옵션
interface DropdownProps {
  contents: { label: string; value: unknown }[];
  name: string;
  borderStyle?: string;
  width?: string;
  height?: string;
  isDisabled?: boolean;
  rules?: Rules;
  onChange?: (value: unknown) => void;
  isHidden?: boolean;
}

export default function Dropdown({
  contents,
  name,
  borderStyle,
  width,
  height,
  isDisabled,
  rules,
  onChange: onChangeFromProp,
  isHidden,
}: DropdownProps) {
  const {
    field: { value, onChange: onChangeFromController },
  } = useController({ name, rules });

  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(
    ref,
    useCallback(() => setExpanded(false), []),
  );

  const toggleExpanded = () => setExpanded((x) => !x);

  const onChange = (value: unknown) => {
    onChangeFromController(value);
    onChangeFromProp?.(value);
  };

  const handleClick = (index: number) => {
    onChange(contents[index].value);
    toggleExpanded();
  };

  if (isHidden) return null;

  return (
    <div className="relative select-none" ref={ref}>
      <button
        className={`
            flex items-center border bg-white py-[.3125rem] pl-[.625rem]
            pr-[.3125rem]
            ${expanded ? 'rounded-t-sm' : 'rounded-sm'}
            ${borderStyle}
            ${width ? `${width} justify-between` : 'gap-4'}
            ${height}
            ${isDisabled ? 'opacity-30' : ''}
        `}
        onClick={(e) => {
          e.preventDefault();
          toggleExpanded();
        }}
        disabled={isDisabled}
      >
        <p className="text-md font-normal">{contents.find((x) => x.value === value)?.label}</p>
        <span className="material-symbols-rounded text-base">
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      <div className="relative z-10">
        <DropdownListWithScroll
          className={`${width} ${expanded ? 'scale-y-1' : 'scale-y-0'}`}
          contents={contents.map((x) => x.label)}
          handleClick={handleClick}
          selectedIndex={value}
          borderStyle={borderStyle}
        />
      </div>
    </div>
  );
}

function DropdownListWithScroll({
  className,
  contents,
  handleClick,
  selectedIndex,
  borderStyle = `border-neutral-200`,
}: {
  className: string;
  contents: string[];
  handleClick: (index: number) => void;
  selectedIndex: number;
  borderStyle?: string;
}) {
  return (
    <div
      className={`styled-scrollbar absolute left-0 right-0 top-0 max-h-[168px] origin-top overflow-y-scroll overscroll-contain rounded-bl-sm rounded-br-sm border-x border-b bg-white transition duration-200 ${className} ${borderStyle}`}
    >
      {contents.map((content, index) => (
        <button
          key={index}
          className={`h-7 w-full pl-[.62rem] text-left text-sm font-normal hover:bg-neutral-200 ${
            selectedIndex === index && 'text-main-orange'
          } focus:border focus:border-neutral-400`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(index);
          }}
        >
          {content}
        </button>
      ))}
    </div>
  );
}

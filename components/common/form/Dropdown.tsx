import { useCallback, useRef, useState } from 'react';

import { useClickOutside } from '@/utils/hooks/useClickOutside';

interface DropdownProps {
  contents: string[];
  selectedIndex: number;
  onClick: (index: number) => void;
  borderStyle?: string;
}

export default function Dropdown({ contents, selectedIndex, onClick, borderStyle }: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(
    ref,
    useCallback(() => setExpanded(false), []),
  );

  const toggleExpanded = () => setExpanded((x) => !x);

  const handleClick = (index: number) => {
    onClick(index);
    toggleExpanded();
  };

  return (
    <div className="relative select-none" ref={ref}>
      <DropdownButton
        expanded={expanded}
        toggleExpanded={toggleExpanded}
        contents={contents}
        selectedIndex={selectedIndex}
        borderStyle={borderStyle}
      />
      <div className="relative z-10">
        <DropdownListWithScroll
          className={expanded ? 'scale-y-1' : 'scale-y-0'}
          contents={contents}
          handleClick={handleClick}
          selectedIndex={selectedIndex}
          borderStyle={borderStyle}
        />
      </div>
    </div>
  );
}

function DropdownButton({
  expanded,
  toggleExpanded,
  contents,
  selectedIndex,
  borderStyle = 'border-neutral-200',
}: {
  expanded: boolean;
  toggleExpanded: () => void;
  contents: string[];
  selectedIndex: number;
  borderStyle?: string;
}) {
  return (
    <button
      className={`
            flex items-center gap-4 border bg-white py-[.3125rem] pl-[.625rem]
            pr-[.3125rem]
            ${expanded ? 'rounded-t-sm' : 'rounded-sm'}
            ${borderStyle}
        `}
      onClick={(e) => {
        e.preventDefault();
        toggleExpanded();
      }}
    >
      <p className="text-md font-normal">{contents[selectedIndex]}</p>
      <span className="material-symbols-rounded text-base">
        {expanded ? 'expand_less' : 'expand_more'}
      </span>
    </button>
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

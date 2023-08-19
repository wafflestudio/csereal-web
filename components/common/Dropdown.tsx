import { useReducer, useState } from 'react';

interface DropdownProps {
  contents: string[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

export default function Dropdown({ contents, selectedIndex, onClick }: DropdownProps) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, false);
  const handleClick = (index: number) => {
    onClick(index);
    toggleExpanded();
  };

  return (
    <div className="flex flex-col">
      <button
        className={`
            flex items-center gap-4 py-[.3125rem] pr-[.3125rem] pl-[.625rem] border-neutral-300 border
            ${expanded ? 'rounded-tl-sm rounded-tr-sm' : 'rounded-sm'}
        `}
        onClick={toggleExpanded}
      >
        <p className="text-sm font-normal">{contents[selectedIndex]}</p>
        <span className="material-symbols-rounded text-base">
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      <div className="relative">
        {expanded && (
          <div className="absolute top-0 left-0 right-0 border-l border-r border-b border-neutral-300 rounded-bl-sm rounded-br-sm bg-white">
            {contents.map((content, index) => (
              <button
                key={index}
                className="w-full text-left text-sm font-normal py-[.28rem] pl-[.62rem] hover:bg-neutral-100"
                onClick={() => handleClick(index)}
              >
                {content}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

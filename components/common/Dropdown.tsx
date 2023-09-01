import { useReducer } from 'react';

interface DropdownProps {
  contents: string[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

export function Dropdown({ contents, selectedIndex, onClick }: DropdownProps) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, false);
  const handleClick = (index: number) => {
    onClick(index);
    toggleExpanded();
  };

  return (
    <div className="relative selection-none">
      <DropdownButton
        expanded={expanded}
        toggleExpanded={toggleExpanded}
        contents={contents}
        selectedIndex={selectedIndex}
      />
      <div className="relative z-10">
        <DropdownListWithScroll
          className={expanded ? 'scale-y-1' : 'scale-y-0'}
          contents={contents}
          handleClick={handleClick}
          selectedIndex={selectedIndex}
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
}: {
  expanded: boolean;
  toggleExpanded: () => void;
  contents: string[];
  selectedIndex: number;
}) {
  return (
    <button
      className={`
            flex items-center gap-4 py-[.3125rem] pr-[.3125rem] pl-[.625rem] border-neutral-300 border
            ${expanded ? 'rounded-t-sm' : 'rounded-sm'}
        `}
      onClick={toggleExpanded}
    >
      <p className="text-sm font-normal">{contents[selectedIndex]}</p>
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
}: {
  className: string;
  contents: string[];
  handleClick: (index: number) => void;
  selectedIndex: number;
}) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 border-x border-b border-neutral-300 rounded-bl-sm rounded-br-sm bg-white h-[168px] styled-scrollbar overflow-y-scroll overscroll-contain transition duration-200 origin-top ${className}`}
    >
      {contents.map((content, index) => (
        <button
          key={index}
          className={`w-full h-7 text-left text-sm font-normal pl-[.62rem] hover:bg-neutral-200 ${
            selectedIndex === index && 'text-main-orange'
          } focus:border focus:border-neutral-400`}
          onClick={() => handleClick(index)}
        >
          {content}
        </button>
      ))}
    </div>
  );
}

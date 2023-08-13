import Link from 'next/link';

import { COLOR_THEME } from '@/constants/color';

import CornerFoldedRectangle from './CornerFoldedRectangle/index';

interface SelectionListProps {
  names: string[];
  selectedItemName: string;
  path: string;
}

export default function SelectionList({ names, selectedItemName, path }: SelectionListProps) {
  return (
    <ul className="grid grid-cols-4 gap-3 mb-9">
      {names.map((name) => (
        <SelectionItem key={name} path={path} name={name} isSelected={name === selectedItemName} />
      ))}
    </ul>
  );
}

interface SelectionItemProps {
  name: string;
  isSelected: boolean;
  path: string;
}

function SelectionItem({ name, isSelected, path }: SelectionItemProps) {
  const itemCommonStyle = 'block w-[12.5rem] h-10 py-3 text-center text-sm tracking-wide font-yoon';
  const triangleLength = 1.25; // 20px
  const radius = 0.125; // 2px
  const dropShadow = 'drop-shadow(1px 2px 2px rgba(0,0,0,0.25)';

  return (
    <li>
      {isSelected ? (
        <CornerFoldedRectangle
          colorTheme={COLOR_THEME.orange}
          triangleLength={triangleLength}
          radius={radius}
          triangleDropShadow={dropShadow}
        >
          <span className={`${itemCommonStyle} text-white`}>{name}</span>
        </CornerFoldedRectangle>
      ) : (
        <CornerFoldedRectangle
          colorTheme={COLOR_THEME.lightGray}
          triangleLength={triangleLength}
          radius={radius}
          triangleDropShadow={dropShadow}
          isAnimated={true}
        >
          <Link
            href={`${path}?selected=${name}`}
            className={`${itemCommonStyle} text-neutral-500 hover:text-neutral-700`}
            scroll={false}
          >
            {name}
          </Link>
        </CornerFoldedRectangle>
      )}
    </li>
  );
}

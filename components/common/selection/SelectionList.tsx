import Link from 'next/link';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle/index';

import { COLOR_THEME } from '@/constants/color';

interface SelectionListProps {
  names: string[];
  selectedItemName: string;
  path: string;
  listGridColumnClass?: string; // tailwind class
  listItemPadding?: string; // tailwlind class
}

export default function SelectionList({
  names,
  selectedItemName,
  path,
  listGridColumnClass = 'grid-cols-[repeat(4,_max-content)]',
  listItemPadding = '',
}: SelectionListProps) {
  return (
    <ul className={`grid ${listGridColumnClass} gap-3 mb-11`}>
      {names.map((name) => (
        <SelectionItem
          key={name}
          path={path}
          name={name}
          isSelected={name === selectedItemName}
          padding={listItemPadding}
        />
      ))}
    </ul>
  );
}

interface SelectionItemProps {
  name: string;
  isSelected: boolean;
  path: string;
  padding: string;
}

function SelectionItem({ name, isSelected, path, padding }: SelectionItemProps) {
  const itemCommonStyle = `block w-full h-10 py-3 text-center text-sm tracking-wide font-yoon ${padding}`;
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
          isSelection={true}
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
          isSelection={true}
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

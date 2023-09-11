import Link from 'next-intl/link';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle/index';

import { COLOR_THEME } from '@/constants/color';

import { replaceSpaceWithDash } from '@/utils/replaceCharacter';

interface SelectionListProps {
  names: readonly string[];
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
    <ul className={`grid ${listGridColumnClass} gap-3 mb-9`}>
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
  const itemCommonStyle = `flex items-center justify-center w-full h-10 py-3 text-center text-sm tracking-wide font-yoon ${padding}`;
  const triangleLength = 1.25; // 20px
  const radius = 0.0625; // 1px
  const dropShadow = 'drop-shadow(1px 2px 2px rgba(0,0,0,0.3)';

  return (
    <li>
      {isSelected ? (
        <CornerFoldedRectangle
          colorTheme={COLOR_THEME.orange}
          triangleLength={triangleLength}
          radius={radius}
          triangleDropShadow={dropShadow}
          width="w-full"
        >
          <span className={`${itemCommonStyle} text-neutral-800 font-medium`}>{name}</span>
        </CornerFoldedRectangle>
      ) : (
        <CornerFoldedRectangle
          colorTheme={COLOR_THEME.lightGray}
          triangleLength={triangleLength}
          radius={radius}
          triangleDropShadow={dropShadow}
          animationType="folding"
          width="w-full"
        >
          <Link
            href={`${path}?selected=${replaceSpaceWithDash(name)}`}
            className={`${itemCommonStyle} text-neutral-500 hover:text-neutral-700 transition-all duration-300`}
            scroll={false}
          >
            {name}
          </Link>
        </CornerFoldedRectangle>
      )}
    </li>
  );
}

'use client';

import { Dispatch, SetStateAction } from 'react';

import { Link } from '@/navigation';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle/index';

import { COLOR_THEME } from '@/constants/color';

import { replaceSpaceWithDash } from '@/utils/replaceCharacter';

interface SelectionListProps {
  names: readonly string[];
  selectedItemName: string;
  path: string;
  /**
   * 반응형 고려해서 그리드 스타일 넣어줘야 함
   * 아래는 예시
   * lg:grid-cols-[repeat(auto-fit,_minmax({itemWidth}px,_auto))] */
  listGridColumnClass?: string;
  listItemPadding?: string; // tailwlind class
  setSelected?: Dispatch<SetStateAction<string>>;
}

export default function SelectionList({
  names,
  selectedItemName,
  path,
  listGridColumnClass = 'lg:grid-cols-[repeat(auto-fit,_minmax(200px,_auto))]',
  listItemPadding = '',
  setSelected,
}: SelectionListProps) {
  const selectItem = (itemName: string) => {
    setSelected?.(itemName);
  };
  const gridStyle = `grid-cols-[repeat(2,_1fr)] ${listGridColumnClass}`;

  return (
    <ul className={`grid ${gridStyle} mb-6 gap-3 pt-7 sm:mb-9 sm:pt-[44px]`}>
      {names.map((name) => (
        <SelectionItem
          key={name}
          path={path}
          name={name}
          isSelected={name === selectedItemName}
          padding={listItemPadding}
          selectItem={selectItem}
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
  selectItem?: (itemName: string) => void;
}

function SelectionItem({ name, isSelected, path, padding, selectItem }: SelectionItemProps) {
  const itemCommonStyle = `flex items-center justify-center w-full h-10 py-3 text-center text-[11px] sm:text-sm lg:text-[15px] tracking-wide font-yoon ${padding}`;
  const triangleLength = 1.25; // 20px
  const radius = 0.125; // 2px
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
          <span className={`${itemCommonStyle} font-medium text-neutral-50`}>{name}</span>
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
            className={`${itemCommonStyle} text-neutral-500 transition-all duration-300 hover:text-neutral-800`}
            scroll={false}
          >
            <div className={`${itemCommonStyle} inline-block`} onClick={() => selectItem?.(name)}>
              {name}
            </div>
          </Link>
        </CornerFoldedRectangle>
      )}
    </li>
  );
}

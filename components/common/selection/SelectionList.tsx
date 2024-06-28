'use client';

import { useLocale } from 'next-intl';

import { Link } from '@/navigation';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle/index';

import { COLOR_THEME } from '@/constants/color';

import { Locale } from '@/types/locale';

import { replaceSpaceWithDash } from '@/utils/string';

interface SelectionListProps {
  names: readonly { ko: string; en?: string }[];
  selectedItemNameKo: string;
  rootPath: string;
  /**
   * 반응형 고려해서 그리드 스타일 넣어줘야 함
   * 아래는 예시
   * lg:grid-cols-[repeat(auto-fit,_minmax({itemWidth}px,_auto))] */
  listGridColumnClass?: string;
  listItemPadding?: string; // tailwlind class
}

export default function SelectionList({
  names,
  selectedItemNameKo,
  rootPath,
  listGridColumnClass = 'lg:grid-cols-[repeat(auto-fit,_minmax(200px,_auto))]',
  listItemPadding = '',
}: SelectionListProps) {
  const locale = useLocale() as Locale;

  const gridStyle = `grid-cols-[repeat(2,_1fr)] ${listGridColumnClass}`;

  return (
    <ul className={`grid ${gridStyle} mb-6 gap-3 pt-7 sm:mb-9 sm:pt-11`}>
      {names.map((name) => (
        <SelectionItem
          key={name.ko}
          href={`${rootPath}?selected=${replaceSpaceWithDash(name.en || name.ko)}`} // 주소는 영문명 우선
          name={name[locale] ?? name.ko}
          isSelected={name.ko === selectedItemNameKo}
          padding={listItemPadding}
        />
      ))}
    </ul>
  );
}

interface SelectionItemProps {
  name: string;
  isSelected: boolean;
  href: string;
  padding: string;
}

function SelectionItem({ name, isSelected, href, padding }: SelectionItemProps) {
  const itemCommonStyle = `flex items-center justify-center w-full h-10 py-3 text-center text-[11px] sm:text-sm lg:text-md tracking-wide ${padding}`;
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
            href={href}
            className={`${itemCommonStyle} text-neutral-500 transition-all duration-300 hover:text-neutral-800`}
            scroll={false}
          >
            {name}
          </Link>
        </CornerFoldedRectangle>
      )}
    </li>
  );
}

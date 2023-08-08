import Link from 'next/link';

import { COLOR_THEME } from '@/constants/color';

import { Direction } from '@/types/directions';
import { directions } from '@/types/page';

import { getPath } from '@/utils/page';

import CornerFoldedRectangle from '../common/CornerFoldedRectangle';

interface DirectionsListProps {
  directionsList: Direction[];
  selectedDirections?: Direction;
}

export default function DirectionsList({
  directionsList,
  selectedDirections,
}: DirectionsListProps) {
  return (
    <ul className="flex gap-3 mb-8">
      {directionsList.map((d) => (
        <DirectionsItem
          key={d.name}
          name={d.name}
          engName={d.engName}
          isSelected={selectedDirections?.name === d.name}
        />
      ))}
    </ul>
  );
}

interface DirectionsItemProps {
  name: string;
  engName: string;
  isSelected: boolean;
}

const directionsPath = getPath(directions);

function DirectionsItem({ name, engName, isSelected }: DirectionsItemProps) {
  const itemCommonStyle = 'w-[12.5625rem] h-10 py-3 text-center text-sm tracking-wide font-yoon';
  const dropShadow = 'drop-shadow(1px 2px 4px rgba(0,0,0,0.25)';

  return isSelected ? (
    <li>
      <CornerFoldedRectangle
        colorTheme={COLOR_THEME.orange}
        rectClassName={`${itemCommonStyle} text-white`}
        triangleLength={1.25}
        radius={0.125}
        triangleDropShadow={dropShadow}
      >
        {name}
      </CornerFoldedRectangle>
    </li>
  ) : (
    <li>
      <Link
        href={`${directionsPath}?selected=${engName}`}
        className={`${itemCommonStyle} block bg-neutral-100 text-neutral-500`}
        scroll={false} // 안 먹힘
      >
        {name}
      </Link>
    </li>
  );
}

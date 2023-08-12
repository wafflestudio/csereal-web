import Link from 'next/link';

import { COLOR_THEME } from '@/constants/color';

import { Direction } from '@/types/directions';
import { directions } from '@/types/page';

import { getPath } from '@/utils/page';

import CornerFoldedRectangle from '../common/CornerFoldedRectangle';

interface DirectionsListProps {
  directionsList: Direction[];
  selectedDirection?: Direction;
}

export default function DirectionsList({
  directionsList,
  selectedDirection: selectedDirection,
}: DirectionsListProps) {
  return (
    <ul className="flex gap-3 mb-8">
      {directionsList.map((d) => (
        <DirectionsItem
          key={d.name}
          name={d.name}
          engName={d.engName}
          isSelected={selectedDirection?.name === d.name}
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
  const itemCommonStyle = 'block w-[12.5rem] h-10 py-3 text-center text-sm tracking-wide font-yoon';
  const triangleLength = 1.25; // 20px
  const radius = 0.125; // 2px
  const dropShadow = 'drop-shadow(1px 2px 4px rgba(0,0,0,0.25)';

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
            href={`${directionsPath}?selected=${engName}`}
            className={`${itemCommonStyle} text-neutral-500`}
            scroll={false} // 안 먹힘
          >
            {name}
          </Link>
        </CornerFoldedRectangle>
      )}
    </li>
  );
}

import { CSSProperties, ReactNode } from 'react';

import styles from '@/components/common/style.module.css';
import { ColorTheme } from '@/constants/color';
import useStyle from '@/utils/hooks/useStyle';

interface CornerFoldedRectangleProps {
  colorTheme: ColorTheme;
  triangleLength: number; // rem 단위
  triangleDropShadow: string; // 기본 css `filter` 속성에 들어가는 형식 (tailwind X)
  rectangleDropShadow?: string; // 기본 css `filter` 속성에 들어가는 형식 (tailwind X)
  margin?: string; // tailwind 형식
  radius: number; // rem 단위
  animationType?: 'folding' | 'unfolding';
  width?: string;
  children: ReactNode;
}

export default function CornerFoldedRectangle({
  colorTheme,
  triangleLength,
  triangleDropShadow,
  rectangleDropShadow,
  margin,
  radius,
  animationType,
  width = 'w-fit',
  children,
}: CornerFoldedRectangleProps) {
  const rectangleStyle: CSSProperties = {
    backgroundColor: colorTheme.bgColor,
    border: `1px solid ${colorTheme.borderColor}`,
    borderRadius: `${radius}rem`,
    filter: rectangleDropShadow,
  };

  const triangleStyle: CSSProperties = {
    borderWidth: `${triangleLength}rem 0 0 ${triangleLength}rem`,
    borderColor: `transparent transparent ${colorTheme.triangleColor} ${colorTheme.triangleColor}`,
    borderBottomLeftRadius: `${radius}rem`,
    filter: triangleDropShadow,
  };

  const { ref: rectangleRef } = useStyle<HTMLDivElement>(
    (style) => {
      Object.assign(style, rectangleStyle);
    },
    [rectangleStyle],
  );

  const { ref: triangleRef } = useStyle<HTMLDivElement>(
    (style) => {
      Object.assign(style, triangleStyle);
    },
    [triangleStyle],
  );

  const { ref } = useStyle<HTMLDivElement>(
    (style) => {
      style.borderWidth = `${triangleLength}rem 0 0 ${triangleLength}rem`;
      style.borderColor = `#ffffff #ffffff ${colorTheme.triangleColor} ${colorTheme.triangleColor}`;
      style.borderBottomLeftRadius = `${radius}rem`;
    },
    [triangleLength, colorTheme.triangleColor, radius],
  );

  if (animationType) {
    return (
      <div
        className={`relative ${width} ${margin} ${styles.animated} ${styles[animationType]}`}
        ref={rectangleRef}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div className={`relative ${width} ${margin}`} ref={rectangleRef}>
        <div className={`absolute right-[-1px] top-[-1px] h-0 w-0 border-solid`} ref={ref} />
        <div
          className={`absolute right-[-1px] top-[-1px] h-0 w-0 border-solid`}
          ref={triangleRef}
        />
        {children}
      </div>
    );
  }
}

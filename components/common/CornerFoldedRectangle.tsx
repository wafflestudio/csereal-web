import { CSSProperties, ReactNode } from 'react';

import { ColorTheme } from '@/constants/color';

import './CornerFoldedRectangle.css';

interface CornerFoldedRectangleProps {
  colorTheme: ColorTheme;
  triangleLength: number; // rem 단위
  triangleDropShadow: string; // 기본 css `filter` 속성에 들어가는 형식 (tailwind X)
  rectangleMargin?: string; // tailwind 형식
  radius: number; // rem 단위
  isAnimated?: boolean;
  children: ReactNode;
}

// linear-grdient로 자른 직사각형 모서리 길이와 접힌 직각삼각형 가로(세로) 비율
const FOLD_RATIO = 0.714;

export default function CornerFoldedRectangle({
  colorTheme,
  triangleLength,
  triangleDropShadow,
  rectangleMargin,
  radius,
  isAnimated,
  children,
}: CornerFoldedRectangleProps) {
  const rectangleStyle: CSSProperties = {
    borderRadius: `${radius}rem`,
    backgroundColor: colorTheme.bgColor,
    background: isAnimated
      ? colorTheme.bgColor
      : `linear-gradient(-135deg, transparent ${triangleLength * FOLD_RATIO}rem, ${
          colorTheme.bgColor
        } 0)`,
  };

  const triangleStyle: CSSProperties = {
    borderWidth: `${triangleLength}rem 0 0 ${triangleLength}rem`,
    borderColor: `transparent transparent transparent ${colorTheme.triangleColor}`,
    borderBottomLeftRadius: `${radius}rem`,
    filter: triangleDropShadow,
  };

  return isAnimated ? (
    <div className={`relative w-fit ${rectangleMargin} folding`} style={rectangleStyle}>
      {children}
    </div>
  ) : (
    <div className={`relative w-fit ${rectangleMargin}`} style={rectangleStyle}>
      <div className={`absolute top-0 right-0 w-0 h-0 border-solid`} style={triangleStyle} />
      {children}
    </div>
  );
}

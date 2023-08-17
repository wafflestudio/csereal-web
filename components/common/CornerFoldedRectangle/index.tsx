import { CSSProperties, ReactNode } from 'react';

import { ColorTheme } from '@/constants/color';

import styles from './style.module.css';

interface CornerFoldedRectangleProps {
  colorTheme: ColorTheme;
  triangleLength: number; // rem 단위
  triangleDropShadow: string; // 기본 css `filter` 속성에 들어가는 형식 (tailwind X)
  rectangleDropShadow?: string; // 기본 css `filter` 속성에 들어가는 형식 (tailwind X)
  rectangleMargin?: string; // tailwind 형식
  radius: number; // rem 단위
  isAnimated?: boolean; // 선택형 리스트 컴포넌트(동아리, 찾아오는 길 등; triangleLength 1.25rem, radius 0.125rem)일 때만 스타일 정상 적용
  isUnfolding?: boolean;
  width?: string;
  children: ReactNode;
}

// linear-grdient로 자른 직사각형 모서리 길이와 접힌 직각삼각형 가로(세로) 비율
const FOLD_RATIO = 0.714;

export default function CornerFoldedRectangle({
  colorTheme,
  triangleLength,
  triangleDropShadow,
  rectangleDropShadow,
  rectangleMargin,
  radius,
  isAnimated,
  isUnfolding,
  width = 'w-fit',
  children,
}: CornerFoldedRectangleProps) {
  const rectangleStyle: CSSProperties = {
    borderRadius: `${radius}rem`,
    background: isAnimated
      ? colorTheme.bgColor
      : `linear-gradient(-135deg, transparent ${triangleLength * FOLD_RATIO}rem, ${
          colorTheme.bgColor
        } 0)`,
    filter: rectangleDropShadow,
  };

  const triangleStyle: CSSProperties = {
    borderWidth: `${triangleLength}rem 0 0 ${triangleLength}rem`,
    borderColor: `transparent transparent ${colorTheme.triangleColor} ${colorTheme.triangleColor}`,
    borderBottomLeftRadius: `${radius}rem`,
    filter: triangleDropShadow,
  };

  return isAnimated ? (
    <div
      className={`relative ${width} ${rectangleMargin} ${
        isUnfolding ? styles.unfolding : styles.folding
      }`}
      style={rectangleStyle}
    >
      {children}
    </div>
  ) : (
    <div className={`relative ${width} ${rectangleMargin}`} style={rectangleStyle}>
      <div className={`absolute top-0 right-0 w-0 h-0 border-solid`} style={triangleStyle} />
      {children}
    </div>
  );
}

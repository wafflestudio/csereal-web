import { CSSProperties, ReactNode } from 'react';

import { ColorTheme } from '@/constants/color';

import styles from './style.module.css';

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

// linear-grdient로 자른 직사각형 모서리 길이와 접힌 직각삼각형 가로(세로) 비율
const FOLD_RATIO = 0.714;

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

  if (animationType) {
    return (
      <div
        className={`relative ${width} ${margin} ${styles.animated} ${styles[animationType]}`}
        style={rectangleStyle}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div className={`relative ${width} ${margin}`} style={rectangleStyle}>
        <div
          className={`absolute top-[-0.8px] right-[-0.8px] w-0 h-0 border-solid`}
          style={{
            borderWidth: `${triangleLength}rem 0 0 ${triangleLength}rem`,
            borderColor: `#141212 #141212 ${colorTheme.triangleColor} ${colorTheme.triangleColor}`,
            borderBottomLeftRadius: `${radius}rem`,
          }}
        />
        <div
          className={`absolute top-[-0.8px] right-[-0.8px] w-0 h-0 border-solid`}
          style={triangleStyle}
        />
        {children}
      </div>
    );
  }
}

import { CSSProperties, ReactNode } from 'react';

import { ColorTheme } from '@/constants/color';

interface CornerFoldedRectangleProps {
  colorTheme: ColorTheme;
  radius: number; // rem 단위
  rectClassName?: string; // 직사각형 width, height, radius, padding, margin, text 등등 정보
  triangleDropShadow: string;
  triangleLength: number; // rem 단위
  children: ReactNode;
}

// linear-grdient로 자른 직사각형 모서리 길이와 접힌 직각삼각형 가로(세로) 비율
const FOLD_RATIO = 0.714;

export default function CornerFoldedRectangle({
  radius,
  colorTheme,
  triangleLength,
  triangleDropShadow,
  rectClassName,
  children,
}: CornerFoldedRectangleProps) {
  const triangleStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: `${triangleLength}rem 0 0 ${triangleLength}rem`,
    borderColor: `transparent transparent transparent ${colorTheme.triangleColor}`,
    borderBottomLeftRadius: `${radius}rem`,
    filter: triangleDropShadow,
  };

  return (
    <div
      className={`relative ${rectClassName}`}
      style={{
        background: `linear-gradient(-135deg, transparent ${triangleLength * FOLD_RATIO}rem, ${
          colorTheme.bgColor
        } 0)`,
        borderRadius: `${radius}rem`,
      }}
    >
      <div style={triangleStyle} />
      {children}
    </div>
  );
}

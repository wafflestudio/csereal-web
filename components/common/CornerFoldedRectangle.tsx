import { ReactNode } from 'react';

interface CornerFoldedRectangleProps {
  rectBgColor: string; // hex
  rectClassName?: string; // 직사각형 width, height, radius, padding, margin, text 등등 정보
  triangleDropShadow?: string;
  triangleColor: string; // hex
  triangleLength: number; // px 단위
  children: ReactNode;
}

// linear-grdient로 자른 직사각형 모서리 길이와 접힌 직각삼각형 가로(세로) 비율
const FOLD_RATIO = 0.714;

export default function CornerFoldedRectangle({
  rectBgColor,
  rectClassName,
  triangleDropShadow,
  triangleColor,
  triangleLength,
  children,
}: CornerFoldedRectangleProps) {
  const dropShadow = triangleDropShadow || 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]';

  return (
    <div
      className={`relative font-yoon text-white ${rectClassName}`}
      style={{
        background: `linear-gradient(-135deg, transparent ${
          triangleLength * FOLD_RATIO
        }px, ${rectBgColor} 0)`,
      }}
    >
      {children}
      <svg
        className={`triangle absolute top-0 right-0 ${dropShadow}`}
        width={triangleLength}
        height={triangleLength}
      >
        <polygon points="0, 100 0 0, 100 100" fill={triangleColor} />
      </svg>
    </div>
  );
}

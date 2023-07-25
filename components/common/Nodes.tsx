interface CurvedNodeProps {
  grow?: boolean; // flex-grow 속성 (true일 때는 부모 element가 'display: flex'여야 함)
  direction?: 'row' | 'col'; // 가로 노드: row, 세로 노드: col
  length?: string; // tailwind width class 그대로 쓰면 됨
  double?: boolean;
}

// curved node width 최소 65px (원 10px + 대각선 꼬리 55px)
export function CurvedHorizontalNode({ grow = false, length = 'w-auto' }: CurvedNodeProps) {
  return (
    <div className={`flex ${grow ? 'grow' : ''} ${length} items-center`}>
      <StraightNode grow={true} direction="row" />
      <Diagonal width="w-[55px]" />
    </div>
  );
}

export function CurvedVerticalNode({ grow = false, length = 'h-full' }: CurvedNodeProps) {
  return (
    <div className={`flex flex-col ${grow ? 'grow' : ''} ${length} w-[25px]`}>
      <StraightNode grow={false} direction="col" length="h-[32px]" />
      <Diagonal
        width="w-[25px]"
        translateX="translate-x-[5.1px]"
        translateY="-translate-y-[0.5px]"
      />
      <Straight
        direction="col"
        translateX="-translate-x-[2.3px]"
        translateY="translate-y-[16.7px]"
      />
    </div>
  );
}

interface StraightNodeProps {
  grow?: boolean; // flex-grow 속성 (true일 때는 부모 element가 'display: flex'여야 함)
  direction?: 'row' | 'col'; // 가로 노드: row, 세로 노드: col
  length?: string; // tailwind width class 그대로 쓰면 됨
  double?: boolean;
}

// straight node width, height 최소 10px (원 크기)
// 가로일 때 width, 세로일 때 height 명시 권장 (기본값: 그 방향으로 최대한 늘어남)
export function StraightNode({
  grow = false,
  direction = 'row',
  length = '',
  double = false, // 양쪽 노드
}: StraightNodeProps) {
  const sizeClass =
    direction === 'row' ? `${length || 'w-full'} h-fit` : `w-fit ${length || 'h-full'}`;

  return (
    <div className={`flex flex-${direction} ${grow ? 'grow' : ''} ${sizeClass} items-center`}>
      <Circle />
      <Straight direction={direction} />
      {double && <Circle />}
    </div>
  );
}

// tailwind class 그대로 쓰면 됨
interface DiagonalProps {
  width: string;
  translateX?: string;
  translateY?: string;
}

// 우하향
function Diagonal({ width, translateX = '', translateY = '' }: DiagonalProps) {
  return (
    <div
      className={`origin-top-left rotate-45 border-t border-main-orange h-0 ${width} ${translateX} ${translateY}`}
    />
  );
}

// 수평선을 원하면 부모 요소 flex-direction: row
// 수직선을 원하면 부모 요소 flex-direction: column
interface StraightProps {
  direction?: 'row' | 'col';
  translateX?: string;
  translateY?: string;
}

function Straight({ direction = 'row', translateX = '', translateY = '' }: StraightProps) {
  return (
    <div
      className={`grow border-main-orange ${
        direction === 'row' ? 'border-t' : 'border-r'
      } ${translateX} ${translateY}`}
    />
  );
}

function Circle() {
  return <div className="border border-main-orange rounded-full w-2.5 h-2.5" />;
}

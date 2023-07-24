function Circle() {
  return <div className="border border-orange rounded-full w-2.5 h-2.5" />;
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
      className={`grow border-orange ${
        direction === 'row' ? 'border-t' : 'border-r'
      } ${translateX} ${translateY}`}
    />
  );
}

// tailwind class 그대로 쓰면 됨
interface DiagonalProps {
  width: string;
  translateX?: string;
  translateY?: string;
  other?: string;
}

// 우하향
function Diagonal({ width, translateX = '', translateY = '', other = '' }: DiagonalProps) {
  return (
    <div
      className={`rotate-45 border-t border-orange h-0 ${width} ${translateX} ${translateY} ${other}`}
    />
  );
}

interface NodeProps {
  grow?: boolean; // flex-grow 속성 (true일 때는 부모 element가 'display: flex'여야 함)
  direction?: 'row' | 'col'; // 가로 노드: row, 세로 노드: col
  width?: string; // tailwind width class 그대로 쓰면 됨
  height?: string; // ditto
}

// straight node width, height 최소 10px (원 크기)
// 가로일 때 width, 세로일 때 height 명시 권장 (기본값: 그 방향으로 최대한 늘어남)
export function StraightNode({
  grow = false,
  direction = 'row',
  width = '',
  height = '',
}: NodeProps) {
  const sizeClass =
    direction === 'row' ? `${width || 'w-auto'} h-auto` : `w-fit ${height || 'h-full'}`;

  return (
    <div className={`flex flex-${direction} ${grow ? 'grow' : ''} ${sizeClass} items-center`}>
      <Circle />
      <Straight direction={direction} />
    </div>
  );
}

// curved node width 최소 65px (원 10px + 대각선 꼬리 55px)
export function CurvedHorizontalNode({ grow = false, width = 'w-auto' }: NodeProps) {
  return (
    <div className={`flex ${grow ? 'grow' : ''} ${width} items-center`}>
      <StraightNode grow={true} direction="row" />
      <Diagonal
        width="w-[55px]"
        translateX="-translate-x-[8.2px]"
        translateY="translate-y-[19.5px]"
      />
    </div>
  );
}

export function CurvedVerticalNode({ grow = false, height = 'h-full' }: NodeProps) {
  return (
    <div className={`flex flex-col ${grow ? 'grow' : ''} ${height} w-[25px]`}>
      <StraightNode grow={false} direction="col" height="h-[32px]" />
      <Diagonal
        width="w-[25px]"
        translateX="translate-x-[1.3px]"
        translateY="translate-y-[8.3px]"
      />
      <Straight
        direction="col"
        translateX="-translate-x-[2.3px]"
        translateY="translate-y-[16.7px]"
      />
    </div>
  );
}

interface NodeProps {
  grow?: boolean; // flex-grow 속성 (true일 때는 부모 element가 'display: flex'여야 함)
  width?: string; // tailwind width class 그대로 쓰면 됨
}

// straight node width 최소 10px (원 크기)
export function StraightNode({ grow = false, width = 'w-auto' }: NodeProps) {
  return (
    <div className={`flex ${grow ? 'grow' : ''} ${width} items-center`}>
      <div className="border border-main-orange rounded-full w-2.5 h-2.5" />
      <div className="grow border-t border-main-orange" />
    </div>
  );
}

// curved node width 최소 65px (원 10px + 대각선 꼬리 55px)
export function CurvedNode({ grow = false, width = 'w-auto' }: NodeProps) {
  return (
    <div className={`flex ${grow ? 'grow' : ''} ${width} items-center`}>
      <StraightNode grow={true} />
      <div className="w-[55px] rotate-45 translate-y-[19.5px] -translate-x-[8.2px] border-t border-main-orange" />
    </div>
  );
}

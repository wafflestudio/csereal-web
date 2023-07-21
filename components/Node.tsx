interface NodeProps {
  grow?: boolean; // flex-grow (if true, parent node should be 'display: flex')
  width?: string; // tailwind width class
}

// the width of a straight node should be at least 10px (b/c circle at the front)
export function StraightNode({ grow = false, width = 'w-auto' }: NodeProps) {
  return (
    <div className={`flex ${grow ? 'grow' : ''} ${width} items-center`}>
      <div className="border border-orange rounded-full w-2.5 h-2.5" />
      <div className="grow border-t border-orange" />
    </div>
  );
}

// the width of a curved node should be at least 65px (b/c circle 10px + diagonal part 55px)
export function CurvedNode({ grow = false, width = 'w-auto' }: NodeProps) {
  return (
    <div className={`flex ${grow ? 'grow' : ''} ${width} items-center`}>
      <StraightNode grow={true} />
      <div className="w-[55px] rotate-45 translate-y-[19.5px] -translate-x-[8.2px] border-t border-orange" />
    </div>
  );
}

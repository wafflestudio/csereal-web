export function StraightNode() {
  return (
    <div className="flex grow items-center">
      <div className="border border-orange rounded-full w-2.5 h-2.5" />
      <div className="grow border-t border-orange" />
    </div>
  );
}

export function CurvedNode() {
  return (
    <div className="flex grow items-center">
      <StraightNode />
      <div className="w-[55px] rotate-45 translate-y-[19.5px] -translate-x-[8.2px] border-t border-orange"></div>
    </div>
  );
}

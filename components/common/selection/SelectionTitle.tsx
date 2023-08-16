import { StraightNode } from '@/components/common/Nodes';

export default function SelectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit mb-5">
      <h4 className="px-2.5 mb-1 font-bold text-[1.25rem] font-noto">{children}</h4>
      <div className="animate-stretch">
        <StraightNode />
      </div>
    </div>
  );
}

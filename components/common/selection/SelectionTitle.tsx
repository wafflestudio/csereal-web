import { StraightNode } from '@/components/common/Nodes';

interface SelectionTitleProps {
  animationKey: string;
  children: React.ReactNode;
}

export default function SelectionTitle({ animationKey, children }: SelectionTitleProps) {
  return (
    <div className="w-fit mb-5" key={animationKey}>
      <h4 className="px-2.5 mb-1 font-bold text-[1.25rem] font-noto">{children}</h4>
      <div className="animate-stretch">
        <StraightNode />
      </div>
    </div>
  );
}

import { StraightNode } from '@/components/common/Nodes';

interface SelectionTitleProps {
  animationKey: string;
  children: React.ReactNode;
}

export default function SelectionTitle({ animationKey, children }: SelectionTitleProps) {
  return (
    <div className="w-fit mb-5" key={animationKey}>
      <h4 className="px-2.5 font-bold text-base sm:text-[24px] text-neutral-800 leading-loose">
        {children}
      </h4>
      <div className="animate-stretch">
        <StraightNode />
      </div>
    </div>
  );
}

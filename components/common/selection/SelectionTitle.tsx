import { StraightNode } from '@/components/common/Nodes';

interface SelectionTitleProps {
  animationKey: string;
  children: React.ReactNode;
}

export default function SelectionTitle({ animationKey, children }: SelectionTitleProps) {
  return (
    <div className="mb-5 sm:w-fit" key={animationKey}>
      <h4 className="px-2.5 text-base font-bold leading-loose text-neutral-800 sm:text-[24px]">
        {children}
      </h4>
      <div className="animate-stretch">
        <StraightNode />
      </div>
    </div>
  );
}

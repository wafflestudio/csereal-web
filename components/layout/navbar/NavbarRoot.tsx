import { useTranslations } from 'next-intl';

import { NavbarState } from '@/contexts/NavbarContext';
import { Link } from '@/navigation';
import DotEmpty from '@/public/image/navbar/dot_empty.svg';
import DotFill from '@/public/image/navbar/dot_fill.svg';
import SnuLogo from '@/public/image/SNU_Logo.svg';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { getPath, isAncestorNode } from '@/utils/page';
import { SegmentNode, main as mainSegmentNode } from '@/utils/segmentNode';

export default function NavbarRoot({
  state,
  setState,
}: {
  state: NavbarState;
  setState: (state: NavbarState) => void;
}) {
  const width = state.type === 'closed' ? `w-[6.25rem]` : `w-[11rem]`;

  return (
    // 상하로 짧은 경우를 대비해 overflow-scroll
    <div
      className={`flex flex-col items-center py-[2.88rem] ${width} transition-all duration-300 ease-in-out z-50 bg-[#323235] overflow-scroll no-scrollbar`}
      onMouseEnter={() => setState({ type: 'expanded' })}
    >
      <SNUButton />
      {state.type === 'closed' ? <DotList /> : <NavList state={state} setState={setState} />}
    </div>
  );
}

function SNUButton() {
  const refreshPage = () => {
    window.location.href = '/';
  };

  return (
    <button onClick={refreshPage}>
      <SnuLogo className="fill-white" width="56" height="58" viewBox="0 0 45 47" />
    </button>
  );
}

function DotList() {
  const cur = useCurrentSegmentNode();
  const dotArr =
    mainSegmentNode.children?.map((node) =>
      isAncestorNode(node, cur) || node === cur ? 'fill' : 'empty',
    ) ?? [];
  const mt = dotArr[0] === 'fill' ? 'mt-[2.7rem]' : 'mt-[3.38rem]';

  return (
    <div className={`flex flex-col items-center ${mt}`}>
      {dotArr.map((dotType, idx) => {
        let mb = dotType === 'fill' ? 'mb-[2.2rem]' : 'mb-[2.7rem]';
        if (dotArr[idx + 1] === 'fill') mb = 'mb-[2.2rem]';

        return dotType === 'fill' ? (
          <DotFill key={idx} className={mb} />
        ) : (
          <DotEmpty key={idx} className={mb} />
        );
      })}
    </div>
  );
}

function NavList({
  state,
  setState,
}: {
  state: NavbarState;
  setState: (state: NavbarState) => void;
}) {
  const cur = useCurrentSegmentNode();
  const t = useTranslations('Nav');

  const shouldHighlight = (child: SegmentNode) => {
    return state.type === 'hovered' ? child === state.segmentNode : isAncestorNode(child, cur);
  };

  return (
    <nav>
      <ul className="mx-12 mt-12 flex flex-col text-center gap-9">
        {mainSegmentNode.children?.map((child, i) => (
          <NavListRow
            key={i}
            highlight={shouldHighlight(child)}
            name={t(child.name)}
            href={getPath(child)}
            onMouseEnter={() => setState({ type: 'hovered', segmentNode: child })}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavListRow({
  name,
  highlight,
  href,
  onMouseEnter,
}: {
  name: string;
  highlight: boolean;
  href: string;
  onMouseEnter: () => void;
}) {
  const color = highlight ? 'text-white' : 'text-neutral-500';
  return (
    <li
      className={`text-[0.9375rem] font-medium ${color} cursor-pointer whitespace-nowrap leading-[1.125rem]`}
      onMouseEnter={onMouseEnter}
    >
      <Link href={href} className="block">
        {name}
      </Link>
    </li>
  );
}

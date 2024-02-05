'use client';

import { useTranslations } from 'next-intl';

import { NavbarState } from '@/contexts/NavbarContext';
import SnuLogo from '@/public/image/SNU_Logo.svg';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { SegmentNode, main as mainSegmentNode } from '@/types/page';

import { isAncestorNode } from '@/utils/page';

export default function NavbarRoot({
  state,
  setState,
}: {
  state: NavbarState;
  setState: (state: NavbarState) => void;
}) {
  const expand = () => setState({ type: 'expanded' });
  const width = state.type === 'closed' ? `w-[6.25rem]` : `w-[11rem]`;

  return (
    <div
      className={`flex flex-col items-center pt-[2.25rem] ${width} overflow-y-scroll no-scrollbar transition-all duration-300 ease-in-out z-50 bg-[#323235]`}
      onMouseEnter={expand}
    >
      <SNULogo />
      {state.type === 'closed' ? <DotList /> : <NavList state={state} setState={setState} />}
    </div>
  );
}

function SNULogo() {
  const refreshPage = () => {
    window.location.href = '/';
  };
  return (
    <button onClick={refreshPage}>
      <SnuLogo className="fill-neutral-800" width="56" height="58" viewBox="0 0 45 47" />
    </button>
  );
}

function DotList() {
  const cur = useCurrentSegmentNode();
  return (
    <div className="flex flex-col items-center gap-[2.72rem] mt-[3.38rem]">
      {mainSegmentNode.children?.map((node, idx) => {
        return isAncestorNode(node, cur) ? <DotFill key={idx} /> : <DotEmpty key={idx} />;
      })}
    </div>
  );
}

function DotFill() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="27" viewBox="0 0 7 27" fill="none">
      <path d="M3.5 23.5L3.5 3.5" stroke="white" stroke-width="6" stroke-linecap="round" />
    </svg>
  );
}

function DotEmpty() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 1.8C4.23269 1.8 2.8 3.23269 2.8 5C2.8 6.76731 4.23269 8.2 6 8.2C7.76731 8.2 9.2 6.76731 9.2 5C9.2 3.23269 7.76731 1.8 6 1.8ZM6 1C3.79086 1 2 2.79086 2 5C2 7.20914 3.79086 9 6 9C8.20914 9 10 7.20914 10 5C10 2.79086 8.20914 1 6 1Z"
        fill="#737373"
      />
    </svg>
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
  // 노드별 강조 처리 여부
  const shouldHighlight = (child: SegmentNode) => {
    if (state.type === 'hovered') {
      // 이전에 마우스로 선택된 노드가 있으면 그것과 같아야 함,
      return child === state.segmentNode;
    } else {
      // 이외의 경우 현재 url 경로와 매칭되면 true
      return isAncestorNode(child, cur);
    }
  };

  return (
    <nav>
      <ul className="mx-12 mt-12 flex flex-col text-center gap-9">
        {mainSegmentNode.children?.map((child, i) => (
          <NavListRow
            key={i}
            highlight={shouldHighlight(child)}
            name={t(child.name)}
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
  onMouseEnter,
}: {
  name: string;
  highlight: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <li
      className={`text-neutral-800 font-yoon text-md font-medium ${
        !highlight && 'opacity-60'
      } cursor-pointer whitespace-nowrap`}
      onMouseEnter={onMouseEnter}
    >
      {name}
    </li>
  );
}

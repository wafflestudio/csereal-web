import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavbarState } from '@/contexts/NavbarContext';
import NaviBarClose from '@/public/image/NaviBar_Close.svg';
import NaviBarMenu from '@/public/image/NaviBar_Menu.svg';
import SnuLogo from '@/public/image/SNU_Logo.svg';

import { SegmentNode, main as mainSegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';

export default function NavbarRoot({
  state,
  setState,
}: {
  state: NavbarState;
  setState: (state: NavbarState) => void;
}) {
  const expand = () => setState({ type: 'expanded' });
  const close = () => setState({ type: 'closed' });
  const width = state.type === 'closed' ? 'w-[6.25rem]' : 'w-[11rem]';

  return (
    <div className={`flex flex-col items-center pt-12 ${width} overflow-y-scroll no-scrollbar`}>
      <SNULogo />
      {state.type === 'closed' ? (
        <ExpandButton expand={expand} />
      ) : (
        <>
          <NavList state={state} setState={setState} />
          <CloseButton close={close} />
        </>
      )}
    </div>
  );
}

function SNULogo() {
  return (
    <Link href="/">
      <SnuLogo className="fill-white" width="56" height="58" viewBox="0 0 45 47" />
    </Link>
  );
}

function ExpandButton({ expand }: { expand: () => void }) {
  return (
    <button onClick={expand} className="mt-10">
      <NaviBarMenu />
    </button>
  );
}

function NavList({
  state,
  setState,
}: {
  state: NavbarState;
  setState: (state: NavbarState) => void;
}) {
  const pathName = usePathname();

  // 노드별 강조 처리 여부
  const shouldHighlight = (child: SegmentNode) => {
    if (state.type === 'hovered') {
      // 이전에 마우스로 선택된 노드가 있으면 그것과 같아야 함,
      return child === state.segmentNode;
    } else {
      // 이외의 경우 현재 url 경로와 매칭되면 true
      return pathName.startsWith(getPath(child));
    }
  };

  const makeMouseEnterHandler = (child: SegmentNode) => () => {
    setState({ type: 'hovered', segmentNode: child });
  };

  return (
    <nav>
      <ul className="mx-12 mt-12 flex flex-col text-center gap-9">
        {mainSegmentNode.children?.map((child, i) => (
          <NavListRow
            key={i}
            highlight={shouldHighlight(child)}
            name={child.name}
            onMouseEnter={makeMouseEnterHandler(child)}
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
      className={`text-white font-yoon text-md font-medium ${
        highlight && 'opacity-60'
      } cursor-pointer`}
      onMouseEnter={onMouseEnter}
    >
      {name}
    </li>
  );
}

function CloseButton({ close }: { close: () => void }) {
  return (
    <button onClick={close} className="my-8">
      <NaviBarClose />
    </button>
  );
}

import { getPath } from '@/utils/page';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { State } from './Navbar';

import naviBarClose from '@/public/image/NaviBar_Close.svg';
import naviBarMenu from '@/public/image/NaviBar_Menu.svg';
import snuLogo from '@/public/image/SNU_Logo.svg';
import Image from 'next/image';

import { SegmentNode, main as mainSegmentNode } from '@/types/page';

export default function NavbarRoot({
  state,
  setState,
}: {
  state: State;
  setState: (state: State) => void;
}) {
  const expand = () => setState({ type: 'expanded' });
  const close = () => setState({ type: 'closed' });

  return (
    <div className="flex flex-col items-center pt-12">
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
    <Link href="/" className="mb-10">
      <Image src={snuLogo} alt="서울대 로고" priority />
    </Link>
  );
}

function ExpandButton({ expand }: { expand: () => void }) {
  return (
    <button onClick={expand} className="mx-7">
      <Image src={naviBarMenu} alt="네비게이션 펼치기 버튼" className="w-10 h-10" />
    </button>
  );
}

function NavList({ state, setState }: { state: State; setState: (state: State) => void }) {
  const pathName = usePathname();

  const shouldHighlight = (child: SegmentNode) => {
    if (state.type === 'hovered') {
      // 이미 선택된 노드가 있으면 그것과 같으면 true,
      return child === state.segmentNode;
    } else {
      // 이외의 경우 현재 경로와 매칭되면 true
      return pathName.startsWith(getPath(child));
    }
  };

  const makeMouseEnterHandler = (child: SegmentNode) => () => {
    setState({ type: 'hovered', segmentNode: child });
  };

  return (
    <ul className="mx-12 flex flex-col text-center gap-9">
      {mainSegmentNode.children?.map((child, i) => (
        <NavListRow
          key={i}
          highlight={shouldHighlight(child)}
          name={child.name}
          onMouseEnter={makeMouseEnterHandler(child)}
        />
      ))}
    </ul>
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
      className={`text-white font-yoon text-[.875rem] font-medium ${highlight ? '' : 'opacity-60'}`}
      onMouseEnter={onMouseEnter}
    >
      {name}
    </li>
  );
}

function CloseButton({ close }: { close: () => void }) {
  return (
    <button onClick={close} className="mt-8">
      <Image
        src={naviBarClose}
        alt="네비게이션 닫기 버튼"
        className="text-[.875rem] fill-white font-medium"
      />
    </button>
  );
}

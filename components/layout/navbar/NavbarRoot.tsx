import { useTranslations } from 'next-intl';

import { main as mainSegmentNode, SegmentNode } from '@/constants/segmentNode';
import { useNavbarContext } from '@/contexts/NavbarContext';
import { Link } from '@/i18n/routing';
import DotEmpty from '@/public/image/navbar/dot_empty.svg';
import DotFill from '@/public/image/navbar/dot_fill.svg';
import SnuLogo from '@/public/image/SNU_Logo.svg';
import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import useStyle from '@/utils/hooks/useStyle';
import { getPath, isAncestorNode } from '@/utils/page';

export const NAVBAR_CLOSED_WIDTH_REM = 6.25;
export const NAVBAR_EXPANDED_WIDTH_REM = 11;

export default function NavbarRoot() {
  const { navbarState, setNavbarState } = useNavbarContext();

  return (
    // 상하로 화면이 좁은 경우를 대비해 overflow-scroll
    <div
      className={`no-scrollbar z-50 flex w-[6.25rem] flex-col items-center overflow-scroll bg-[#323235] py-[2.88rem] transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setNavbarState({ type: 'expanded' })}
      {...useStyle(
        (style) => (style.width = navbarState.type === 'closed' ? '6.25rem' : '11rem'),
        [navbarState.type],
      )}
    >
      <Link href="/" aria-label="메인으로 이동">
        <SnuLogo className="fill-white" width="56" height="58" viewBox="0 0 45 47" />
      </Link>

      {navbarState.type === 'closed' ? <DotList /> : <NavList />}
    </div>
  );
}

function DotList() {
  const cur = useCurrentSegmentNode();
  const isDotFilled = (node: SegmentNode) => isAncestorNode(node, cur) || node === cur;

  const dotArr = mainSegmentNode.children.map(isDotFilled);
  const getDotMargin = (filled: boolean, idx: number) => {
    if (dotArr[idx + 1]) return 'mb-[2.2rem]';
    return filled ? 'mb-[2.2rem]' : 'mb-[2.7rem]';
  };

  return (
    <div className={`flex flex-col items-center ${dotArr[0] ? 'mt-[2.7rem]' : 'mt-[3.38rem]'}`}>
      {dotArr.map((filled, idx) =>
        filled ? (
          <DotFill key={idx} className={getDotMargin(filled, idx)} />
        ) : (
          <DotEmpty key={idx} className={getDotMargin(filled, idx)} />
        ),
      )}
    </div>
  );
}

function NavList() {
  const { navbarState, setNavbarState } = useNavbarContext();

  const cur = useCurrentSegmentNode();
  const t = useTranslations('Nav');

  const shouldHighlight = (child: SegmentNode) => {
    return navbarState.type === 'hovered'
      ? child === navbarState.segmentNode
      : isAncestorNode(child, cur);
  };

  return (
    <nav>
      <ul className="mx-12 mt-12 flex flex-col gap-9 text-center">
        {mainSegmentNode.children?.map((child, i) => (
          <NavListRow
            key={i}
            highlight={shouldHighlight(child)}
            name={t(child.name)}
            href={getPath(child)}
            onMouseEnter={() => setNavbarState({ type: 'hovered', segmentNode: child })}
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

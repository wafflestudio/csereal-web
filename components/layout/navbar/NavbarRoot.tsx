import { useTranslations } from 'next-intl';

import { useNavbarContext } from '@/contexts/NavbarContext';
import { Link } from '@/navigation';
import DotEmpty from '@/public/image/navbar/dot_empty.svg';
import DotFill from '@/public/image/navbar/dot_fill.svg';
import SnuLogo from '@/public/image/SNU_Logo.svg';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { getPath, isAncestorNode } from '@/utils/page';
import { SegmentNode, main as mainSegmentNode } from '@/utils/segmentNode';

export default function NavbarRoot() {
  const { navbarState, setNavbarState } = useNavbarContext();
  const width = navbarState.type === 'closed' ? `w-[6.25rem]` : `w-[11rem]`;

  return (
    // 상하로 화면이 좁은 경우를 대비해 overflow-scroll
    <div
      className={`flex flex-col items-center py-[2.88rem] ${width} no-scrollbar z-50 overflow-scroll bg-[#323235] transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setNavbarState({ type: 'expanded' })}
    >
      <Link href="/">
        <SnuLogo className="fill-white" width="56" height="58" viewBox="0 0 45 47" />
      </Link>

      {navbarState.type === 'closed' ? <DotList /> : <NavList />}
    </div>
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

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { CurvedVerticalNode } from '../common/Nodes';

export interface SearchSubNavProps {
  total: number;
  nodes: SearchSubNavNodeProps[];
}

export default function SearchSubNav({ total, nodes }: SearchSubNavProps) {
  const t = useTranslations('Nav');

  return (
    <div className="flex col-start-2 mt-[3.25rem] w-[11.25rem] sticky top-16">
      <CurvedVerticalNode grow={false} />
      <div className="pt-[0.6875rem] pl-1.5">
        <h3 className="font-yoon font-bold text-sm text-neutral-600">{t('통합 검색')}</h3>
        <div className="flex flex-col ml-3 gap-3">
          <p className="text-main-orange font-yoon text-sm font-bold mt-[1.15rem]">
            {t('전체')}({total})
          </p>
          {nodes.map((node, idx) => (
            <SearchSubNavNode key={idx} {...node} />
          ))}
        </div>
      </div>
    </div>
  );
}

type SearchSubNavNodeProps = {
  title: string;
  size: number;
} & (
  | {
      type: 'LEAF';
      href: string;
    }
  | {
      type: 'INTERNAL';
      children: SearchSubNavNodeProps[];
    }
);

const SearchSubNavNode = (props: SearchSubNavNodeProps) => {
  const t = useTranslations('Nav');
  const { title, size, type } = props;

  if (type === 'INTERNAL') {
    return (
      <div>
        <p className="text-neutral-600 font-yoon text-xs">
          {t(title)}({size})
        </p>
        <div className="flex flex-col pl-3 gap-3 mt-3">
          {props.children.map((node, idx) => (
            <SearchSubNavNode {...node} key={idx} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link className="text-neutral-600 font-yoon text-xs hover:text-main-orange" href={props.href}>
        {t(title)}({size})
      </Link>
    );
  }
};

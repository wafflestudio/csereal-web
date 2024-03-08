import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';

import { CurvedVerticalNode } from '../../../components/common/Nodes';

export interface SearchSubNavProps {
  total: number;
  nodes: SearchSubNavNodeProps[];
}

export default function SearchSubNav({ total, nodes }: SearchSubNavProps) {
  const t = useTranslations('Nav');

  return (
    <div className="sticky top-16 col-start-2 mt-[3.25rem] flex w-[11.25rem]">
      <CurvedVerticalNode grow={false} />
      <div className="pl-1.5 pt-[0.6875rem]">
        <h3 className="text-sm font-bold text-neutral-600">{t('통합 검색')}</h3>
        <div className="ml-3 flex flex-col gap-3">
          <p className="mt-[1.15rem] text-sm font-bold text-main-orange">
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
        <p className="text-xs text-neutral-600">
          {t(title)}({size})
        </p>
        <div className="mt-3 flex flex-col gap-3 pl-3">
          {props.children.map((node, idx) => (
            <SearchSubNavNode {...node} key={idx} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link className="text-xs text-neutral-600 hover:text-main-orange" href={props.href}>
        {t(title)}({size})
      </Link>
    );
  }
};

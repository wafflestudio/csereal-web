import { useTranslations } from 'next-intl';

import { CurvedVerticalNode } from '../common/Nodes';

interface SearchSubNavProps {
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
          <p className="text-main-orange font-yoon text-sm font-bold mt-[1.15rem]">전체({total})</p>
          {nodes.map((node, idx) => (
            <SearchSubNavNode key={idx} {...node} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SearchSubNavNodeProps {
  title: string;
  size: number;
  children: SearchSubNavNodeProps[];
}

const SearchSubNavNode = ({ title, size, children }: SearchSubNavNodeProps) => {
  if (children.length) {
    return (
      <div>
        <p className="text-neutral-400 font-yoon text-xs">
          {title}({size})
        </p>
        <div>
          {children.map((node, idx) => (
            <SearchSubNavNode {...node} key={idx} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <p className="text-neutral-600 font-yoon text-xs">
        {title}({size})
      </p>
    );
  }
};

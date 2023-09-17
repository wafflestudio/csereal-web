import { useTranslations } from 'next-intl';

import { CurvedHorizontalNode, StraightNode } from '@/components/common/Nodes';
import SearchForm from '@/components/search/SearchForm';
import SearchSubNav from '@/components/search/SearchSubNav';

interface SearchPageProps {
  searchParams: {
    query: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageHeader />
      <div className="w-[52.5rem] row-start-2 col-start-1">
        <SectionTitle title="소식" size={100} />
      </div>
      <SearchSubNav total={100} nodes={[{ title: 'A', size: 10, children: [] }]} />
    </div>
  );
}

const PageHeader = () => {
  const t = useTranslations('Nav');

  return (
    <div>
      <div className={`w-fit min-w-[15.625rem] max-w-[51.875rem] row-start-1 col-start-1 mt-1`}>
        <div className="flex gap-2 mb-[1.19rem]">
          <CurvedHorizontalNode grow={true} />
        </div>
        <h3
          className={`mr-[65px] break-keep font-yoon text-neutral-800 tracking-wide text-2xl font-bold`}
        >
          {t('통합 검색')}
        </h3>
      </div>
      <SearchForm />
      <StraightNode margin="mt-12" double />
    </div>
  );
};

const SectionTitle = ({ title, size }: { title: string; size: number }) => {
  return (
    <div className="mt-12 flex">
      <p className="font-noto border-b border-neutral-300 inline pb-[.59rem] text-[1.25rem] font-bold text-neutral-700 leading-loose">
        {title}({size})
      </p>
      <div className="flex self-end h-5">
        <div className="self-end border-b border-neutral-300 rotate-[-45deg] origin-bottom-left w-[1.7rem]" />
        <div className="self-start border-t border-neutral-300 w-[10rem] translate-x-[-0.53rem]" />
      </div>
    </div>
  );
};

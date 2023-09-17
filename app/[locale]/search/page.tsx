import { CurvedHorizontalNode } from '@/components/common/Nodes';
import SearchForm from '@/components/search/SearchForm';

interface SearchPageProps {
  searchParams: {
    query: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageTitle />
      <SearchForm />
      <div className="w-[52.5rem] row-start-2 col-start-1"></div>
    </div>
  );
}

const PageTitle = () => {
  return (
    <div className={`w-fit min-w-[15.625rem] max-w-[51.875rem] row-start-1 col-start-1 mt-1`}>
      <div className="flex gap-2 mb-[1.19rem]">
        <CurvedHorizontalNode grow={true} />
      </div>
      <h3
        className={`mr-[65px] break-keep font-yoon text-neutral-800 tracking-wide text-2xl font-bold`}
      >
        통합 검색
      </h3>
    </div>
  );
};

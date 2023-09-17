export const dynamic = 'force-dynamic';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { getNoticeSearch } from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import { CurvedHorizontalNode, StraightNode } from '@/components/common/Nodes';
import SearchForm from '@/components/search/SearchForm';
import SearchSubNav from '@/components/search/SearchSubNav';
import SeminarRow from '@/components/seminar/SeminarRow';

import { news, notice, seminar } from '@/types/page';

import { getPath } from '@/utils/page';

const newsPath = getPath(news);
const noticePath = getPath(notice);
const seminarPath = getPath(seminar);

interface SearchPageProps {
  searchParams: {
    query: string;
  };
}

// TODO: 섹션, 서브섹션 일반화하기
export default async function SearchPage({ searchParams: { query } }: SearchPageProps) {
  const noticeSearchResult = await getNoticeSearch({ keyword: query, number: 2 });
  const seminarSearchResult = await getSeminarPosts({ keyword: query, pageNum: 1 });

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageHeader query={query} />
      <div className="flex flex-col w-[52.5rem] row-start-2 col-start-1">
        <SectionTitle title="소식" size={100} />

        <SectionSubtitle title="공지사항" size={noticeSearchResult.total} />
        <div className="flex flex-col gap-6">
          {noticeSearchResult.results.slice(0, 2).map((notice) => (
            <NoticeRow
              key={notice.id}
              title={notice.title}
              description={{
                content: notice.partialDescription,
                boldStartIndex: notice.boldStartIndex,
                boldEndIndex: notice.boldEndIndex,
              }}
              dateStr={notice.createdAt}
            />
          ))}
        </div>
        <MoreResultLink href={`${noticePath}?keyword=${query}`} />
        <Divider />

        <SectionSubtitle title="새 소식" size={1} />
        <MoreResultLink href={`${newsPath}?keyword=${query}`} />
        <Divider />

        <SectionSubtitle title="세미나" size={seminarSearchResult.total} />
        <div className="flex flex-col gap-6">
          {seminarSearchResult.searchList.slice(0, 2).map((seminar) => (
            <SeminarRow
              key={seminar.id}
              id={seminar.id}
              title={seminar.title}
              host={seminar.name}
              company={seminar.affiliation}
              date={new Date(seminar.startDate)}
              location={seminar.location}
              imageURL={seminar.imageURL}
              isYearLast={seminar.isYearLast}
            />
          ))}
        </div>
        <MoreResultLink href={`${seminarPath}?keyword=${query}`} />
        <Divider />
      </div>
      <SearchSubNav total={100} nodes={[{ title: 'A', size: 10, children: [] }]} />
    </div>
  );
}

const PageHeader = ({ query }: { query: string }) => {
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
      <SearchForm key={query} query={query} />
      <StraightNode margin="mt-12" double />
    </div>
  );
};

const SectionTitle = ({ title, size }: { title: string; size: number }) => {
  const t = useTranslations('Nav');
  return (
    <div className="mt-12 flex">
      <p className="font-noto border-b border-neutral-300 inline pb-[.59rem] text-[1.25rem] font-bold text-neutral-700 leading-loose">
        {t(title)}({size})
      </p>
      <div className="flex self-end h-5">
        <div className="self-end border-b border-neutral-300 rotate-[-45deg] origin-bottom-left w-[1.7rem]" />
        <div className="self-start border-t border-neutral-300 w-[10rem] translate-x-[-0.53rem]" />
      </div>
    </div>
  );
};

const SectionSubtitle = ({ title, size }: { title: string; size: number }) => {
  const t = useTranslations('Nav');
  return (
    <div className="mt-7 flex gap-2 items-center">
      <div className="rounded-full w-[.625rem] h-[.625rem] border border-neutral-500" />
      <h3 className="text-neutral-700 font-noto text-base font-bold leading-loose">
        {t(title)}({size})
      </h3>
    </div>
  );
};

const MoreResultLink = ({ href }: { href: string }) => {
  const t = useTranslations('Nav');
  return (
    <Link
      href={href}
      className="text-main-orange font-noto text-xs text-middle flex items-center self-end"
    >
      {t('결과 더보기')}
      <span className="material-symbols-outlined text-sm">chevron_right</span>
    </Link>
  );
};

const Divider = () => <div className="border-b border-neutral-300 mt-7" />;

interface NoticeRowProps {
  title: string;
  description: {
    content: string;
    boldStartIndex: number;
    boldEndIndex: number;
  };
  dateStr: string;
}

const NoticeRow = ({ title, description, dateStr }: NoticeRowProps) => {
  const date = new Date(dateStr);
  return (
    <div className="flex flex-col gap-[.69rem]">
      <h3>{title}</h3>
      <p>
        {description.content.slice(0, description.boldStartIndex)}
        <span className="font-bold">
          {description.content.slice(description.boldStartIndex, description.boldEndIndex)}
        </span>
        {description.content.slice(description.boldEndIndex)}
      </p>
      <time>
        {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
      </time>
    </div>
  );
};

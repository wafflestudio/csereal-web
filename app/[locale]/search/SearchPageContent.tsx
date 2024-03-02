'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';

import SearchBox from '@/components/common/search/SearchBox';
import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';
import NewsRow from '@/components/news/NewsRow';
import NoticeRow from '@/components/search/NoticeRow';
import SeminarRow from '@/components/seminar/SeminarRow';

import { SEARCH_TAGS } from '@/constants/tag';

import { main, news, notice, seminar } from '@/types/page';
import { NoticeSearchResult, NewsSearchResult } from '@/types/search';
import { SeminarList } from '@/types/seminar';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import { getPath } from '@/utils/page';

const newsPath = getPath(news);
const noticePath = getPath(notice);
const seminarPath = getPath(seminar);

interface SearchContentProps {
  keyword: string;
  notice: NoticeSearchResult;
  news: NewsSearchResult;
  seminar: SeminarList;
}

export default function SearchPageContent({ notice, news, seminar }: SearchContentProps) {
  const { keyword, tags, setSearchParams } = useCustomSearchParams();

  const total = notice.total + news.total + seminar.total;

  return (
    <div className="relative bg-neutral-900">
      <Header />

      {/* TODO: 임시로 넣은  currentPage={main} 대책 세우기*/}
      <PageTitle title={'통합 검색'} titleType="big" margin="mb-12" currentPage={main} />

      <div className={'bg-white pl-[100px] pr-[360px] pt-[44px] pb-[150px] relative'}>
        <SearchBox
          tags={SEARCH_TAGS}
          initTags={tags}
          initKeyword={keyword ?? ''}
          setSearchParams={setSearchParams}
        />

        {/* 검색 결과 */}
        <div className="flex flex-col w-[52.5rem] row-start-2 col-start-1">
          <SectionTitle title="소식" size={total} />

          {/* 공지사항 */}
          <SectionSubtitle title="공지사항" size={notice.total} />
          <div className="flex flex-col gap-6 mt-[.88rem] ml-5 mr-10">
            {notice.results.slice(0, 2).map((notice) => (
              <NoticeRow
                key={notice.id}
                id={notice.id}
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
          <MoreResultLink href={`${noticePath}?keyword=${keyword}`} />
          <Divider />

          {/* 새소식 */}
          <SectionSubtitle title="새 소식" size={news.total} />
          <div className="flex flex-col gap-6 mt-[.88rem] ml-5 mr-10">
            {news.results.slice(0, 2).map((news) => (
              <NewsRow
                key={news.id}
                href={`${newsPath}/${news.id}`}
                title={news.title}
                description={news.partialDescription}
                tags={news.tags}
                date={new Date(news.date)}
                imageURL={news.imageUrl}
                descriptionBold={{ startIndex: news.boldStartIndex, endIndex: news.boldEndIndex }}
                hideDivider
              />
            ))}
          </div>
          <MoreResultLink href={`${newsPath}?keyword=${keyword}`} />
          <Divider />

          {/* 세미나 */}
          <SectionSubtitle title="세미나" size={seminar.total} />
          <div className="flex flex-col gap-[0.3rem] ml-5 mr-10">
            {seminar.searchList.slice(0, 2).map((seminar) => (
              <SeminarRow key={seminar.id} seminar={seminar} hideDivider />
            ))}
          </div>
          <MoreResultLink href={`${seminarPath}?keyword=${keyword}`} />
          <Divider />
        </div>
      </div>
    </div>
  );
}

const SectionTitle = ({ title, size }: { title: string; size: number }) => {
  const t = useTranslations('Nav');
  return (
    <div className="flex">
      <div className="font-noto border-b border-neutral-300 inline pb-[.59rem] text-[1.25rem] font-bold text-neutral-700 leading-loose">
        <p className="px-[10px]">
          {t(title)}({size})
        </p>
      </div>
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
      <div className="rounded-full w-[.625rem] h-[.625rem] border border-main-orange" />
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

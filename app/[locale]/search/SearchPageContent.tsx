'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';

import NewsRow from '@/app/[locale]/community/news/NewsRow';
import SeminarRow from '@/app/[locale]/community/seminar/SeminarRow';
import NoticeRow from '@/app/[locale]/search/NoticeRow';

import SearchBox from '@/components/common/search/SearchBox';
import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';

import { SEARCH_TAGS } from '@/constants/tag';

import { NoticeSearchResult, NewsSearchResult } from '@/types/search';
import { SeminarList } from '@/types/seminar';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import { getPath } from '@/utils/page';
import { main, news, notice, seminar } from '@/utils/segmentNode';

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
      <PageTitle title={'통합 검색'} titleType="big" margin="mb-11" currentPage={main} />

      <div className={'relative bg-white pb-[150px] pl-[100px] pr-[360px] pt-[44px]'}>
        <SearchBox
          tags={SEARCH_TAGS}
          initTags={tags}
          initKeyword={keyword ?? ''}
          setSearchParams={setSearchParams}
        />

        {/* 검색 결과 */}
        <div className="col-start-1 row-start-2 flex w-[52.5rem] flex-col">
          <SectionTitle title="소식" size={total} />

          {/* 공지사항 */}
          <SectionSubtitle title="공지사항" size={notice.total} />
          <div className="ml-5 mr-10 mt-[.88rem] flex flex-col gap-6">
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
          <div className="ml-5 mr-10 mt-[.88rem] flex flex-col gap-6">
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
          <div className="ml-5 mr-10 flex flex-col gap-[0.3rem]">
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
      <div className="font-noto inline border-b border-neutral-300 pb-[.59rem] text-[1.25rem] font-bold leading-loose text-neutral-700">
        <p className="px-[10px]">
          {t(title)}({size})
        </p>
      </div>
      <div className="flex h-5 self-end">
        <div className="w-[1.7rem] origin-bottom-left rotate-[-45deg] self-end border-b border-neutral-300" />
        <div className="w-[10rem] translate-x-[-0.53rem] self-start border-t border-neutral-300" />
      </div>
    </div>
  );
};

const SectionSubtitle = ({ title, size }: { title: string; size: number }) => {
  const t = useTranslations('Nav');
  return (
    <div className="mt-7 flex items-center gap-2">
      <div className="h-[.625rem] w-[.625rem] rounded-full border border-main-orange" />
      <h3 className="font-noto text-base font-bold leading-loose text-neutral-700">
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
      className="font-noto text-middle flex items-center self-end text-xs text-main-orange"
    >
      {t('결과 더보기')}
      <span className="material-symbols-outlined text-sm">chevron_right</span>
    </Link>
  );
};

const Divider = () => <div className="mt-7 border-b border-neutral-300" />;

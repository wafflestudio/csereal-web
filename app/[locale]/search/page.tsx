import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

import { Link } from '@/navigation';

import { searchNews, searchNotice } from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import NewsRow from '@/app/[locale]/community/news/helper/NewsRow';
import SeminarRow from '@/app/[locale]/community/seminar/helper/SeminarRow';
import NoticeRow from '@/app/[locale]/search/NoticeRow';

import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';

import { getPath } from '@/utils/page';
import { main, news, notice, seminar } from '@/utils/segmentNode';

import SearchBoxWrapper from './SearchBoxWrapper';

const newsPath = getPath(news);
const noticePath = getPath(notice);
const seminarPath = getPath(seminar);

export default async function SearchPage({
  searchParams: { keyword },
}: {
  searchParams: { keyword: string };
}) {
  const [notice, news, seminar] = await Promise.all([
    searchNotice({ keyword, number: 5 }),
    searchNews({ keyword, number: 5 }),
    getSeminarPosts({ keyword, pageNum: 1 }),
  ]);

  const total = notice.total + news.total + seminar.total;

  return (
    <div className="relative bg-neutral-900">
      <Header />

      {/* TODO: 임시로 넣은  currentPage={main} 대책 세우기*/}
      <PageTitle title={'통합 검색'} titleType="big" margin="mb-11" currentPage={main} />

      <div className={'relative bg-white pb-[150px] pl-[100px] pr-[360px] pt-[44px]'}>
        <SearchBoxWrapper />

        {/* 검색 결과 */}
        <div className="flex w-[52.5rem] flex-col">
          <Section title="소식" size={total}>
            <SubSection
              title="공지사항"
              size={notice.total}
              href={`${noticePath}?keyword=${keyword}`}
            >
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
            </SubSection>

            <SubSection title="새 소식" size={news.total} href={`${newsPath}?keyword=${keyword}`}>
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
            </SubSection>

            <SubSection
              title="세미나"
              size={seminar.total}
              href={`${seminarPath}?keyword=${keyword}`}
            >
              {seminar.searchList.slice(0, 2).map((seminar) => (
                <SeminarRow key={seminar.id} seminar={seminar} hideDivider />
              ))}
            </SubSection>
          </Section>
        </div>
      </div>
    </div>
  );
}

const Section = ({
  title,
  size,
  children,
}: {
  title: string;
  size: number;
  children: ReactNode;
}) => {
  const t = useTranslations('Nav');
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h3 className=" inline border-b border-neutral-300 pb-[.59rem] text-[1.25rem] font-bold leading-loose text-neutral-700">
          {t(title)}({size})
        </h3>
        <div className="flex h-5 self-end">
          <div className="w-[1.7rem] origin-bottom-left rotate-[-45deg] self-end border-b border-neutral-300" />
          <div className="w-[10rem] translate-x-[-0.53rem] self-start border-t border-neutral-300" />
        </div>
      </div>
      {children}
    </div>
  );
};

const SubSection = ({
  title,
  size,
  href,
  children,
}: {
  title: string;
  size: number;
  href: string;
  children: ReactNode;
}) => {
  const t = useTranslations('Nav');
  return (
    <>
      <div className="mt-7 flex items-center gap-2">
        <div className="h-[.625rem] w-[.625rem] rounded-full border border-main-orange" />
        <h3 className=" text-base font-bold leading-loose text-neutral-700">
          {t(title)}({size})
        </h3>
      </div>
      <div className="ml-5 mr-10 mt-[.88rem] flex flex-col gap-6">{children}</div>
      <MoreResultLink href={href} />
      <Divider />
    </>
  );
};

const MoreResultLink = ({ href }: { href: string }) => {
  const t = useTranslations('Nav');
  return (
    <Link href={href} className=" text-middle flex items-center self-end text-xs text-main-orange">
      {t('결과 더보기')}
      <span className="material-symbols-outlined text-sm">chevron_right</span>
    </Link>
  );
};

const Divider = () => <div className="mt-7 border-b border-neutral-300" />;

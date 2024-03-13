import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

import { Link } from '@/navigation';

import {
  searchAbout,
  searchAcademics,
  searchAdmissions,
  searchMember,
  searchNews,
  searchNotice,
  searchResearch,
} from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import NewsRow from '@/app/[locale]/community/news/helper/NewsRow';
import SeminarRow from '@/app/[locale]/community/seminar/helper/SeminarRow';
import NoticeRow from '@/app/[locale]/search/NoticeRow';

import SearchBox from '@/components/common/search/SearchBox';
import Header from '@/components/layout/header/Header';
import PageTitle from '@/components/layout/pageLayout/PageTitle';

import { SEARCH_TAGS } from '@/constants/tag';

import { getPath } from '@/utils/page';
import { main, news, notice, seminar } from '@/utils/segmentNode';

import AboutRow from './AboutRow';
import OrangeCircle from './OrangeCircle';

const newsPath = getPath(news);
const noticePath = getPath(notice);
const seminarPath = getPath(seminar);

const DESCRIPTION_CHAR_CNT = 200;

export default async function SearchPage({
  searchParams: { keyword },
}: {
  searchParams: { keyword: string };
}) {
  return (
    <div className="relative bg-neutral-900">
      <Header />
      {/* TODO: 임시로 넣은  currentPage={main} 대책 세우기*/}
      <PageTitle title={'통합 검색'} titleType="big" margin="mb-11" currentPage={main} />

      <div className={'relative bg-white pb-[150px] pl-[100px] pr-[360px] pt-[44px]'}>
        <SearchBox tags={SEARCH_TAGS} />

        <div className="flex w-[52.5rem] flex-col gap-10">
          <SearchResult keyword={keyword} />
        </div>
      </div>
    </div>
  );
}

const SearchResult = async ({ keyword }: { keyword: string }) => {
  const [about, notice, news, seminar, member, research, academics, admissions] =
    await Promise.allSettled([
      searchAbout({ keyword, number: 5, amount: DESCRIPTION_CHAR_CNT }),
      searchNotice({ keyword, number: 5, amount: DESCRIPTION_CHAR_CNT }),
      searchNews({ keyword, number: 5, amount: DESCRIPTION_CHAR_CNT }),
      getSeminarPosts({ keyword, pageNum: 1 }),
      searchMember({ keyword, number: 5, amount: DESCRIPTION_CHAR_CNT }),
      searchResearch({ keyword, number: 5, amount: DESCRIPTION_CHAR_CNT }),
      searchAcademics({ keyword, number: 5, amount: DESCRIPTION_CHAR_CNT }),
      searchAdmissions({ keyword, number: 5, amount: DESCRIPTION_CHAR_CNT }),
    ]);

  return (
    <>
      <Section title="소개" size={countSettled(about)}>
        <div className="my-4 flex flex-col items-start gap-6">
          {renderSettled(about, (about) =>
            about.results.map((result) => <AboutRow key={result.id} preview={result} />),
          )}
        </div>
      </Section>

      <Section
        title="소식"
        size={countSettled(notice) + countSettled(news) + countSettled(seminar)}
      >
        <SubSection
          title="공지사항"
          size={countSettled(notice)}
          href={`${noticePath}?keyword=${keyword}`}
        >
          {renderSettled(notice, (notice) =>
            notice.results.map((notice) => (
              <NoticeRow
                {...notice}
                key={notice.id}
                id={notice.id}
                title={notice.title}
                dateStr={notice.createdAt}
              />
            )),
          )}
        </SubSection>

        <SubSection
          title="새 소식"
          size={countSettled(news)}
          href={`${newsPath}?keyword=${keyword}`}
        >
          {renderSettled(news, (news) =>
            news.results.map((news) => (
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
            )),
          )}
        </SubSection>

        <SubSection
          title="세미나"
          size={countSettled(seminar)}
          href={`${seminarPath}?keyword=${keyword}`}
        >
          {renderSettled(seminar, (seminar) =>
            seminar.searchList
              .slice(0, 2)
              .map((seminar) => <SeminarRow key={seminar.id} seminar={seminar} hideDivider />),
          )}
        </SubSection>
      </Section>

      <Section title="구성원" size={countSettled(member)}>
        {renderSettled(member, (x) => (
          <Tmp>{x.results}</Tmp>
        ))}
      </Section>

      <Section title="연구" size={countSettled(research)}>
        {renderSettled(research, (x) => (
          <Tmp>{x.results}</Tmp>
        ))}
      </Section>

      <Section title="입학" size={countSettled(admissions)}>
        {renderSettled(admissions, (x) => (
          <Tmp>{x.results}</Tmp>
        ))}
      </Section>

      <Section title="학사 및 교과" size={countSettled(academics)}>
        {renderSettled(academics, (x) => (
          <Tmp>{x.results}</Tmp>
        ))}
      </Section>
    </>
  );
};

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
        <OrangeCircle />
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

const Tmp = ({ children }: { children: unknown }) => (
  <p className="whitespace-pre-wrap">{JSON.stringify(children, undefined, 4)}</p>
);

const countSettled = <T extends { total: number }>(result: PromiseSettledResult<T>) => {
  return result.status === 'fulfilled' ? result.value.total : 0;
};

const renderSettled = <T,>(result: PromiseSettledResult<T>, render: (data: T) => ReactNode) => {
  if (result.status === 'rejected') return <p>{result.reason + ''}</p>;
  else return render(result.value);
};

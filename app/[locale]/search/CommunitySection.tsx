import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

import { searchNews, searchNotice } from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import { getPath } from '@/utils/page';
import { news, notice, seminar } from '@/utils/segmentNode';

import OrangeCircle from './helper/OrangeCircle';
import Section from './helper/Section';
import NoticeRow from './NoticeRow';
import { DESCRIPTION_CHAR_CNT } from './SearchResult';
import NewsRow from '../community/news/helper/NewsRow';
import SeminarRow from '../community/seminar/helper/SeminarRow';

const newsPath = getPath(news);
const noticePath = getPath(notice);
const seminarPath = getPath(seminar);

export default async function CommunitySection({ keyword }: { keyword: string }) {
  const [notice, news, seminar] = await Promise.all([
    searchNotice({ keyword, number: 3, amount: DESCRIPTION_CHAR_CNT }),
    searchNews({ keyword, number: 3, amount: DESCRIPTION_CHAR_CNT }),
    getSeminarPosts({ keyword, pageNum: '1' }),
  ]);

  return (
    <Section title="소식" size={notice.total + news.total + seminar.total}>
      <CommunitySubSection
        title="공지사항"
        size={notice.total}
        href={`${noticePath}?keyword=${keyword}`}
      >
        {notice.results.map((notice) => (
          <NoticeRow
            {...notice}
            key={notice.id}
            id={notice.id}
            title={notice.title}
            dateStr={notice.createdAt}
          />
        ))}
      </CommunitySubSection>

      <Divider />

      <CommunitySubSection
        title="새 소식"
        size={news.total}
        href={`${newsPath}?keyword=${keyword}`}
      >
        {news.results.map((news) => (
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
      </CommunitySubSection>

      <Divider />

      <CommunitySubSection
        title="세미나"
        size={seminar.total}
        href={`${seminarPath}?keyword=${keyword}`}
      >
        {seminar.searchList.slice(0, 3).map((seminar) => (
          <SeminarRow key={seminar.id} seminar={seminar} hideDivider />
        ))}
      </CommunitySubSection>
    </Section>
  );
}

const CommunitySubSection = ({
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
      <div className="flex items-center gap-2">
        <OrangeCircle />
        <h3 className=" text-[1.0625rem] font-bold leading-loose text-neutral-700">
          {t(title)}({size})
        </h3>
      </div>
      <div className="ml-5 mr-10 mt-[.88rem] flex flex-col gap-6">{children}</div>
      <MoreResultLink href={href} />
    </>
  );
};

const MoreResultLink = ({ href }: { href: string }) => {
  const t = useTranslations('Nav');
  return (
    <Link
      href={href}
      className="text-middle mr-4 mt-10 flex items-center self-end text-xs text-main-orange"
    >
      {t('결과 더보기')}
      <span className="material-symbols-outlined text-sm">chevron_right</span>
    </Link>
  );
};

const Divider = () => <div className="my-10 border-b border-neutral-300" />;

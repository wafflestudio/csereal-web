import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

import { searchNews, searchNotice } from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import { getPath } from '@/utils/page';
import { news, notice, seminar } from '@/utils/segmentNode';

import CircleTitle from './helper/CircleTitle';
import Divider from './helper/Divider';
import NewsRow from './helper/NewsRow';
import NoticeRow from './helper/NoticeRow';
import Section from './helper/Section';
import SeminarRow from '../community/seminar/helper/SeminarRow';

const newsPath = getPath(news);
const noticePath = getPath(notice);
const seminarPath = getPath(seminar);

export default async function CommunitySection({ keyword }: { keyword: string }) {
  const [notice, news, seminar] = await Promise.all([
    searchNotice({ keyword, number: 3, amount: 200 }),
    searchNews({ keyword, number: 3, amount: 200 }),
    getSeminarPosts({ keyword, pageNum: '1' }),
  ]);

  return (
    <Section title="소식" size={notice.total + news.total + seminar.total}>
      <CommunitySubSection
        title="공지사항"
        size={notice.total}
        href={`${noticePath}?keyword=${keyword}`}
        divider
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

      <CommunitySubSection
        title="새 소식"
        size={news.total}
        href={`${newsPath}?keyword=${keyword}`}
        divider
      >
        {news.results.map((news) => (
          <NewsRow
            key={news.id}
            href={`${newsPath}/${news.id}`}
            title={news.title}
            description={news}
            date={new Date(news.date)}
            imageURL={news.imageUrl}
          />
        ))}
      </CommunitySubSection>

      <CommunitySubSection
        title="세미나"
        size={seminar.total}
        href={`${seminarPath}?keyword=${keyword}`}
      >
        {seminar.searchList.slice(0, 3).map((seminar) => (
          <SeminarRow key={seminar.id} seminar={seminar} />
        ))}
      </CommunitySubSection>
    </Section>
  );
}

const CommunitySubSection = ({
  title,
  size,
  href,
  divider,
  children,
}: {
  title: string;
  size: number;
  href: string;
  divider?: boolean;
  children: ReactNode;
}) => {
  if (size === 0) return <></>;

  return (
    <>
      <CircleTitle title={title} size={size} />
      <div className="ml-5 mr-10 mt-8 flex flex-col gap-7">{children}</div>
      <MoreResultLink href={href} />
      {divider && <Divider />}
    </>
  );
};

const MoreResultLink = ({ href }: { href: string }) => {
  const t = useTranslations('Nav');
  return (
    <Link
      href={href}
      className="text-middle mr-4 mt-10 flex items-center self-end text-md font-medium text-main-orange"
    >
      {t('결과 더보기')}
      <span className="material-symbols-outlined text-sm">chevron_right</span>
    </Link>
  );
};

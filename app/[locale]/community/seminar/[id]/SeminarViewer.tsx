import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

import { Link } from '@/navigation';

import Attachments from '@/components/common/Attachments';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';
import PostFooter from '@/components/post/PostFooter';

import { Seminar } from '@/types/seminar';

interface SeminarPostPageProps {
  seminar: Seminar;
}

export default async function SeminarViewer({ seminar }: SeminarPostPageProps) {
  const t = await getTranslations('Content');

  return (
    <>
      <h2 className="px-5 py-9 text-[1.25rem] font-semibold leading-[1.4] sm:pl-[100px] sm:pr-[340px]">
        {seminar.title}
      </h2>
      <div
        className="bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px]"
        style={{ paddingBottom: PAGE_PADDING_BOTTOM_PX }}
      >
        {seminar.attachments.length !== 0 && <Attachments files={seminar.attachments} />}
        <div className="mb-9 flex flex-col-reverse justify-between gap-5 text-md sm:flex-row">
          <div className="flex flex-col gap-3">
            <div>
              {t('이름')}: <LinkOrText href={seminar.speakerURL}>{seminar.name}</LinkOrText>
            </div>
            <div>{seminar.speakerTitle && <p>직함: {seminar.speakerTitle}</p>}</div>
            <div>
              {t('소속')}:{' '}
              <LinkOrText href={seminar.affiliationURL}>{seminar.affiliation}</LinkOrText>
            </div>
            <div className="mt-10">
              {t('주최')}: {seminar.host}
            </div>
            <div>
              {t('날짜')}: {formatStartEndDate(seminar.startDate, seminar.endDate)}
            </div>
            <div>
              {t('위치')}: {seminar.location}
            </div>
          </div>
          <div className="relative mx-7 aspect-square sm:h-60 sm:w-60">
            <ImageWithFallback
              alt={`대표_이미지`}
              src={seminar.imageURL}
              className="object-contain"
              fill
            />
          </div>
        </div>

        {seminar.description && (
          <>
            <div className="mt-10 font-bold">{t('요약')}</div>
            <HTMLViewer htmlContent={seminar.description} />
          </>
        )}

        {seminar.introduction && (
          <>
            <div className="mt-10 font-bold">{t('연사 소개')}</div>
            <HTMLViewer htmlContent={seminar.introduction} />
          </>
        )}

        <StraightNode margin="mt-10" />
        <PostFooter post={seminar} postType="seminar" id={seminar.id.toString()} margin="mt-12" />
      </div>
    </>
  );
}

const LinkOrText = ({ href, children }: { href: string | null; children: ReactNode }) => {
  return href ? (
    <Link className="text-link hover:underline" href={href}>
      {children}
    </Link>
  ) : (
    <p className="inline">{children}</p>
  );
};

const formatStartEndDate = (startDateStr: string, endDateStr: string | null) => {
  const startDate = new Date(startDateStr);
  if (endDateStr === null) {
    if (startDate.getHours() === 0 && startDate.getMinutes() === 0) {
      return new Date(startDateStr).toLocaleDateString('ko-KR');
    } else {
      return new Date(startDateStr).toLocaleString('ko-KR');
    }
  } else {
    const endDate = new Date(endDateStr);
    if (isSameDay(startDate, endDate)) {
      return `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      })} - ${endDate.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    } else {
      return `${startDate.toLocaleString('ko-KR')} - ${endDate.toLocaleString('ko-KR')}`;
    }
  }
};

const isSameDay = (lhs: Date, rhs: Date) =>
  lhs.getDate() === rhs.getDate() &&
  lhs.getMonth() === rhs.getMonth() &&
  lhs.getFullYear() === rhs.getFullYear();

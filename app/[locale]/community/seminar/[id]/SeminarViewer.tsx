import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

import { deleteSeminarAction } from '@/actions/seminar';
import { Seminar } from '@/apis/types/seminar';
import PostFooter from '@/app/[locale]/community/components/PostFooter';
import Attachments from '@/components/common/Attachments';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { PAGE_PADDING_BOTTOM_TAILWIND } from '@/components/layout/pageLayout/paddings';
import { seminar } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';

interface SeminarPostPageProps {
  seminarData: Seminar;
}

export default async function SeminarViewer({ seminarData }: SeminarPostPageProps) {
  const t = await getTranslations('Content');

  return (
    <>
      <h2 className="px-5 py-9 text-[1.25rem] font-semibold leading-[1.4] sm:pl-[100px] sm:pr-[340px]">
        {seminarData.title}
      </h2>
      <div
        className={`bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px] ${PAGE_PADDING_BOTTOM_TAILWIND}`}
      >
        {seminarData.attachments.length !== 0 && <Attachments files={seminarData.attachments} />}
        <div className="mb-9 flex flex-col-reverse justify-between gap-5 text-md sm:flex-row">
          <div className="flex flex-col gap-3">
            <div>
              {t('이름')}: <LinkOrText href={seminarData.speakerURL}>{seminarData.name}</LinkOrText>
            </div>
            <div>{seminarData.speakerTitle && <p>직함: {seminarData.speakerTitle}</p>}</div>
            <div>
              {t('소속')}:{' '}
              <LinkOrText href={seminarData.affiliationURL}>{seminarData.affiliation}</LinkOrText>
            </div>
            <div className="mt-10">
              {t('주최')}: {seminarData.host}
            </div>
            <div>
              {t('날짜')}: {formatStartEndDate(seminarData.startDate, seminarData.endDate)}
            </div>
            <div>
              {t('위치')}: {seminarData.location}
            </div>
          </div>
          <div className="relative mx-7 aspect-square sm:h-60 sm:w-60">
            <ImageWithFallback
              alt={`대표_이미지`}
              src={seminarData.imageURL}
              className="object-contain"
              fill
            />
          </div>
        </div>

        {seminarData.description && (
          <>
            <div className="mt-10 font-bold">{t('요약')}</div>
            <HTMLViewer htmlContent={seminarData.description} />
          </>
        )}

        {seminarData.introduction && (
          <>
            <div className="mt-10 font-bold">{t('연사 소개')}</div>
            <HTMLViewer htmlContent={seminarData.introduction} />
          </>
        )}

        <StraightNode margin="mt-10" />
        <PostFooter
          post={seminarData}
          path={getPath(seminar)}
          id={seminarData.id.toString()}
          margin="mt-12"
          deleteAction={deleteSeminarAction}
        />
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

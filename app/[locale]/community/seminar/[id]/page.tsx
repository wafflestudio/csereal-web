import Link from 'next-intl/link';
import { ReactNode } from 'react';

import { getSeminarPost } from '@/apis/seminar';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { seminar } from '@/types/page';
import { PostSearchQueryParams } from '@/types/post';

import { getAdjPostsInfo } from '@/utils/getAdjPostInfo';
import { getPath } from '@/utils/page';

interface SeminarPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const seminarPath = getPath(seminar);

export default async function SeminarPostPage({ params, searchParams }: SeminarPostPageProps) {
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/seminar/[id]: id가 숫자가 아닙니다.');

  const currPost = await getSeminarPost(parseInt(params.id), searchParams);
  const { prevPostPreview, nextPostPreview } = getAdjPostsInfo(currPost, searchParams, seminarPath);

  return (
    <PageLayout title={currPost.title} titleType="small" titleMargin="mb-5">
      <div className="mb-9 text-sm font-yoon text-neutral-700 leading-[1.63rem] flow-root break-all">
        {currPost.attachments.length !== 0 && <Attachments files={currPost.attachments} />}

        <div className="relative float-right ml-7 mt-4 mb-7 w-60 h-60">
          <ImageWithFallback
            src={currPost.imageURL ?? undefined}
            alt="대표 이미지"
            priority
            fill
            className="object-cover flex-1"
            sizes="240px"
          />
        </div>

        {'이름: '}
        <LinkOrText href={currPost.speakerURL}>{currPost.name}</LinkOrText>

        {currPost.speakerTitle && <p>직함: {currPost.speakerTitle}</p>}

        {'소속: '}
        <LinkOrText href={currPost.affiliationURL}>{currPost.affiliation}</LinkOrText>

        <div className="mt-10">주최: {currPost.host}</div>

        <div>일시: {formatStartEndDate(currPost.startDate, currPost.endDate)}</div>

        <div>장소: {currPost.location}</div>

        {currPost.description && (
          <>
            <div className="font-bold  mt-12">요약</div>
            <HTMLViewer htmlContent={currPost.description} />
          </>
        )}

        {currPost.introduction && (
          <>
            <div className="font-bold  mt-12">연사 소개</div>
            <HTMLViewer htmlContent={currPost.introduction} />
          </>
        )}
      </div>

      <StraightNode />
      <AdjPostNav
        prevPost={prevPostPreview}
        nextPost={nextPostPreview}
        listHref={seminarPath}
        editHref={`${seminarPath}/${params.id}/edit`}
        margin="mt-12"
      />
    </PageLayout>
  );
}

const LinkOrText = ({ href, children }: { href: string | null; children: ReactNode }) => {
  return href ? (
    <Link className="text-link hover:underline" href={href}>
      {children}
    </Link>
  ) : (
    <p>{children}</p>
  );
};

const formatStartEndDate = (startDateStr: string, endDateStr: string | null) => {
  if (endDateStr === null) {
    return new Date(startDateStr).toLocaleString('ko-KR');
  } else {
    const startDate = new Date(startDateStr);
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

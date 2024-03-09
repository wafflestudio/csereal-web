import { ReactNode } from 'react';

import { getSeminarPost } from '@/actions/seminarServer';
import { Link } from '@/navigation';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout, { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { getAdjPostsInfo } from '@/utils/getAdjPostInfo';
import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';

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
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <h2 className="px-5 py-9 text-[1.25rem] font-semibold sm:pl-[100px] sm:pr-[340px]">
        {currPost.title}
      </h2>
      <div
        className="bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px]"
        style={{
          paddingBottom: PAGE_PADDING_BOTTOM_PX,
        }}
      >
        {currPost.attachments.length !== 0 && <Attachments files={currPost.attachments} />}
        <div className="mb-9 flex flex-col-reverse justify-between gap-5 text-md leading-loose sm:flex-row">
          <div className="whitespace-nowrap">
            <div>
              {'이름: '}
              <LinkOrText href={currPost.speakerURL}>{currPost.name}</LinkOrText>
            </div>
            <div>{currPost.speakerTitle && <p>직함: {currPost.speakerTitle}</p>}</div>
            <div>
              {'소속: '}
              <LinkOrText href={currPost.affiliationURL}>{currPost.affiliation}</LinkOrText>
            </div>
            <div className="mt-10">주최: {currPost.host}</div>
            <div>일시: {formatStartEndDate(currPost.startDate, currPost.endDate)}</div>
            <div>장소: {currPost.location}</div>
          </div>
          <div className="relative mx-7 aspect-square sm:h-60 sm:w-60">
            <ImageWithFallback
              alt={`대표_이미지`}
              src={currPost.imageURL}
              className="object-contain"
              fill
            />
          </div>
        </div>

        {currPost.description && (
          <>
            <div className="mt-10 font-bold">요약</div>
            <HTMLViewer htmlContent={currPost.description} />
          </>
        )}

        {currPost.introduction && (
          <>
            <div className="mt-10 font-bold">연사 소개</div>
            <HTMLViewer htmlContent={currPost.introduction} />
          </>
        )}

        <StraightNode margin="mt-10" />
        <AdjPostNav
          prevPost={prevPostPreview}
          nextPost={nextPostPreview}
          postType="notice"
          id={params.id}
          margin="mt-12"
        />
      </div>
    </PageLayout>
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

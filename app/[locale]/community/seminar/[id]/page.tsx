import { ReactNode } from 'react';

import { getSeminarPost } from '@/actions/seminarServer';
import { Link } from '@/navigation';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

interface SeminarPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPostPage({ params, searchParams }: SeminarPostPageProps) {
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/seminar/[id]: id가 숫자가 아닙니다.');

  const seminar = await getSeminarPost(parseInt(params.id), searchParams);

  return (
    <PageLayout title={seminar.title} titleType="small" titleMargin="mb-5">
      <div className="mb-9 flow-root break-all text-sm leading-[1.63rem] text-neutral-700">
        {seminar.attachments.length !== 0 && <Attachments files={seminar.attachments} />}

        <div className="relative float-right mb-7 ml-7 mt-4 h-60 w-60">
          <ImageWithFallback
            src={seminar.imageURL ?? undefined}
            alt="대표 이미지"
            fill
            className="flex-1 object-cover"
            sizes="240px"
          />
        </div>

        <div>
          {'이름: '}
          <LinkOrText href={seminar.speakerURL}>{seminar.name}</LinkOrText>
        </div>

        <div>{seminar.speakerTitle && <p>직함: {seminar.speakerTitle}</p>}</div>
        <div>
          {'소속: '}
          <LinkOrText href={seminar.affiliationURL}>{seminar.affiliation}</LinkOrText>
        </div>

        <div className="mt-10">주최: {seminar.host}</div>

        <div>일시: {formatStartEndDate(seminar.startDate, seminar.endDate)}</div>

        <div>장소: {seminar.location}</div>

        {seminar.description && (
          <>
            <div className="mt-12  font-bold">요약</div>
            <HTMLViewer htmlContent={seminar.description} />
          </>
        )}

        {seminar.introduction && (
          <>
            <div className="mt-12  font-bold">연사 소개</div>
            <HTMLViewer htmlContent={seminar.introduction} />
          </>
        )}
      </div>

      <StraightNode />
      <AdjPostNav post={seminar} postType="seminar" id={params.id} margin="mt-12" />
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

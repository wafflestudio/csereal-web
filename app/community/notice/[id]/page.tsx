import { getNoticePostDetail } from '@/apis/notice';
import { getPostWithAdjInfo } from '@/apis/post';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/hooks/useCustomSearchParams';

import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

const writer = '박지혜';

interface NoticePostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const noticePath = getPath(notice);

export default async function NoticePostPage({ params, searchParams }: NoticePostPageProps) {
  const { currPost, prevPostPreview, nextPostPreview, listPathWithQuery } =
    await getPostWithAdjInfo(parseInt(params.id), searchParams, getNoticePostDetail, noticePath);

  return (
    <PageLayout title={currPost?.title ?? ''} titleType="small" titleMargin="mb-5">
      <div className="mb-10 ml-2.5 text-xs font-yoon text-neutral-400">
        글쓴이: {writer}, 작성시각: {currPost && formatFullDate(new Date(currPost.createdAt))}
      </div>
      <Attachments files={[]} />
      <HTMLViewer htmlContent={currPost?.description || ''} margin="mt-4 mb-10 ml-2.5" />
      <StraightNode />
      <Tags tags={currPost?.tags || []} margin="mt-3 ml-6" searchPath={noticePath} />
      <AdjPostNav
        prevPost={prevPostPreview}
        nextPost={nextPostPreview}
        href={listPathWithQuery}
        margin="mt-12"
      />
    </PageLayout>
  );
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const formatFullDate = (date: Date) => {
  const yyyy = String(date.getFullYear()).padStart(4, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const day = DAYS[date.getDay()];

  const hour24 = date.getHours();
  const isAM = hour24 < 12;
  const half = isAM ? '오전' : '오후';
  const hour12 = [0, 12].includes(hour24) ? 12 : isAM ? hour24 : hour24 - 12;
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const time = `${half} ${hour12}:${minute}`;

  return `${yyyy}/${mm}/${dd} (${day}) ${time}`; // e.g. 2023/08/01 (화) 오후 5:09
};

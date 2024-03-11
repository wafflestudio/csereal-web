import { getNoticePostDetail } from '@/apis/notice';

import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout, { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';
import PostFooter from '@/components/post/PostFooter';

import { PostSearchQueryParams } from '@/types/post';

import { formatPostDateStr } from '@/utils/date';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

interface NoticePostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const noticePath = getPath(notice);

export default async function NoticePostPage({
  params: { id: rawID },
  searchParams,
}: NoticePostPageProps) {
  const id = +rawID;

  // ID가 잘못된 경우 예외 처리
  if (Number.isNaN(id)) return <InvalidIDFallback rawID={rawID} />;

  const notice = await getNoticePostDetail(id, searchParams);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Header {...notice} />
      <div
        className="bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px]"
        style={{
          paddingBottom: PAGE_PADDING_BOTTOM_PX,
        }}
      >
        <Attachments files={notice.attachments} />
        <HTMLViewer htmlContent={notice.description} className="mb-10" />
        <StraightNode />
        <Tags tags={notice.tags} margin="mt-3 ml-6" searchPath={noticePath} />
        <PostFooter post={notice} postType="notice" id={rawID} margin="mt-12" />
      </div>
    </PageLayout>
  );
}

const InvalidIDFallback = ({ rawID }: { rawID: string }) => (
  <PageLayout titleType="small" titleMargin="mb-5">
    <p>
      <b>{rawID}</b>는 올바르지 않은 id입니다.
    </p>
  </PageLayout>
);

const Header = ({
  title,
  author,
  createdAt,
}: {
  title: string;
  author: string;
  createdAt: string;
}) => {
  return (
    <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
      <h2 className="text-[1.25rem] font-semibold">{title}</h2>
      <div className="flex gap-5 text-sm font-normal tracking-wide text-neutral-500">
        <p>글쓴이: {author}</p>
        <p>작성 시각: {formatPostDateStr(createdAt)}</p>
      </div>
    </div>
  );
};

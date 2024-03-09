import { getNoticePostDetail } from '@/apis/notice';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout, {
  PAGE_PADDING_BOTTOM_PX,
  PAGE_PADDING_LEFT_PX,
  PAGE_PADDING_RIGHT_PX,
  PAGE_PADDING_TOP_PX,
} from '@/components/layout/pageLayout/PageLayout';

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

  const currPost = await getNoticePostDetail(id, searchParams);

  return (
    <PageLayout titleType="big" titleMargin="mb-5" bodyStyle={{ padding: 0 }}>
      <Header title={currPost.title} author={currPost.author} dateStr={currPost.createdAt} />
      <div
        className="bg-neutral-50 pt-9"
        style={{
          paddingLeft: PAGE_PADDING_LEFT_PX,
          paddingRight: PAGE_PADDING_RIGHT_PX,
          paddingBottom: PAGE_PADDING_BOTTOM_PX,
        }}
      >
        <Attachments files={currPost.attachments} />
        <HTMLViewer htmlContent={currPost.description} className="mb-10 mt-4" />
        <StraightNode />
        <Tags tags={currPost.tags} margin="mt-3 ml-6" searchPath={noticePath} />
        <AdjPostNav post={currPost} postType="notice" id={rawID} margin="mt-12" />
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

const Header = ({ title, author, dateStr }: { title: string; author: string; dateStr: string }) => {
  return (
    <div
      className="mb-9 flex flex-col gap-4"
      style={{ paddingTop: PAGE_PADDING_TOP_PX, paddingLeft: PAGE_PADDING_LEFT_PX }}
    >
      <h2 className="text-[1.25rem] font-semibold">{title}</h2>
      <div className="flex gap-5 text-sm font-normal tracking-wide text-neutral-500">
        <p>글쓴이: {author}</p>
        <p>작성 시각: {formatPostDateStr(new Date(dateStr))}</p>
      </div>
    </div>
  );
};

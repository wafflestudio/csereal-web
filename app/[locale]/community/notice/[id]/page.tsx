import { getNoticePostDetail } from '@/actions/noticeServer';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout, { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { getAdjPostsInfo } from '@/utils/getAdjPostInfo';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

interface NoticePostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const noticePath = getPath(notice);

export default async function NoticePostPage({
  params: { id: rawId },
  searchParams,
}: NoticePostPageProps) {
  const id = +rawId;

  if (Number.isNaN(id)) {
    return (
      <PageLayout titleType="small" titleMargin="mb-5">
        <p>
          <b>{`'${rawId}'`}</b>는 올바르지 않은 id입니다.
        </p>
        <AdjPostNav postType="notice" margin="mt-12" />
      </PageLayout>
    );
  }

  const currPost = await getNoticePostDetail(id, searchParams);
  const { prevPostPreview, nextPostPreview } = getAdjPostsInfo(currPost, searchParams, noticePath);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Header title={currPost.title} author={currPost.author} dateStr={currPost.createdAt} />
      <div
        className="bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px]"
        style={{
          paddingBottom: PAGE_PADDING_BOTTOM_PX,
        }}
      >
        {currPost.attachments.length !== 0 && <Attachments files={currPost.attachments} />}
        <HTMLViewer htmlContent={currPost?.description || ''} className="mb-10 mt-4" />
        <StraightNode />
        <Tags tags={currPost?.tags || []} margin="mt-3 ml-6" searchPath={noticePath} />
        <AdjPostNav
          prevPost={prevPostPreview}
          nextPost={nextPostPreview}
          postType="notice"
          id={rawId}
          margin="mt-12"
        />
      </div>
    </PageLayout>
  );
}

function Header({ title, author, dateStr }: { title: string; author: string; dateStr: string }) {
  return (
    <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
      <h2 className="text-[1.25rem] font-semibold">{title}</h2>
      <div className="flex gap-5 text-sm font-normal tracking-wide text-neutral-500">
        <p>글쓴이: {author}</p>
        <p>작성 시각: {formatFullDate(new Date(dateStr))}</p>
      </div>
    </div>
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

import { useTranslations } from 'next-intl';

import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';
import PostFooter from '@/components/post/PostFooter';
import { Notice } from '@/types/notice';
import { formatPostDateStr } from '@/utils/date';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

interface NoticePostPageProps {
  notice: Notice;
}

const noticePath = getPath(notice);

export default async function NoticeViewer({ notice }: NoticePostPageProps) {
  return (
    <>
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
        <PostFooter post={notice} postType="notice" id={notice.id.toString()} margin="mt-12" />
      </div>
    </>
  );
}

const Header = ({
  title,
  author,
  createdAt,
}: {
  title: string;
  author: string;
  createdAt: string;
}) => {
  const t = useTranslations('Content');

  return (
    <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
      <h2 className="text-[1.25rem] font-semibold leading-[1.4]">{title}</h2>
      <div className="flex gap-5 text-sm font-normal tracking-wide text-neutral-500">
        <p>
          {t('작성자')}: {author}
        </p>
        <p>
          {t('작성 날짜')}: {formatPostDateStr(createdAt)}
        </p>
      </div>
    </div>
  );
};

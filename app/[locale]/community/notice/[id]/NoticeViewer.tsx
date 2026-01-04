import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { deleteNoticeAction } from '@/actions/notice';
import { Notice } from '@/apis/types/notice';
import PostFooter from '@/app/[locale]/community/components/PostFooter';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { PAGE_PADDING_BOTTOM_TAILWIND } from '@/components/layout/pageLayout/paddings';
import { notice } from '@/constants/segmentNode';
import { NOTICE_TAGS } from '@/constants/tag';
import { useDayjs } from '@/utils/hooks/useDayjs';
import { getPath } from '@/utils/page';

interface NoticePostPageProps {
  notice: Notice;
}

const noticePath = getPath(notice);

export default async function NoticeViewer({ notice }: NoticePostPageProps) {
  const t = await getTranslations('Page.notice.tag');
  const tags = NOTICE_TAGS.filter((tag) => notice.tags.includes(tag.id)).map((tag) => ({
    id: tag.id,
    text: t(tag.transKey),
  }));

  return (
    <>
      <Header {...notice} />
      <div
        className={`bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px] ${PAGE_PADDING_BOTTOM_TAILWIND}`}
      >
        <Attachments files={notice.attachments} />
        <HTMLViewer htmlContent={notice.description} wrapperClassName="mb-10" />
        <StraightNode />
        <Tags tags={tags} margin="mt-3 ml-6" searchPath={noticePath} />
        <PostFooter
          post={notice}
          path={noticePath}
          id={notice.id.toString()}
          margin="mt-12"
          deleteAction={deleteNoticeAction}
        />
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
  const t = useTranslations('common');
  const formatDate = useDayjs();

  return (
    <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
      <h2 className="text-[1.25rem] font-semibold leading-[1.4]">{title}</h2>
      <div className="flex gap-5 text-sm font-normal tracking-wide text-neutral-500">
        <p>
          {t('author')}: {author}
        </p>
        <p>
          {t('createdDate')}: {formatDate ? formatDate({ date: createdAt, format: 'time' }) : ''}
        </p>
      </div>
    </div>
  );
};

import HTMLViewer from '@/components/HTMLViewer';
import { StraightNode } from '@/components/Node';
import PageTitle from '@/components/PageTitle';

import { Location, PAGES } from '@/types/common';

import latestNewsNetwork from './network';

const locationLog: Location[] = [PAGES.communication, PAGES.latestNews];

export default function NoticePage({ params }: { params: { id: string } }) {
  // 에러 처리 필요 id가 없으면?
  const { title, mainImageURL, htmlContent, postDate } = latestNewsNetwork(+params.id);

  return (
    <div className="flex flex-row pt-7 px-[3.75rem] pb-[5.37rem]">
      <MainColumn
        locationLog={locationLog}
        title={title}
        htmlContent={htmlContent}
        postDate={postDate}
      />
      <ShortcutColumn />
    </div>
  );
}

function MainColumn({
  locationLog,
  title,
  htmlContent,
  postDate,
}: {
  locationLog: Location[];
  title: string;
  htmlContent: string;
  postDate: Date;
}) {
  return (
    <div className="">
      <PageTitle locationLog={locationLog} margin="mb-[3.25rem]">
        <h3 className="text-lg font-bold break-keep font-yoon">{title}</h3>
      </PageTitle>
      <HTMLViewer htmlContent={htmlContent} />
      <StraightNode />
    </div>
  );
}

function ShortcutColumn() {
  return <></>;
}

function Content({ content }: { content: string }) {
  return (
    <div
      className="text-[.8125rem] font-yoon font-regular leading-8"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

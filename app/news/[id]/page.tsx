import AdjPostNav from '@/components/common/AdjPostNav';
import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Node';
import PageTitle from '@/components/common/PageTitle';

import { Location, PAGES } from '@/types/common';

import latestNewsNetwork from './network';

const locationLog: Location[] = [PAGES.community, PAGES.news];

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
      <AdjPostNav
        nextPost={{
          title:
            '송현오 교수 연구진, 생성 모델의 이상 행동 탐지 기술 및 인공 신경망 깊이 압축 기술로 세계 선도',
          href: './',
        }}
      />
    </div>
  );
}

function ShortcutColumn() {
  return <></>;
}

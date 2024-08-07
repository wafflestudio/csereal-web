'use client';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Curriculum } from '@/types/academics';

import TimelinePageViewer from '../../helper/TimelinePageViewer';

export default function CurriculumPageContent({
  curriculumList,
}: {
  curriculumList: Curriculum[];
}) {
  return (
    <PageLayout titleType="big">
      {/* 추후 RoadMapButton 복구 */}
      <TimelinePageViewer contents={curriculumList} getTitle={getTimelineTitle} />
    </PageLayout>
  );
}

const getTimelineTitle = (year: number, isLast?: boolean) =>
  `${year}학번${isLast ? ' 이하' : ''} 전공 교과목 이수 표준 형태`;

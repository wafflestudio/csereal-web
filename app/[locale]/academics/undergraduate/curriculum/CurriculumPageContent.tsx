'use client';

import { deleteCurriculumAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Curriculum } from '@/types/academics';

import TimelineViewer from '../../helper/TimelineViewer';

export default function CurriculumPageContent({ data }: { data: Curriculum[] }) {
  return (
    <PageLayout titleType="big">
      {/* 추후 RoadMapButton 복구 */}
      <TimelineViewer
        contents={data}
        title={{ text: '전공 이수 표준 형태', unit: '학번' }}
        deleteAction={deleteCurriculumAction}
      />
    </PageLayout>
  );
}

'use client';

import { deleteCurriculumAction } from '@/actions/academics';
import { Curriculum } from '@/apis/types/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import TimelineViewer from '../../components/timeline/TimelineViewer';

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

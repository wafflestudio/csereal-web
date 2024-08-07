import { getCurriculum } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { curriculum } from '@/utils/segmentNode';

import TimelinePageViewer from '../../helper/TimelinePageViewer';

import './style.css';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: curriculum });
}

export default async function UndergradutecurriculumPage() {
  const curriculumList = await getCurriculum();

  return (
    <PageLayout titleType="big">
      {/* 추후 RoadMapButton 복구 */}
      <TimelinePageViewer
        contents={curriculumList}
        title={{ text: '전공 교과목 이수 표준 형태', unit: '학번' }}
      />
    </PageLayout>
  );
}

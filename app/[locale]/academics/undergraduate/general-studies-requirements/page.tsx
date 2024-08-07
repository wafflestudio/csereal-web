import { getGeneralStudiesRequirements } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { generalStudies } from '@/utils/segmentNode';

import TimelinePageViewer from '../../helper/TimelinePageViewer';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: generalStudies });
}

export default async function UndergraduateGeneralStudiesRequirements() {
  const { generalStudies } = await getGeneralStudiesRequirements();

  return (
    <PageLayout titleType="big">
      <p className="mb-10 bg-neutral-100 px-6 py-5 text-md leading-loose">{OVERVIEW}</p>
      <TimelinePageViewer
        contents={generalStudies}
        title={{ text: '영역별 교양과목 학점 배분 구조표', unit: '학번' }}
      />
    </PageLayout>
  );
}

const OVERVIEW =
  '컴퓨터공학부 학생이 졸업을 하기 위해 반드시 들어야 하는 영역별 교양과목 학점 배분 구조표입니다. 학부생들은 아래의 구조표를 참고하여 수강에 차질이 없도록 하여야 합니다.';

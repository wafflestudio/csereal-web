import { Metadata } from 'next';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

import { getMetadata } from '@/utils/metadata';
import { people } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: people });
}

export default function PeoplePage() {
  return <MajorCategoryPageLayout subtitle="Leading CSE" description={description} />;
}

// api로 받아올 수는 있으나 description 때문에 교수진 전체를 불러오는게 좋은 것 같지 않아 수동으로 추가
// TODO: 대책 생각
const description = `<p>컴퓨터공학부는 35명의 훌륭한 교수진과 최신 시설을 갖추고 400여 명의 학부생과 350여 명의 대학원생에게 세계 최고 수준의 교육 연구 환경을 제공하고 있다. 2005년에는 서울대학교 최초로 외국인 정교수인 Robert Ian McKay 교수를 임용한 것을 시작으로 교내에서 가장 국제화가 활발하게 이루어지고 있는 학부로 평가받고 있다. 현재 훌륭한 외국인 교수님 두 분이 학부 학생들의 교육 및 연구 지도에 총력을 기울이고 있다.</p><br/><p> 다수의 외국인 학부생, 대학원생이 재학 중에 있으며 매 학기 전공 필수 과목을 비롯한 30% 이상의 과목이 영어로 개설되고 있어 외국인 학생의 학업을 돕는 동시에 한국인 학생이 세계로 진출하는 초석이 되고 있다. 또한 CSE int’l Luncheon을 개최하여 학부 내 외국인 구성원의 화합과 생활의 불편함을 최소화하는 등 학부 차원에서 최선을 다하고 있다.</p>`;

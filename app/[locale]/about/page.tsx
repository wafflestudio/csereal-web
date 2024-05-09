import { Metadata } from 'next';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

import { getMetadata } from '@/utils/metadata';
import { about } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: about });
}

export default async function AboutPage() {
  return (
    <MajorCategoryPageLayout
      subtitle="About CSE"
      description="컴퓨터 산업은 대표적인 기술 및 두뇌 집약형 산업으로서 국책 산업의 하나로 지정되어 국가적인 차원에서 지원, 육성되고 있습니다. 미래를 선도할 AI 기술 개발, 고성능 컴퓨터 개발, 차세대 인터넷 및 통신 기술 개발, 인간 친화적 지능형 소프트웨어 기술 등 새로운 컴퓨터 기술이 산업 전반에 걸쳐 역할을 증대하고 있습니다. 이에 따라, 컴퓨터 고급전문인력에 대한 산업계의 수요는 급격히 증가하고 있으며, 서울대학교 컴퓨터공학부는 첨단 컴퓨터 기술 연구와 이를 통한 인력 양성의 구심체가 되고자 노력하고 있습니다."
    />
  );
}

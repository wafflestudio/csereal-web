import Image from 'next/image';

import brochure1 from '@/public/image/about/brochure1.png';
import brochure2 from '@/public/image/about/brochure2.png';

import Attachment from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function OverviewPage() {
  return (
    <PageLayout titleType="big" titleMargin="mb-9" removeChildPadding>
      <div className="flex gap-10 bg-neutral-100 py-10 pl-[6.25rem] pr-[22rem] items-start">
        <HTMLViewer htmlContent={description} className="w-[37.5rem] shrink-0" />
        <Image
          src="https://cse-dev-waffle.bacchus.io/sites/default/files/styles/medium-larger/public/node--page/301302.jpg?itok=96k1IsL0"
          alt="학교 전경"
          width={320}
          height={213}
        />
      </div>
      <div className="pt-10 pl-[6.25rem] pb-[7.88rem]">
        <h2 className="text-base font-semibold mb-6">학부 소개 책자</h2>
        <div className="flex gap-6 mb-10">
          <Image src={brochure1.src} width={227} height={320} alt="소개 책자" />
          <Image src={brochure2.src} width={227} height={320} alt="소개 책자" />
        </div>
        <Attachment files={[attachment]} />
      </div>
    </PageLayout>
  );
}

const description = `
<p>
컴퓨터공학은 정보화 사회로의 이행에 있어 필수적이고 핵심적인 학문으로서, 성능이 우수한 컴퓨터를 설계 제작하고 운영 및 응용에 필요한 소프트웨어를 개발하여, 산업 전반에서 이를 활용할 수 있게 하는 학문이다. 컴퓨터공학은 이론적인 측면에서의 기반 기술 연구와 이를 실생활에 직접 응용할 수 있는 응용 연구를 추구하고 있다. 현대의 모든 산업들은 점차 그 복잡도가 증가함에 따라 컴퓨터를 통한 문제 해결을 시도하고 있다. 컴퓨터공학은 이러한 융합적, 통섭적 사고와 연구를 주도하고 있으며, 이를 통해 산업 전반에 걸쳐 영향력을 확대하고 있다.
<br/>
<br/>
컴퓨터 분야의 교육 및 연구 내용은 공학 및 과학의 기초 지식을 바탕으로 한 논리적 추리 및 독창적 사고력을 요한다. 컴퓨터 소프트웨어 및 하드웨어는 매우 긴밀한 유기적 연관을 갖기 때문에 하드웨어와 소프트웨어에 관한 전문 지식을 함께 공부하며 이를 바탕으로 컴퓨터 구조, 운영체제, 데이타베이스, 프로그래밍언어, 컴퓨터 통신, 컴퓨터 이용설계, 인공지능, 알고리즘, 자연언어처리, 멀티미디어시스템, 객체지향시스템, 분산시스템, 실시간시스템 등에 관한 전문 지식을 습득하고 새로운 이론 정립 및 실험 연구를 수행한다.
<br/>
<br/>
컴퓨터 산업은 대표적인 기술 및 두뇌 집약형 산업으로서 국책 산업의 하나로 지정되어 국가적인 차원에서 지원, 육성되고 있다. 미래를 선도할 AI 기술 개발, 고성능 컴퓨터 개발, 차세대 인터넷 및 통신 기술 개발, 인간 친화적 지능형 소프트웨어 기술 등 새로운 컴퓨터 기술이 산업 전반에 걸쳐 역할을 증대하고 있다. 이에 따라, 컴퓨터 고급전문인력에 대한 산업계의 수요는 급격히 증가하고 있으며, 서울대학교 컴퓨터공학부는 첨단 컴퓨터 기술 연구와 이를 통한 인력 양성의 구심체가 되고자 노력하고 있다.
</p>
`;

const attachment = {
  name: 'CSE_Brochure.pdf',
  url: 'https://cse.snu.ac.kr/sites/default/files/node--page/CSE_Brochure.pdf',
  bytes: 281500,
};

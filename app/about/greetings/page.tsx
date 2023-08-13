import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/PageLayout';

import { SimpleHTMLPageResponse } from '@/types/post';

export default async function GreetingsPage() {
  const response = await mockNetwork();

  return (
    <PageLayout title="학부장 인사말" titleSize="text-2xl">
      <HTMLViewer
        htmlContent={response.description}
        mainImage={{ width: 212, height: 280, url: response.mainImageURL }}
      />
    </PageLayout>
  );
}

const mockNetwork = async () => mockResponse;

const mockResponse: SimpleHTMLPageResponse = {
  mainImageURL: 'https://picsum.photos/id/237/320/240',
  description: `
  <p>컴퓨터 분야(컴퓨터과학/컴퓨터공학)는 이미 모든게 이루어진 성숙한&nbsp;기술이 아닙니다. 아직 넓고 깊고 다양한 기회를 미래에 가지고 있고,&nbsp;우리나라 미래 먹거리의 중요한 한 기둥이 될 수 있는 분야입니다. 미래에&nbsp;이루어질 거대한 변화에 비하면 지금까지의 컴퓨터기술의 성과는 매우&nbsp;미미한 시작일 뿐입니다. 탄생이후 겨우 약 70-80년인 이 분야는 미숙하기 때문에 많은 기회를 가지고 있습니다. 비유하자면, 지금은 뉴턴과 갈릴레오와 큐리와 동시대에 살아가는 초창기일 뿐입니다.&nbsp;</p>
<div>그러므로, 컴퓨터 기술이 어떻게 펼쳐질 지를 예측하거나, 특정분야의 선택과 집중을 논의하는 것은 의미없을 수 있습니다. 모든 미래예측이 늘 그렇듯이 사실을 빗겨가는 비생산적인 정치적 소모가 되기 쉽습니다.&nbsp;</div>
<div>&nbsp;</div>
<div>확실한 것은, 컴퓨터과학/공학의 성과를 통해서 인간의 지능/본능/현실은 나날이 확장될 것이라는 점입니다. 마치 생명과학의 성과를 통해서 인간 수명이 연장되고, 물리학의 성과를 통해서 에너지원이 확장되는 것과 같습니다.&nbsp;</div>
<div>&nbsp;</div>
<div>이러한 미래에 우리가 공헌하고, 이로부터 자연스럽게 큰 먹거리를 만들어낼 수 있을 것입니다. 힘든 오르막이지만 올라서면 펼쳐질 미래지형은 크게 남아있습니다.</div>
<div>&nbsp;</div>
<div>서울대학교 컴퓨터공학부는 이런 미래를 세계적으로 선도해가는 35명의 훌륭한 교수진과 400여 명의 학부생과 350여 명의 대학원생들이 세계 최고 수준의 교육과 연구 결과를 만들어내고 있습니다.&nbsp;</div>
<div>&nbsp;</div>
<div>서울대학교 컴퓨터공학부는 이렇게 세계적인 컴퓨터 연구자들이 교수로 모이고, 그 지도를 받고 싶은 최고의 학생들이 따라 모이고, 정부와 기업은 우리의 연구가 10-20년 후에 산업동력이 될 것을 기대하며 우리를 지원하고, 우리는 지식의 한계를 넓히는 대학의 역할을 즐기면서 한국이 깊이있는 컴퓨터기술의 선진국이 되는데 공헌해가고 있습니다.</div>
<div>&nbsp;</div>
<div>이러한 서울대학교 컴퓨터공학부의 비전에 함께하는 여러분 모두의 응원과 동참에 감사드립니다.</div>
<div>&nbsp;</div>
<div>감사합니다.</div>
<div>&nbsp;</div>
<div style="margin-left: 30px; text-align: right;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="https://cse.snu.ac.kr/sites/default/files/styles/large/public/node--notice/kwang-sign-kr.jpg?itok=IaijDiGR" alt="" width="230" height="220" /></div>
  `,
};

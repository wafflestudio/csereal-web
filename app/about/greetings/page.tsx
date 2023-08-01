'use client';

import dynamic from 'next/dynamic';
import './page.css';

import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { greetings } from '@/types/page';

const NoSsrViewer = dynamic(() => import('@/components/common/Editor/TuiViewer'), {
  ssr: false,
});

const content = `<img src="https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--greetings/%EC%9D%B4%EA%B4%91%EA%B7%BC%EA%B5%90%EC%88%98%EB%8B%98.jpg?itok=PxtBa8Du" alt="main image" class="main-image" />컴퓨터 분야(컴퓨터과학/컴퓨터공학)는 이미 모든게 이루어진 성숙한 기술이 아닙니다. 아직 넓고 깊고 다양한 기회를 미래에 가지고 있고, 우리나라 미래 먹거리의 중요한 한 기둥이 될 수 있는 분야입니다. 미래에 이루어질 거대한 변화에 비하면 지금까지의 컴퓨터기술의 성과는 매우 미미한 시작일 뿐입니다. 탄생이후 겨우 약 70-80년인 이 분야는 미숙하기 때문에 많은 기회를 가지고 있습니다. 비유하자면, 지금은 뉴턴과 갈릴레오와 큐리와 동시대에 살아가는 초창기일 뿐입니다. 

그러므로, 컴퓨터 기술이 어떻게 펼쳐질 지를 예측하거나, 특정분야의 선택과 집중을 논의하는 것은 의미없을 수 있습니다. 모든 미래예측이 늘 그렇듯이 사실을 빗겨가는 비생산적인 정치적 소모가 되기 쉽습니다. 
 
확실한 것은, 컴퓨터과학/공학의 성과를 통해서 인간의 지능/본능/현실은 나날이 확장될 것이라는 점입니다. 마치 생명과학의 성과를 통해서 인간 수명이 연장되고, 물리학의 성과를 통해서 에너지원이 확장되는 것과 같습니다. 
 
이러한 미래에 우리가 공헌하고, 이로부터 자연스럽게 큰 먹거리를 만들어낼 수 있을 것입니다. 힘든 오르막이지만 올라서면 펼쳐질 미래지형은 크게 남아있습니다.
 
서울대학교 컴퓨터공학부는 이런 미래를 세계적으로 선도해가는 35명의 훌륭한 교수진과 400여 명의 학부생과 350여 명의 대학원생들이 세계 최고 수준의 교육과 연구 결과를 만들어내고 있습니다. 
 
서울대학교 컴퓨터공학부는 이렇게 세계적인 컴퓨터 연구자들이 교수로 모이고, 그 지도를 받고 싶은 최고의 학생들이 따라 모이고, 정부와 기업은 우리의 연구가 10-20년 후에 산업동력이 될 것을 기대하며 우리를 지원하고, 우리는 지식의 한계를 넓히는 대학의 역할을 즐기면서 한국이 깊이있는 컴퓨터기술의 선진국이 되는데 공헌해가고 있습니다.
 
이러한 서울대학교 컴퓨터공학부의 비전에 함께하는 여러분 모두의 응원과 동참에 감사드립니다.
 
감사합니다.`;

export default function GreetingsPage() {
  //   const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="mx-10 mt-5 mb-20">
      <PageTitle currentPage={greetings}>
        <h3 className="text-2xl font-bold break-keep font-yoon">학부장 인사말</h3>
      </PageTitle>
      <div className="flex w-full">
        <div className="w-full my-4 mr-10">
          <NoSsrViewer content={content} />
        </div>
        <Sidebar currentTab={greetings} />
      </div>
    </div>
  );
}

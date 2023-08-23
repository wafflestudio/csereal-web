import { readFile } from 'fs/promises';

import { FutureCareers, Greetings, History, Overview } from '@/types/about';

import { futureCompanies, futureStat } from './objects';

export const getMockOverview = async (): Promise<Overview> => {
  return {
    description: await readFile('data/htmls/overview.txt', { encoding: 'utf-8' }),
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--page/301302.jpg?itok=96k1IsL0',
    attachment: {
      name: 'CSE_Brochure.pdf',
      url: 'https://cse.snu.ac.kr/sites/default/files/node--page/CSE_Brochure.pdf',
      bytes: 281500000,
    },
  };
};

export const getMockGreetings = async (): Promise<Greetings> => {
  return {
    description: await readFile('data/htmls/greetings.txt', { encoding: 'utf-8' }),
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--greetings/이광근교수님.jpg?itok=PxtBa8Du',
  };
};

export const getMockHistory = async (): Promise<History> => {
  return {
    description: `<p>서울대학교 컴퓨터공학부의 역사는 1963년 응용수학과가 설립되면서부터 시작되었다. 이후 수십 년간 컴퓨터공학 학문이 급격히 요동치며 발전해나가는 동안, 컴퓨터공학부의 모습 또한 커다란 변화를 거듭해 왔다.<br></p><p>1975년 3월, 자연과학대학의 계산통계학과가 신설되었다. 계산통계학과는 2년 뒤인 1977년 3월, 석사과정을 전산과학전공과 통계전공으로 분리하였다.</p><p>1978년 12월 공과대학의 전자계산학과가 신설되었다. 1979년 1월에는 전자계산기공학과로 개칭되었으며 1980년 3월에 대학원이 설치되었다. 1989년 3월 학과 명칭을 공과대학 컴퓨터공학과로 개칭하였다.</p><p>1977년, 자연과학대학 계산통계학과의 석사과정이 전산과학전공과 통계전공으로 분리된 데에 이어, 박사과정과 학사과정 또한 각각 1990년 3월, 1991년 3월, 2년에 걸쳐 두 전공으로 분리되었다.</p><p>2000년 '공과대학 컴퓨터공학과'와 '자연과학대학 전산과학전공' 통합 후 컴퓨터공학부로 개칭하였으며, 현재까지 이어져 오고 있다.</p>`,
    imageURL: 'https://picsum.photos/id/870/1000/1000',
  };
};

export const getMockFutureCareers = async (): Promise<FutureCareers> => {
  return {
    description: `컴퓨터공학을 전공함으로써 벤처기업을 창업할 수 있을 뿐 아니라 시스템엔지니어, 보안전문가, 소프트웨어개발자, 데이터베이스관리자 등 많은 IT 전문 분야로의 진출이 가능하다. 또한 컴퓨터공학은 바이오, 전자전기, 로봇, 기계, 의료 등 이공계 영역뿐만 아니라 정치, 경제, 사회, 문화의 다양한 분야와 결합되어 미래 지식정보사회에 대한 새로운 가능성을 제시하고 있고 새로운 학문적 과제가 지속적으로 생산되기 때문에 많은 전문연구인력이 필요하다.

서울대학교 컴퓨터공학부의 경우 학부 졸업생 절반 이상이 대학원에 진학하고 있다. 대학원에 진학하면 여러 전공분야 중 하나를 선택하여 보다 깊이 있는 지식의 습득과 연구과정을 거치게 되며 그 이후로는 국내외 관련 산업계, 학계에 주로 진출하고 있고, 새로운 아이디어로 벤처기업을 창업하기도 한다.`,
    stat: futureStat,
    companies: futureCompanies,
  };
};

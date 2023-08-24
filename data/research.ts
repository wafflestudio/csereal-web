import { ResearchLabInfo } from '@/types/research';

export const lab: ResearchLabInfo = {
  id: 1,
  name: '컴퓨터 그래픽스 및 이미지 처리 연구실',
  professors: [
    { id: 1, name: '신영길' },
    { id: 2, name: '김보형' },
  ],
  location: '301동 551-1호 / 551-2호 / 554-1호 / 516호',
  tel: '(02) 880-1860',
  acronym: 'QUIQCL',
  introductionMaterials: {
    pdf: 'https://picsum.photos/801',
    youtube: 'https://youtu.be/LCQrNawLymE',
  },
};

export const lab2: ResearchLabInfo = {
  id: 4,
  name: '데이터 마이닝 연구실',
  professors: [{ id: 3, name: '강유' }],
  location: '301동 551-1호 / 551-2호 / 554-1호 / 516호',
  tel: '(02) 880-1860',
  acronym: 'QUIQCL',
  introductionMaterials: { pdf: '/', youtube: 'https://youtu.be/3B2msqtwfCc' },
};

export const groupMock = {
  name: '그래픽스 및 사람 중심 컴퓨팅',
  description:
    '세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터 관련 주요 학회에서 국제 학술지 편집위원, 국제학술회의 위원장, 기조연성자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.',
  imageURL: 'https://picsum.photos/801',
  labs: [
    { id: 1, name: '컴퓨터 그래픽스 및 이미지 처리 연구실' },
    { id: 2, name: '운동 연구실' },
    { id: 3, name: '휴먼-컴퓨터 인터랙션 연구실' },
    { id: 4, name: '인간 중심 컴퓨터 시스템 연구실' },
    { id: 5, name: '지능형 동작 연구실' },
  ],
};

export const centersMock = [
  {
    id: 1,
    name: '컴퓨터 연구소',
    description:
      '서울대학교 컴퓨터연구소는 국내 여러 대학 간의 공동 연구와 산학 협동 체제 구축을 통한 컴퓨터 관련 신기술 및 미래지향적인 컴퓨터 개발 능력의 확보와 전문 연구 인력의 양성을 목적으로 본교를 비롯한 전국 20여 개 대학의 컴퓨터 관련 학과가 참여한 가운데 1989년에 설립되었다. 컴퓨터분야 최첨단 기술의 연구 개발과 전국의 각 대학, 산업체 및 연구소 간의 상호 협력적 연구의 구심점 역할을 하고 있으며, 정보기술(IT)과 관련하여 고급 인력 양성과 계속교육 등을 통하여 국내 컴퓨터 산업의 성장에도 크게 기여하고 있다. 차세대 컴퓨터 개발을 위한 선진 기술의 토착화 및 세계적인 첨단 기술의 선도를 위해 컴퓨터공학 및 컴퓨터과학의 제 분야에 대한 연구를 수행하고 있다.',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%B0%EA%B5%AC%EC%86%8C.jpg?itok=ZMrQExO0',
    websiteURL: 'https://ict.snu.ac.kr',
  },
  {
    id: 2,
    name: '컴퓨터 미래 인재 양성 사업단',
    description:
      '서울대학교 컴퓨터연구소는 국내 여러 대학 간의 공동 연구와 산학 협동 체제 구축을 통한 컴퓨터 관련 신기술 및 미래지향적인 컴퓨터 개발 능력의 확보와 전문 연구 인력의 양성을 목적으로 본교를 비롯한 전국 20여 개 대학의 컴퓨터 관련 학과가 참여한 가운데 1989년에 설립되었다. 컴퓨터분야 최첨단 기술의 연구 개발과 전국의 각 대학, 산업체 및 연구소 간의 상호 협력적 연구의 구심점 역할을 하고 있으며, 정보기술(IT)과 관련하여 고급 인력 양성과 계속교육 등을 통하여 국내 컴퓨터 산업의 성장에도 크게 기여하고 있다. 차세대 컴퓨터 개발을 위한 선진 기술의 토착화 및 세계적인 첨단 기술의 선도를 위해 컴퓨터공학 및 컴퓨터과학의 제 분야에 대한 연구를 수행하고 있다.',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%B0%EA%B5%AC%EC%86%8C.jpg?itok=ZMrQExO0',
    websiteURL: 'https://ict.snu.ac.kr',
  },
  {
    id: 3,
    name: 'AI 연구원',
    description:
      '서울대학교 컴퓨터연구소는 국내 여러 대학 간의 공동 연구와 산학 협동 체제 구축을 통한 컴퓨터 관련 신기술 및 미래지향적인 컴퓨터 개발 능력의 확보와 전문 연구 인력의 양성을 목적으로 본교를 비롯한 전국 20여 개 대학의 컴퓨터 관련 학과가 참여한 가운데 1989년에 설립되었다. 컴퓨터분야 최첨단 기술의 연구 개발과 전국의 각 대학, 산업체 및 연구소 간의 상호 협력적 연구의 구심점 역할을 하고 있으며, 정보기술(IT)과 관련하여 고급 인력 양성과 계속교육 등을 통하여 국내 컴퓨터 산업의 성장에도 크게 기여하고 있다. 차세대 컴퓨터 개발을 위한 선진 기술의 토착화 및 세계적인 첨단 기술의 선도를 위해 컴퓨터공학 및 컴퓨터과학의 제 분야에 대한 연구를 수행하고 있다.',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%B0%EA%B5%AC%EC%86%8C.jpg?itok=ZMrQExO0',
    websiteURL: 'https://ict.snu.ac.kr',
  },
];

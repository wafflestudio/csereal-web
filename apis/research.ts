import { getRequest } from '.';

const researchPath = '/research';

export interface ResearchGroup {
  name: string;
  description: string;
  imageURL: string;
  laboratories: string[];
}

export interface ResearchGroups {
  description: string;
  groups: ResearchGroup[];
}

const groupMock = {
  name: '그래픽스 및 사람 중심 컴퓨팅',
  description:
    '세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터 관련 주요 학회에서 국제 학술지 편집위원, 국제학술회의 위원장, 기조연성자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.',
  imageURL: 'https://picsum.photos/801',
  laboratories: [
    '컴퓨터 그래픽스 및 이미지 처리 연구실',
    '운동 연구실',
    '휴먼-컴퓨터 인터랙션 연구실',
    '인간 중심 컴퓨터 시스템 연구실',
    '지능형 동작 연구실',
  ],
};

export const getResearchGroups = () => getRequest(researchPath) as Promise<ResearchGroups>;

export const getResearchGroupsMock: typeof getResearchGroups = async () => {
  console.log('api call');
  return {
    description:
      '세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터 관련 주요 학회에서 국제 학술지 편집위원, 국제학술회의 위원장, 기조연성자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.',
    groups: [
      '그래픽스 및 사람 중심 컴퓨팅',
      '네트워크',
      '시스템 소프트웨어 및 분산시스템',
      '데이터베이스 및 빅데이터',
      '컴퓨터구조 및 임베디드 시스템',
      '인공지능',
      '프로그래밍 시스템 및 SW 공학',
      '이론 및 금융공학',
    ].map((g) => ({ ...groupMock, name: g })),
  };
};

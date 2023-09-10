import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';

import {
  Curriculum,
  DegreeRequirements,
  GeneralStudiesRequirements,
  Scholarship,
  ScholarshipList,
} from '@/types/academics';
import { ResearchLab } from '@/types/research';

import { simpleResearchLabs } from './objects';

export const researchLabs: ResearchLab[] = [
  {
    ...simpleResearchLabs[0],
    description: readFileSync('data/htmls/labs/lab0Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://datalab.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[1],
    description: readFileSync('data/htmls/labs/lab1Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://dbs.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[2],
    description: readFileSync('data/htmls/labs/lab2Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mllab.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[3],
    description: readFileSync('data/htmls/labs/lab3Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://bi.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[4],
    description: readFileSync('data/htmls/labs/lab4Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://dcslab.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[5],
    description: readFileSync('data/htmls/labs/lab5Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://jhugestar.github.io/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[6],
    description: readFileSync('data/htmls/labs/lab6Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://bda.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[7],
    description: readFileSync('data/htmls/labs/lab7Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://biohealth.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[8],
    description: readFileSync('data/htmls/labs/lab8Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://sf.snu.ac.kr/',
    group: '프로그래밍 시스템 및 SW공학',
  },
  {
    ...simpleResearchLabs[9],
    description: readFileSync('data/htmls/labs/lab9Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://spl.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[10],
    description: readFileSync('data/htmls/labs/lab10Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://vision.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[11],
    description: readFileSync('data/htmls/labs/lab11Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://csl.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[12],
    description: readFileSync('data/htmls/labs/lab12Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://rubis.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[13],
    description: readFileSync('data/htmls/labs/lab13Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://arc.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[14],
    description: readFileSync('data/htmls/labs/lab14Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://yongsoosong.github.io/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[15],
    description: readFileSync('data/htmls/labs/lab15Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://quiqcl.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[16],
    description: readFileSync('data/htmls/labs/lab16Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://seungwonh.github.io/ldi.html',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[17],
    description: readFileSync('data/htmls/labs/lab17Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mrl.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[18],
    description: readFileSync('data/htmls/labs/lab18Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mccl.snu.ac.kr/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[19],
    description: readFileSync('data/htmls/labs/lab19Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://hcs.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[20],
    description: readFileSync('data/htmls/labs/lab20Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mmlab.snu.ac.kr/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[21],
    description: readFileSync('data/htmls/labs/lab21Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://davinci.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[22],
    description: readFileSync('data/htmls/labs/lab22Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://ids.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[23],
    description: readFileSync('data/htmls/labs/lab23Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://imo.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[24],
    description: readFileSync('data/htmls/labs/lab24Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://aces.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[25],
    description: readFileSync('data/htmls/labs/lab25Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://soar.snu.ac.kr/',
    group: '이론 및 금융공학',
  },
  {
    ...simpleResearchLabs[26],
    description: readFileSync('data/htmls/labs/lab26Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://cglab.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[27],
    description: readFileSync('data/htmls/labs/lab27Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://csap.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[28],
    description: readFileSync('data/htmls/labs/lab28Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://theory.snu.ac.kr/',
    group: '이론 및 금융공학',
  },
  {
    ...simpleResearchLabs[29],
    description: readFileSync('data/htmls/labs/lab29Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://cmalab.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드 시스템',
  },
  {
    ...simpleResearchLabs[30],
    description: readFileSync('data/htmls/labs/lab30Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://iris.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드 시스템',
  },
  {
    ...simpleResearchLabs[31],
    description: readFileSync('data/htmls/labs/lab31Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://ropas.snu.ac.kr/',
    group: '프로그래밍 시스템 및 SW공학',
  },
  {
    ...simpleResearchLabs[32],
    description: readFileSync('data/htmls/labs/lab32Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://hcil.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
];

export const getMockCurriculum = async (): Promise<Curriculum[]> => {
  return [
    {
      id: 1,
      description: await readFile('data/htmls/curriculum/curriculum_2023.txt', {
        encoding: 'utf-8',
      }),
      year: 2023,
    },
    {
      id: 2,
      description: await readFile('data/htmls/curriculum/curriculum_2022.txt', {
        encoding: 'utf-8',
      }),
      year: 2022,
    },
    {
      id: 3,
      description: await readFile('data/htmls/curriculum/curriculum_2021.txt', {
        encoding: 'utf-8',
      }),
      year: 2021,
    },
    {
      id: 4,
      description: await readFile('data/htmls/curriculum/curriculum_2020.txt', {
        encoding: 'utf-8',
      }),
      year: 2020,
    },
    {
      id: 5,
      description: await readFile('data/htmls/curriculum/curriculum_2019.txt', {
        encoding: 'utf-8',
      }),
      year: 2019,
    },
    {
      id: 6,
      description: await readFile('data/htmls/curriculum/curriculum_2018.txt', {
        encoding: 'utf-8',
      }),
      year: 2018,
    },
    {
      id: 7,
      description: await readFile('data/htmls/curriculum/curriculum_2017.txt', {
        encoding: 'utf-8',
      }),
      year: 2017,
    },
    {
      id: 8,
      description: await readFile('data/htmls/curriculum/curriculum_2016.txt', {
        encoding: 'utf-8',
      }),
      year: 2016,
    },
    {
      id: 9,
      description: await readFile('data/htmls/curriculum/curriculum_2015.txt', {
        encoding: 'utf-8',
      }),
      year: 2015,
    },
    {
      id: 10,
      description: await readFile('data/htmls/curriculum/curriculum_2014.txt', {
        encoding: 'utf-8',
      }),
      year: 2014,
    },
    {
      id: 11,
      description: await readFile('data/htmls/curriculum/curriculum_2013.txt', {
        encoding: 'utf-8',
      }),
      year: 2013,
    },
    {
      id: 12,
      description: await readFile('data/htmls/curriculum/curriculum_2012.txt', {
        encoding: 'utf-8',
      }),
      year: 2012,
    },
    {
      id: 13,
      description: await readFile('data/htmls/curriculum/curriculum_2011.txt', {
        encoding: 'utf-8',
      }),
      year: 2011,
    },
    {
      id: 14,
      description: await readFile('data/htmls/curriculum/curriculum_2010.txt', {
        encoding: 'utf-8',
      }),
      year: 2010,
    },
    {
      id: 15,
      description: await readFile('data/htmls/curriculum/curriculum_2009.txt', {
        encoding: 'utf-8',
      }),
      year: 2009,
    },
    {
      id: 16,
      description: await readFile('data/htmls/curriculum/curriculum_2008.txt', {
        encoding: 'utf-8',
      }),
      year: 2008,
    },
    {
      id: 17,
      description: await readFile('data/htmls/curriculum/curriculum_2007.txt', {
        encoding: 'utf-8',
      }),
      year: 2007,
    },
    {
      id: 18,
      description: await readFile('data/htmls/curriculum/curriculum_2006.txt', {
        encoding: 'utf-8',
      }),
      year: 2006,
    },
    {
      id: 19,
      description: await readFile('data/htmls/curriculum/curriculum_2005.txt', {
        encoding: 'utf-8',
      }),
      year: 2005,
    },
    {
      id: 20,
      description: await readFile('data/htmls/curriculum/curriculum_2004.txt', {
        encoding: 'utf-8',
      }),
      year: 2004,
    },
    {
      id: 21,
      description: await readFile('data/htmls/curriculum/curriculum_2003.txt', {
        encoding: 'utf-8',
      }),
      year: 2003,
    },
    {
      id: 22,
      description: await readFile('data/htmls/curriculum/curriculum_2002.txt', {
        encoding: 'utf-8',
      }),
      year: 2002,
    },
  ];
};

export const getMockDegreeRequirements = async (): Promise<DegreeRequirements[]> => {
  return [
    {
      id: 1,
      year: 2023,
      attachment: {
        name: '2023학번 졸업 규정.pdf ',
        url: 'http://cse-dev-waffle.bacchus.io/sites/default/files/node--page/2023%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80830,
      },
    },
    {
      id: 2,
      year: 2022,
      attachment: {
        name: '2022학번 졸업 규정.pdf ',
        url: 'https://cse.snu.ac.kr/sites/default/files/node--page/2022%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80560,
      },
    },
    {
      id: 3,
      year: 2021,
      attachment: {
        name: '2021학번 졸업 규정.pdf ',
        url: 'https://cse.snu.ac.kr/sites/default/files/node--page/2021%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80630,
      },
    },
    {
      id: 4,
      year: 2020,
      attachment: {
        name: '2020학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 5,
      year: 2019,
      attachment: {
        name: '2019학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 6,
      year: 2018,
      attachment: {
        name: '2018학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 7,
      year: 2017,
      attachment: {
        name: '2017학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 8,
      year: 2016,
      attachment: {
        name: '2016학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 9,
      year: 2015,
      attachment: {
        name: '2015학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 10,
      year: 2014,
      attachment: {
        name: '2014학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 11,
      year: 2013,
      attachment: {
        name: '2013학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 12,
      year: 2012,
      attachment: {
        name: '2012학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 13,
      year: 2011,
      attachment: {
        name: '2011학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 14,
      year: 2010,
      attachment: {
        name: '2010학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 15,
      year: 2009,
      attachment: {
        name: '2009학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 16,
      year: 2008,
      attachment: {
        name: '2008학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 17,
      year: 2007,
      attachment: {
        name: '2007학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 18,
      year: 2006,
      attachment: {
        name: '2006학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 19,
      year: 2005,
      attachment: {
        name: '2005학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 20,
      year: 2004,
      attachment: {
        name: '2004학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 21,
      year: 2003,
      attachment: {
        name: '2003학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 22,
      year: 2002,
      attachment: {
        name: '2002학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 23,
      year: 2001,
      attachment: {
        name: '2001학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 24,
      year: 2000,
      attachment: {
        name: '2000학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 25,
      year: 1999,
      attachment: {
        name: '1999학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 26,
      year: 1998,
      attachment: {
        name: '1998학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 27,
      year: 1997,
      attachment: {
        name: '1997학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 28,
      year: 1996,
      attachment: {
        name: '1996학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 29,
      year: 1995,
      attachment: {
        name: '1995학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 30,
      year: 1994,
      attachment: {
        name: '1994학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 31,
      year: 1993,
      attachment: {
        name: '1993학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 32,
      year: 1992,
      attachment: {
        name: '1992학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
  ];
};

export const getMockGeneralStudiesRequirements = async (): Promise<GeneralStudiesRequirements> => {
  return {
    overview:
      '컴퓨터공학부 학생이 졸업을 하기 위해 반드시 들어야 하는 영역별 교양과목 학점 배분 구조표입니다. 학부생들은 아래의 구조표를 참고하여 수강에 차질이 없도록 하여야 합니다.',
    subjectChanges: [
      {
        status: 'change',
        time: '2014학년도 1학기',
        changes: [
          '(구) 010.001 대학국어(Korean) 3-2-2',
          '(신) 031.001 글쓰기의 기초(College Writing: Process & Structure) 3-3-0',
        ],
        progress: '2014학년도 이전 입학자는 ‘대학국어’ 이수를 ‘글쓰기의 기초’로 대체 이수 가능',
      },
      {
        status: 'change',
        time: '2010학년도 1학기',
        changes: [
          '(구) 010.142 컴퓨터의 기초(Fundamental of Computer System) 2-2-0',
          '(신) 010.133 컴퓨터의 개념 및 실습(Digital Computer Concept and Practice) 3-2-2',
          '(구) 010.143 컴퓨터원리(Principles of Computer System) 3-3-0',
          '(신) 010.133 컴퓨터의 개념 및 실습(Digital Computer Concept and Practice) 3-2-2',
        ],
        progress:
          '2009학년도 및 이전 입학자는 ‘컴퓨터의 기초 또는 컴퓨터원리’ 이수를 ‘컴퓨터의 개념 및 실습’으로 대체 이수 가능',
      },
      {
        status: 'new',
        time: '2005학년도 1학기',
        additionalInfos: [
          '공과대학 이수규정 변경에 따라 전공교과목에서 교양교과목으로 변경하여 신설하는 것임.',
          '‘컴퓨터개론(Introduction to Computer)’을 ‘컴퓨터원리’로 명칭변경함.',
        ],
        changes: [
          '010.140 공학수학1(Engineering Mathematics 1) 3-3-0',
          '010.141 공학수학2(Engineering Mathematics 2) 3-3-0',
          '010.142 컴퓨터의기초(Fundamentals of Computer System) 2-2-0',
          '010.143 컴퓨터원리(Principles of Computer System) 3-3-0',
          '005.054 경영학개론(Introduction to the Theory of Business) 3-3-0',
        ],
        progress:
          '2004학년도 이전 입학자중 전공으로 교양 ‘공학수학1·2’ ‘ 컴퓨터의 기초’ 및 ‘컴퓨터원리’ 교과목을 처음 이수하거나 재이수 하는 경우 전공으로 인정함.',
      },
    ],
    description: await readFile('data/htmls/generalStudiesRequirements.txt', { encoding: 'utf-8' }),
  };
};

export const getMockUndergraduateScholarshipList = async (): Promise<ScholarshipList> => {
  return {
    description: await readFile('data/htmls/scholarshipList.txt', { encoding: 'utf-8' }),
    scholarship: [
      { id: 0, name: '성적우수 국가장학금 (이공계)' },
      { id: 1, name: '대통령과학장학금' },
      { id: 2, name: '국가장학금(I,II)' },
      { id: 3, name: '단대 맞춤형 장학금' },
      { id: 4, name: '유학생 장학금' },
      {
        id: 5,
        name: '서울대학교 발전기금 장학금(신영길장학금, 현암 김종상장학금, 기타 컴퓨터공학부 지정 장학금 다수)',
      },
      {
        id: 6,
        name: '교외장학금 (현송문화재단, 유한재단, 관악회,동부문화재단, 청합장학회, 봉신장학회 등 다수)',
      },
      { id: 7, name: '컴퓨터공학 동문회 장학금' },
      { id: 8, name: '근로장학금' },
    ],
  };
};

const scholarshipNames = [
  '성적우수 국가장학금 (이공계)',
  '대통령과학장학금',
  '국가장학금(I,II)',
  '단대 맞춤형 장학금',
  '유학생 장학금',
  '서울대학교 발전기금 장학금(신영길장학금, 현암 김종상장학금, 기타 컴퓨터공학부 지정 장학금 다수)',
  '교외장학금 (현송문화재단, 유한재단, 관악회,동부문화재단, 청합장학회, 봉신장학회 등 다수)',
  '컴퓨터공학 동문회 장학금',
  '근로장학금',
];

export const getMockScholarship = async (id: number): Promise<Scholarship> => {
  return {
    id: id,
    name: scholarshipNames[id],
    description: await readFile(`data/htmls/scholarship/${id}.txt`, { encoding: 'utf-8' }),
  };
};

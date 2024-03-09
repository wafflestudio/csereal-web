import { readFile } from 'fs/promises';

import {
  Curriculum,
  GeneralStudiesRequirements,
  Scholarship,
  ScholarshipList,
} from '@/types/academics';

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
    generalStudies: [
      {
        id: 1,
        description: await readFile('data/htmls/generalStudies/generalStudies_2020.txt', {
          encoding: 'utf-8',
        }),
        year: 2020,
      },
      {
        id: 2,
        description: await readFile('data/htmls/generalStudies/generalStudies_2019.txt', {
          encoding: 'utf-8',
        }),
        year: 2019,
      },
      {
        id: 3,
        description: await readFile('data/htmls/generalStudies/generalStudies_2018.txt', {
          encoding: 'utf-8',
        }),
        year: 2018,
      },
      {
        id: 4,
        description: await readFile('data/htmls/generalStudies/generalStudies_2017.txt', {
          encoding: 'utf-8',
        }),
        year: 2017,
      },
      {
        id: 5,
        description: await readFile('data/htmls/generalStudies/generalStudies_2016.txt', {
          encoding: 'utf-8',
        }),
        year: 2016,
      },
      {
        id: 6,
        description: await readFile('data/htmls/generalStudies/generalStudies_2015.txt', {
          encoding: 'utf-8',
        }),
        year: 2015,
      },
      {
        id: 7,
        description: await readFile('data/htmls/generalStudies/generalStudies_2014.txt', {
          encoding: 'utf-8',
        }),
        year: 2014,
      },
      {
        id: 8,
        description: await readFile('data/htmls/generalStudies/generalStudies_2013.txt', {
          encoding: 'utf-8',
        }),
        year: 2013,
      },
      {
        id: 9,
        description: await readFile('data/htmls/generalStudies/generalStudies_2012.txt', {
          encoding: 'utf-8',
        }),
        year: 2012,
      },
      {
        id: 10,
        description: await readFile('data/htmls/generalStudies/generalStudies_2011.txt', {
          encoding: 'utf-8',
        }),
        year: 2011,
      },
      {
        id: 11,
        description: await readFile('data/htmls/generalStudies/generalStudies_2010.txt', {
          encoding: 'utf-8',
        }),
        year: 2010,
      },
      {
        id: 12,
        description: await readFile('data/htmls/generalStudies/generalStudies_2009.txt', {
          encoding: 'utf-8',
        }),
        year: 2009,
      },
      {
        id: 13,
        description: await readFile('data/htmls/generalStudies/generalStudies_2008.txt', {
          encoding: 'utf-8',
        }),
        year: 2008,
      },
      {
        id: 14,
        description: await readFile('data/htmls/generalStudies/generalStudies_2007.txt', {
          encoding: 'utf-8',
        }),
        year: 2007,
      },
    ],
  };
};

export const getMockUndergraduateScholarshipList = async (): Promise<ScholarshipList> => {
  return {
    description: await readFile('data/htmls/undergraduateScholarshipList.txt', {
      encoding: 'utf-8',
    }),
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

export const getMockGraduateScholarshipList = async (): Promise<ScholarshipList> => {
  return {
    description: await readFile('data/htmls/graduateScholarshipList.txt', { encoding: 'utf-8' }),
    scholarship: [
      { id: 0, name: '강의연구지원장학금' },
      { id: 1, name: '수업료 10% 면제 장학금' },
      { id: 2, name: '대학원 연구실 장학금' },
      { id: 3, name: '컴퓨터공학부 지정 SNU President Fellowship 기금' },
    ],
  };
};

export const getMockScholarship = async (
  id: number,
  type: 'graduate' | 'undergraduate',
): Promise<Scholarship> => {
  if (type === 'undergraduate') {
    const scholarshipList = await getMockUndergraduateScholarshipList();
    return {
      id: id,
      name: scholarshipList.scholarship[id].name,
      description: await readFile(`data/htmls/scholarship/undergraduate/${id}.txt`, {
        encoding: 'utf-8',
      }),
    };
  } else {
    const scholarshipList = await getMockGraduateScholarshipList();
    return {
      id: id,
      name: scholarshipList.scholarship[id].name,
      description: await readFile(`data/htmls/scholarship/graduate/${id}.txt`, {
        encoding: 'utf-8',
      }),
    };
  }
};

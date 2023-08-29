import { readFile } from 'fs/promises';

import { Course, CourseChange, Curriculum, DegreeRequirements } from '@/types/academics';

import {
  courseChangesData,
  courseData1,
  courseData2,
  courseData3,
  courseData4,
  graduateGuideData,
  undergraduateGuideData,
} from './objects';

export const getMockAcademicsGuide = async (type: 'undergraduate' | 'graduate') => {
  return { description: type === 'undergraduate' ? undergraduateGuideData : graduateGuideData };
};

export const getMockCourses = async (type: 'undergraduate' | 'graduate'): Promise<Course[]> => [
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData1, id: i })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData2, id: i + 10 })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData3, id: i + 20 })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData4, id: i + 30 })),
];

export const getMockCourseChanges = async (
  type: 'undergraduate' | 'graduate',
): Promise<CourseChange[]> => courseChangesData;

export const getMockDegreeRequirements = async (): Promise<DegreeRequirements[]> => {
  return [
    {
      id: 1,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2023.txt', {
        encoding: 'utf-8',
      }),
      year: 2023,
      attachment: {
        name: '2023학번 졸업 규정.pdf ',
        url: 'https://cse.snu.ac.kr/sites/default/files/node--page/2023%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80830,
      },
    },
    {
      id: 2,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2022.txt', {
        encoding: 'utf-8',
      }),
      year: 2022,
      attachment: {
        name: '2022학번 졸업 규정.pdf ',
        url: 'https://cse.snu.ac.kr/sites/default/files/node--page/2022%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80560,
      },
    },
    {
      id: 3,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2021.txt', {
        encoding: 'utf-8',
      }),
      year: 2021,
      attachment: {
        name: '2021학번 졸업 규정.pdf ',
        url: 'https://cse.snu.ac.kr/sites/default/files/node--page/2021%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80630,
      },
    },
    {
      id: 4,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2020.txt', {
        encoding: 'utf-8',
      }),
      year: 2020,
      attachment: {
        name: '2020학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 5,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2019.txt', {
        encoding: 'utf-8',
      }),
      year: 2019,
      attachment: {
        name: '2019학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 6,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2018.txt', {
        encoding: 'utf-8',
      }),
      year: 2018,
      attachment: {
        name: '2018학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 7,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2017.txt', {
        encoding: 'utf-8',
      }),
      year: 2017,
      attachment: {
        name: '2017학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 8,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2016.txt', {
        encoding: 'utf-8',
      }),
      year: 2016,
      attachment: {
        name: '2016학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 9,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2015.txt', {
        encoding: 'utf-8',
      }),
      year: 2015,
      attachment: {
        name: '2015학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 10,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2014.txt', {
        encoding: 'utf-8',
      }),
      year: 2014,
      attachment: {
        name: '2014학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 11,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2013.txt', {
        encoding: 'utf-8',
      }),
      year: 2013,
      attachment: {
        name: '2013학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 12,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2012.txt', {
        encoding: 'utf-8',
      }),
      year: 2012,
      attachment: {
        name: '2012학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 13,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2011.txt', {
        encoding: 'utf-8',
      }),
      year: 2011,
      attachment: {
        name: '2011학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 14,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2010.txt', {
        encoding: 'utf-8',
      }),
      year: 2010,
      attachment: {
        name: '2010학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 15,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2009.txt', {
        encoding: 'utf-8',
      }),
      year: 2009,
      attachment: {
        name: '2009학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 16,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2008.txt', {
        encoding: 'utf-8',
      }),
      year: 2008,
      attachment: {
        name: '2008학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 17,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2007.txt', {
        encoding: 'utf-8',
      }),
      year: 2007,
      attachment: {
        name: '2007학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 18,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2006.txt', {
        encoding: 'utf-8',
      }),
      year: 2006,
      attachment: {
        name: '2006학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 19,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2005.txt', {
        encoding: 'utf-8',
      }),
      year: 2005,
      attachment: {
        name: '2005학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 20,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2004.txt', {
        encoding: 'utf-8',
      }),
      year: 2004,
      attachment: {
        name: '2004학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 21,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2003.txt', {
        encoding: 'utf-8',
      }),
      year: 2003,
      attachment: {
        name: '2003학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 22,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2002.txt', {
        encoding: 'utf-8',
      }),
      year: 2002,
      attachment: {
        name: '2002학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 23,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2001.txt', {
        encoding: 'utf-8',
      }),
      year: 2001,
      attachment: {
        name: '2001학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 24,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_2000.txt', {
        encoding: 'utf-8',
      }),
      year: 2000,
      attachment: {
        name: '2000학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 25,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1999.txt', {
        encoding: 'utf-8',
      }),
      year: 1999,
      attachment: {
        name: '1999학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 26,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1998.txt', {
        encoding: 'utf-8',
      }),
      year: 1998,
      attachment: {
        name: '1998학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 27,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1997.txt', {
        encoding: 'utf-8',
      }),
      year: 1997,
      attachment: {
        name: '1997학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 28,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1996.txt', {
        encoding: 'utf-8',
      }),
      year: 1996,
      attachment: {
        name: '1996학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 29,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1995.txt', {
        encoding: 'utf-8',
      }),
      year: 1995,
      attachment: {
        name: '1995학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 30,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1994.txt', {
        encoding: 'utf-8',
      }),
      year: 1994,
      attachment: {
        name: '1994학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 31,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1993.txt', {
        encoding: 'utf-8',
      }),
      year: 1993,
      attachment: {
        name: '1993학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 32,
      description: await readFile('data/htmls/degree-requirements/degree-requirements_1992.txt', {
        encoding: 'utf-8',
      }),
      year: 1992,
      attachment: {
        name: '1992학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
  ];
};

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

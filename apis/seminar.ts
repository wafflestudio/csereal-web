import { PostSearchQueryParams } from '@/hooks/useCustomSearchParams';

import { GETSeminarPostsResponse } from '@/types/post';

import { getRequest } from '.';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getSeminarPosts = (params: PostSearchQueryParams) =>
  getRequest('/seminar', params) as Promise<GETSeminarPostsResponse>;

export const getMockSeminarPosts: typeof getSeminarPosts = async () => {
  const years = [2023, 2022, 2021, 2020];

  const searchList = years.map((year) => {
    const seminarList = Array.from({ length: getRandomInt(5, 15) }, (_, index) => ({
      id: index + 1,
      title: `${year}년 세미나 ${index + 1}`,
      author: `박순일 (Souneil Park)`,
      company: `Telefonica Research, Barcelona`,
      date: new Date().toISOString(),
      location: `302동 209호`,
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-small-focus/public/node--seminar/%EB%B0%95%EC%88%9C%EC%9D%BC%20%EB%B0%95%EC%82%AC%20%EC%82%AC%EC%A7%84.jpg?itok=n-iHZlh9',
    }));

    return {
      year,
      seminarList,
    };
  });

  return {
    total: 110,
    searchList,
  };
};

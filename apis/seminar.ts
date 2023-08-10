import { PostSearchQueryParams } from '@/hooks/useCustomSearchParams';

import { GETSeminarPostsResponse, SeminarPostResponse } from '@/types/post';

import { getRequest } from '.';

export const getSeminarPosts = (params: PostSearchQueryParams) =>
  getRequest('/seminar', params) as Promise<GETSeminarPostsResponse>;

export const getSeminarPost = (id: number) =>
  getRequest(`/seminar/${id}`) as Promise<SeminarPostResponse>;

export const getMockSeminarPosts: typeof getSeminarPosts = async (
  params: PostSearchQueryParams,
) => {
  //임의 날짜 생성
  const startDate = new Date('2023-01-10');
  const endDate = new Date('2022-12-25');

  const seminarList = Array.from({ length: 16 }, (_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() - index);
    const isLast = index === 0 || index === 10;

    return {
      id: index + 1,
      title: `세미나 ${index + 1}`,
      host: `박순일 (Souneil Park)`,
      company: `Telefonica Research, Barcelona`,
      date: currentDate.toISOString(),
      location: `302동 209호`,
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-small-focus/public/node--seminar/%EB%B0%95%EC%88%9C%EC%9D%BC%20%EB%B0%95%EC%82%AC%20%EC%82%AC%EC%A7%84.jpg?itok=n-iHZlh9',
      isLast: isLast,
    };
  });

  return {
    total: 50,
    seminarList,
  };
};

export const getMockSeminarPost: typeof getSeminarPost = async (id: number) => {
  return {
    id: id,
    title: `${id}번째 세미나`,
    host: '박순일 (Souneil Park)',
    company: 'Telefonica Research, Barcelona',
    professor: '이영기 교수',
    date: '2023년 7월 24일 월요일 AM 10:30 - 2023년 7월 24일 월요일 AM 11:30',
    location: '302동 209호',
    description: `In this talk, I will present my works on diversity exposure and social inclusion. Across the globe, rising inequality and political polarization is dismantling common spaces where people from different backgrounds come together. As market mechanisms deeply permeate our society, people make diverging choices about where to live, work, or attend school, even where to shop, socialize, or which hospitals to visit. This societal fragmentation is also mirrored in online spaces, in the choices of news, political contents, social network, and online communities. People increasingly lose common ground and opportunities to build social empathy and collective problem solving skills, which ultimately threatens the democracy and resilience of the society. In the first half, I will present my early works that develop AI and interactive systems that empower people to compare and contrast different ideological viewpoints and practice media literacy in their daily news browsing sessions. The next part will cover my recent works that approach the problem from the dimension of geography and urbanism, and explore social polarization and isolation of activity spaces through data-driven methods.`,
    hostDescription: `Souneil Park is currently at Telefonica Research in Barcelona, and he leads innovation initiatives in mobility at Telefónica. With a background in computational social science, his recent works focus on studying social dynamics in urban spaces by examining large-scale mobility. The results have been published in top-tier venues across both computer science and social sciences. Additionally, he currently serves as the co-PI of the H2020 EU project "SPATIAL - Security and Privacy Accountable Technology Innovations, Algorithms, and machine Learning", which has been awarded €5 million in funding. Before joining Telefónica, he worked on technologies to mitigate media bias and contributed to the field of computational journalism through pioneering works. He holds a PhD in computer science from KAIST and completed a postdoctoral research position under Paul Resnick at the University of Michigan.`,
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-small-focus/public/node--seminar/%EB%B0%95%EC%88%9C%EC%9D%BC%20%EB%B0%95%EC%82%AC%20%EC%82%AC%EC%A7%84.jpg?itok=n-iHZlh9',
    prevId: id - 1,
    nextId: id + 1,
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
    isPublic: true,
    isSlide: true,
    isLast: false,
  };
};

import { PostSearchQueryParams } from '@/hooks/useCustomSearchParams';

import { GETNewsPostResponse, GETNewsPostsResponse } from '@/types/post';

import { getRequest } from '.';

export const getNewsPosts = (params: PostSearchQueryParams) =>
  getRequest('/news', params) as Promise<GETNewsPostsResponse>;

export const getNewsPost = (id: number, params: PostSearchQueryParams) =>
  getRequest(`/news/${id}`, params) as Promise<GETNewsPostResponse>;

// mock
export const getMockNewsPosts: typeof getNewsPosts = async (params: PostSearchQueryParams) => {
  const searchList = Array(10)
    .fill(0)
    .map((_, id) => ({
      id,
      title: `${params.page}페이지 ${id}번째  / 검색어 ${params.keyword ?? '없음'}`,
      tags: ['연구', '행사'],
      description:
        '김선 교수와 아이겐드럭 방동민 연구원이 주도한 인공지능 신약개발 분야 연구가 세계적으로 우수성을 인정받아 Nature Communications에 게재되었다. 김선 교수 연구진은 수십만가지의 의생물학적 데이터를 그래프 형태로 가공해 놓은 의생물학적 지식 그래프(biomedical knowledge graph)를 활용하여 약물약물약물약물약',
      createdAt: new Date().toISOString(),
      imageURL: 'https://picsum.photos/id/237/320/240',
    }));

  return {
    total: 1232,
    searchList,
  };
};

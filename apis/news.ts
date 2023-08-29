import { getMockNewsPostDetail, getMockNewsPosts } from '@/data/news';

import { NewsPostResponse, GETNewsPostsResponse, PostSearchQueryParams } from '@/types/post';

import { getRequest } from '.';

export const getNewsPosts = getMockNewsPosts;

export const getNewsPostDetail = getMockNewsPostDetail;

const newsPath = '/news';

// export const getNewsPosts = ({ params }: { params: PostSearchQueryParams }) =>
//   getRequest(newsPath, params) as Promise<GETNewsPostsResponse>;

// export const getNewsPostDetail = (id: number, params: PostSearchQueryParams) =>
//   getRequest(`${newsPath}/${id}`, params) as Promise<NewsPostResponse>;

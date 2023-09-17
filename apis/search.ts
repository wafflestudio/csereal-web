import { getRequest } from '.';

export const getNoticeSearch = async (params: {
  keyword: string;
  number: number;
}): Promise<NoticeSearchResult> => ({
  total: 3,
  results: [
    {
      id: 1,
      title: 'TITLE',
      createdAt: new Date().toISOString(),
      partialDescription: '12345678912345 789',
      boldStartIndex: 3,
      boldEndIndex: 7,
    },
  ],
});

export const getNewsSearch = async (params: {
  keyword: string;
  number: number;
}): Promise<NewsSearchResult> => ({
  total: 3,
  results: [
    {
      id: 1,
      title: 'TITLE',
      date: new Date().toISOString(),
      partialDescription: '12345678912345 789',
      boldStartIndex: 3,
      boldEndIndex: 7,
      tags: ['TAG1', 'TAG2'],
      imageUrl: 'asd',
    },
  ],
});

// export const getNoticeSearch = (params: { keyword: string; number: number }) =>
//   getRequest('/notice/totalSearch', params);

// export const getNewsSearch = (params: { keyword: string; number: number }) =>
//   getRequest('/news/totalSearch', params);

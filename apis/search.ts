import { getRequest } from '.';

export const getNoticeSearch = async (params: {
  keyword: string;
  number: number;
}): Promise<NoticeSearchResult> => ({
  total: 10,
  results: [
    {
      id: 1,
      title: 'TITLE',
      createdAt: new Date().toISOString(),
      partialDescription: '12345678912345 789',
      boldStartIndex: 3,
      boldEndIndex: 7,
    },
    {
      id: 2,
      title: 'TITLE2',
      createdAt: new Date().toISOString(),
      partialDescription: '12345678912345 789',
      boldStartIndex: 0,
      boldEndIndex: 4,
    },
    {
      id: 3,
      title: 'TITLE3',
      createdAt: new Date().toISOString(),
      partialDescription: '12345678912345 789',
      boldStartIndex: 0,
      boldEndIndex: 4,
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
      title: 'TITLE1',
      date: new Date().toISOString(),
      partialDescription: '12345678912345 789',
      boldStartIndex: 3,
      boldEndIndex: 7,
      tags: ['TAG1', 'TAG2'],
      imageUrl: 'asd',
    },
    {
      id: 2,
      title: 'TITLE2',
      date: new Date().toISOString(),
      partialDescription: '12345678912345 789',
      boldStartIndex: 3,
      boldEndIndex: 7,
      tags: ['TAG1', 'TAG2'],
      imageUrl: 'asd',
    },
    {
      id: 3,
      title: 'TITLE3',
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

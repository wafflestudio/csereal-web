// import { getRequest } from '.';

// export const getNoticeSearch = (params: { keyword: string; number: number }) =>
//   getRequest('/notice/totalSearch', params);

// export const getNewsSearch = (params: { keyword: string; number: number }) =>
//   getRequest('/news/totalSearch', params);

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
      partialDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      boldStartIndex: 3,
      boldEndIndex: 7,
      tags: ['TAG1', 'TAG2'],
      imageUrl: null,
    },
    {
      id: 2,
      title: 'TITLE2',
      date: new Date().toISOString(),
      partialDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      boldStartIndex: 3,
      boldEndIndex: 7,
      tags: ['TAG1', 'TAG2'],
      imageUrl: null,
    },
    {
      id: 3,
      title: 'TITLE3',
      date: new Date().toISOString(),
      partialDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      boldStartIndex: 3,
      boldEndIndex: 7,
      tags: ['TAG1', 'TAG2'],
      imageUrl: null,
    },
  ],
});

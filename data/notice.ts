import { NoticePostResponse, PostSearchQueryParams, SimpleNoticePost } from '@/types/post';

export const getMockNoticePosts = async (params: PostSearchQueryParams) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('clientside error');
  //   return {
  //     searchList: noticeListMock,
  //     total: noticeListMock.length,
  //   };
};

export const getMockNoticePostDetail = async (id: number, params: PostSearchQueryParams) =>
  NoticeDetailMock;

const NoticeDetailMock: NoticePostResponse = {
  id: 3,
  title: 'What is Lorem Ipsum?',
  nextId: 4,
  nextTitle: 'Why do we use it?',
  prevId: null,
  prevTitle: null,
  tags: ['장학', '다전공'],
  isPinned: false,
  isPublic: true,
  description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>`,
  createdAt: '2023-08-10 19:42',
  modifiedAt: '2023-08-10 19:42',
  attachment: null,
};

const NoticeMockLong: SimpleNoticePost = {
  id: 1,
  title:
    '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: true,
  hasAttachment: true,
};

const NoticeMockPin = {
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내',
  createdAt: '2023-07-11T09:29:13',
  isPinned: true,
  hasAttachment: false,
};

const NoticeMock = {
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: false,
  hasAttachment: true,
};

const noticeListMock = [
  NoticeMockLong,
  ...Array(6)
    .fill(0)
    .map((_, i) => ({ ...NoticeMockPin, id: i + 2 })),
  ...Array(20)
    .fill(0)
    .map((_, i) => ({ ...NoticeMock, id: i + 10 })),
];

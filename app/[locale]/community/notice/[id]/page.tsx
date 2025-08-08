import { Suspense } from 'react';

import { PostSearchQueryParams } from '@/apis/types/post';
import { getNoticePostDetail } from '@/apis/v2/notice/[id]';
import PostFallback from '@/app/[locale]/community/components/PostFallback';
import NoticeViewer from '@/app/[locale]/community/notice/[id]/NoticeViewer';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { notice } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { Notice } from '@/apis/types/notice';

export async function generateMetadata(props: NoticePostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { locale, id } = params;

  // try {
  //   const noticePost = await getNoticePostDetail(parseInt(id), searchParams);
  //   return await getMetadata({
  //     locale,
  //     node: notice,
  //     metadata: {
  //       title: `${noticePost.title}`,
  //     },
  //   });
  // } catch {
  //   return {};
  // }
}

interface NoticePostPageProps {
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<PostSearchQueryParams>;
}

export default async function NoticePostPage(props: NoticePostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { id: rawID } = params;

  const id = +rawID;

  // ID가 잘못된 경우 예외 처리
  if (Number.isNaN(id)) return <InvalidIDFallback rawID={rawID} />;

  try {
    // const notice = await getNoticePostDetail(id, searchParams);
    const notice = await getMockNoticePostDetail(id, searchParams);
    return (
      <PageLayout titleType="big" removePadding>
        <Suspense fallback={<PostFallback />}>
          <NoticeViewer notice={notice} />
        </Suspense>
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={rawID} />;
  }
}

const mockNoticePostDetail: Notice = {
  title: '[공지] 2025학년도 2학기 수강신청 안내',
  titleForMain: '2025-2 수강신청',
  description: '2025학년도 2학기 수강신청 일정과 유의사항을 안내드립니다.',
  isPrivate: false,
  tags: ['수업', '학사(학부)'],
  isPinned: true,
  isImportant: true,
  pinnedUntil: new Date('2025-08-31T23:59:59+09:00'),
  importantUntil: new Date('2025-08-20T23:59:59+09:00'),
  author: '학부사무실',

  id: 123,
  createdAt: '2025-08-01T10:00:00+09:00',
  modifiedAt: '2025-08-01T15:45:00+09:00',

  prevId: 122,
  prevTitle: '2025 여름 계절학기 성적 열람 안내',
  nextId: 124,
  nextTitle: '2025-2 개강일정 안내',

  attachments: [
    {
      id: 1,
      name: '수강신청_안내.pdf',
      url: 'https://example.com/files/수강신청_안내.pdf',
      bytes: 123456,
    },
  ],
};

// mock API 함수
const getMockNoticePostDetail = async (
  id: number,
  params: PostSearchQueryParams,
): Promise<Notice> => {
  console.log('[Mock] getMockNoticePostDetail called with:', id, params);

  return Promise.resolve(mockNoticePostDetail);
};

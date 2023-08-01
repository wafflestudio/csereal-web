'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { getNoticePostDetail } from '@/apis/notice';

import AdjPostNav from '@/components/common/AdjPostNav';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/PageLayout';

import { notice } from '@/types/page';

export default function NoticePostPage() {
  const { id } = useParams();
  const tags = ['입학', '졸업'];

  const getPost = async () => {
    await getNoticePostDetail(parseInt(id));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PageLayout
      currentPage={notice}
      title="2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내"
      titleSize="text-lg"
    >
      <div className="border w-[500px] h-[300px] mr-[30px]"></div>
      <Tags tags={tags} page={notice} />
      {/* <AdjPostNav prevPost={} nextPost={} /> */}
    </PageLayout>
  );
}

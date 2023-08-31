'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import SlideList from '@/components/admin/SlideList';
import { StraightNode } from '@/components/common/Nodes';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleSlide } from '@/types/admin';
import { admin } from '@/types/page';

import { getPath } from '@/utils/page';

const ADMIN_MENU = ['슬라이드쇼 관리', '중요 안내 관리'];

interface AdminPageProps {
  searchParams: { selected: string };
}

const slidesMock: SimpleSlide[] = [
  { title: '슬라이드', id: 1, createdAt: '2023-08-05' },
  { title: '슬라이드', id: 2, createdAt: '2023-08-05' },
];

const adminPath = getPath(admin);

export default function AdminPage({ searchParams: { selected } }: AdminPageProps) {
  const posts = slidesMock;
  const [selectedPostIds, setSelectedPostIds] = useState<Set<number>>(new Set());

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <SelectionList
        names={ADMIN_MENU}
        selectedItemName={selected || ADMIN_MENU[0]}
        path={adminPath}
        listGridColumnClass="grid-cols-[200px_220px]"
      />
      <SlideDescription />
      <StraightNode double margin="mt-[2.6875rem] mb-[2.375rem]" />
      <TotalPostsCount count={posts.length} />
      <SlideList
        posts={posts}
        selectedPostIds={selectedPostIds}
        setSelectedPostIds={setSelectedPostIds}
      />
    </PageLayout>
  );
}

function SlideDescription() {
  return (
    <p className="font-yoon text-sm tracking-wide">
      메인페이지의 슬라이드쇼에는 <strong>{`소식 > 새 소식`}</strong> 중{' '}
      <strong>{`'슬라이드쇼에 표시'`}</strong> 체크박스가 선택된 글들이 올라갑니다. 이 목록에 20개
      이상의 글이 포함되면 자동으로 최신글 20개만 표시되지만, 원활한 유지보수를 위하여 주기적인
      관리가 필요합니다.
      <br />
      <br />
      슬라이드쇼는 4개씩 표시되기 때문에, 개수를 4의 배수로 맞춰주시는 것이 레이아웃에 최선입니다.
    </p>
  );
}

function TotalPostsCount({ count }: { count: number }) {
  return (
    <span className="ml-[1.5625rem] text-xs text-neutral-500 tracking-wide">
      총 {count}개의 게시물
    </span>
  );
}

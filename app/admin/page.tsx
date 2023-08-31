'use client';

import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';

import SlideList from '@/components/admin/SlideList';
import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleSlide } from '@/types/admin';
import { admin } from '@/types/page';

import { getPath } from '@/utils/page';
import { replaceDashWithSpace } from '@/utils/replaceCharacter';

interface AdminPageProps {
  searchParams: { selected: string; page: string };
}

const slidesMock: { posts: SimpleSlide[]; total: number } = {
  posts: [
    { title: '슬라이드', id: 1, createdAt: '2023-08-05' },
    { title: '슬라이드', id: 2, createdAt: '2023-08-05' },
  ],
  total: 2,
};

const ADMIN_MENU = ['슬라이드쇼 관리', '중요 안내 관리'];
const POST_LIMIT = 40;
const adminPath = getPath(admin);

export default function AdminPage({ searchParams: { selected, page } }: AdminPageProps) {
  const posts = slidesMock.posts;
  const totalPostsCount = slidesMock.total;
  const [selectedPostIds, setSelectedPostIds] = useState<Set<number>>(new Set());
  const router = useRouter();

  const changePage = (newPage: number) => {
    const selectedMenu = selected || ADMIN_MENU[0];
    router.push(`/admin?selected=${selectedMenu}&page=${newPage}`);
  };

  const batchReleaseImportant = () => {
    console.log('중요안내 일괄 해제');
  };

  return (
    <PageLayout title="관리자 메뉴" titleType="big" titleMargin="mb-9">
      <SelectionList
        names={ADMIN_MENU}
        selectedItemName={replaceDashWithSpace(selected) || ADMIN_MENU[0]}
        path={adminPath}
        listGridColumnClass="grid-cols-[200px_220px]"
      />
      <SlideDescription />
      <StraightNode double />
      <TotalPostsCount count={posts.length} />
      <SlideList
        posts={posts}
        selectedPostIds={selectedPostIds}
        setSelectedPostIds={setSelectedPostIds}
      />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={parseInt(page) || 1}
        setCurrentPage={changePage}
      />
      <BatchAction selectedCount={selectedPostIds.size} onClickButton={batchReleaseImportant} />
    </PageLayout>
  );
}

function SlideDescription() {
  return (
    <p className="mb-[2.6875rem] font-yoon text-sm tracking-wide">
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

interface BatchActionProps {
  selectedCount: number;
  onClickButton: () => void;
}

function BatchAction({ selectedCount, onClickButton }: BatchActionProps) {
  return (
    <div className="flex items-center">
      <SelectedPostsCount count={selectedCount} />
      <BatchButton disabled={selectedCount === 0} onClick={onClickButton}>
        일괄 슬라이드쇼 해제
      </BatchButton>
    </div>
  );
}

function TotalPostsCount({ count }: { count: number }) {
  return (
    <span className="block mt-[2.375rem] ml-[1.5625rem] text-xs text-neutral-500 tracking-wide">
      총 {count}개의 게시물
    </span>
  );
}

function SelectedPostsCount({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 mr-6">
      <span className="material-symbols-rounded text-neutral-500 text-lg font-extralight">
        check_box
      </span>
      <span className="text-neutral-500 text-xs tracking-wide">{count}개 게시물 선택</span>
    </div>
  );
}

interface BatchButtonProps {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function BatchButton({ disabled, onClick, children }: BatchButtonProps) {
  return (
    <button
      className="px-[0.875rem] h-[2.1875rem] border border-neutral-200 bg-neutral-100 rounded-[0.0625rem] text-neutral-500 text-xs font-medium tracking-[0.02em] disabled:bg-neutral-50 disabled:text-neutral-300"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

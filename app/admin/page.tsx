'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import BatchAction from '@/components/admin/BatchAction';
import ImportantList from '@/components/admin/ImportantList';
import SlideList from '@/components/admin/SlideList';
import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleImportant, SimpleSlide } from '@/types/admin';
import { admin } from '@/types/page';

import { getPath } from '@/utils/page';
import { replaceDashWithSpace, replaceSpaceWithDash } from '@/utils/replaceCharacter';

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

const importantMock: { posts: SimpleImportant[]; total: number } = {
  posts: [
    { title: '슬라이드', id: 1, createdAt: '2023-08-05', category: 'notice' },
    { title: '슬라이드', id: 2, createdAt: '2023-08-05', category: 'news' },
  ],
  total: 2,
};

const ADMIN_MENU = { slide: '슬라이드쇼 관리', important: '중요 안내 관리' };
const DEFAULT_MENU = ADMIN_MENU.slide;
const POST_LIMIT = 40;
const adminPath = getPath(admin);

export default function AdminPage({ searchParams: { selected, page } }: AdminPageProps) {
  const selectedMenu = replaceDashWithSpace(selected) || DEFAULT_MENU;
  const posts = selectedMenu === ADMIN_MENU.slide ? slidesMock.posts : importantMock.posts;
  const totalPostsCount = slidesMock.total;
  const [selectedPostIds, setSelectedPostIds] = useState<Set<number>>(new Set());
  const router = useRouter();

  const changePage = (newPage: number) => {
    const selectedMenuWithDash = replaceSpaceWithDash(selectedMenu || DEFAULT_MENU);
    router.push(`/admin?selected=${selectedMenuWithDash}&page=${newPage}`);
  };

  const resetSelectedPosts = () => {
    setSelectedPostIds(new Set());
  };

  const batchRelease = (requestPath: string) => {
    console.log('일괄 해제');
    resetSelectedPosts();
  };

  return (
    <PageLayout title="관리자 메뉴" titleType="big" titleMargin="mb-9">
      <SelectionList
        names={Object.values(ADMIN_MENU)}
        selectedItemName={replaceDashWithSpace(selected) || DEFAULT_MENU}
        path={adminPath}
        listGridColumnClass="grid-cols-[200px_220px]"
      />
      {selectedMenu === ADMIN_MENU.slide ? <SlideDescription /> : <ImportantDescription />}
      <StraightNode double />
      <TotalPostsCount count={posts.length} />
      {selectedMenu === ADMIN_MENU.slide ? (
        <SlideList
          posts={posts as SimpleSlide[]}
          selectedPostIds={selectedPostIds}
          setSelectedPostIds={setSelectedPostIds}
        />
      ) : (
        <ImportantList
          posts={posts as SimpleImportant[]}
          selectedPostIds={selectedPostIds}
          setSelectedPostIds={setSelectedPostIds}
        />
      )}
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        currentPage={parseInt(page) || 1}
        setCurrentPage={changePage}
      />
      {selectedMenu === ADMIN_MENU.slide ? (
        <BatchAction
          selectedCount={selectedPostIds.size}
          buttonText="일괄 슬라이드쇼 해제"
          onClickButton={() => batchRelease('/slide')}
        />
      ) : (
        <BatchAction
          selectedCount={selectedPostIds.size}
          buttonText="일괄 중요 안내 해제"
          onClickButton={() => batchRelease('/important')}
        />
      )}
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

function ImportantDescription() {
  return (
    <p className="mb-7 font-yoon text-sm tracking-wide">
      메인페이지의 중요 안내에는 <strong>{`소식 > 공지사항, 새 소식, 세미나`}</strong> 중{' '}
      <strong>{`'중요 안내에 표시'`}</strong> 체크박스가 선택된 글들이 올라갑니다.
      <br />이 목록에 2개 이상의 글이 포함되면 자동으로 최신글 2개만 표시되지만, 원활한 유지보수를
      위하여 주기적인 관리가 필요합니다.
    </p>
  );
}

function TotalPostsCount({ count }: { count: number }) {
  return (
    <span className="block mt-[2.375rem] ml-[1.5625rem] text-xs text-neutral-500 tracking-wide">
      총 {count}개의 게시물
    </span>
  );
}

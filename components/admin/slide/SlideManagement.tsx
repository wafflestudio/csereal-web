'use client';

import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { patchMultipleSlides } from '@/apis/admin';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import AlertModal from '@/components/modal/AlertModal';

import useCallbackOnce from '@/hooks/useCallbackOnce';
import useModal from '@/hooks/useModal';

import { ADMIN_MENU, SimpleSlide } from '@/types/admin';

import { replaceSpaceWithDash } from '@/utils/replaceCharacter';

import SlideList from './SlideList';
import BatchAction from '../BatchAction';
import TotalPostsCount from '../TotalPostsCount';

interface SlideManagementProps {
  posts: SimpleSlide[];
  page: number;
  total: number;
}

const POST_LIMIT = 40;

export default function SlideManagement({ posts, page, total }: SlideManagementProps) {
  const [selectedPostIds, setSelectedPostIds] = useState<Set<number>>(new Set());
  const { openModal, closeModal } = useModal();
  const router = useRouter();

  const resetSelectedPosts = () => {
    setSelectedPostIds(new Set());
  };

  const finishRequest = () => {
    resetSelectedPosts();
    revalidatePath('/admin/slide');
    closeModal();
  };

  const changePage = (newPage: number) => {
    const selectedMenuWithDash = replaceSpaceWithDash(ADMIN_MENU.slide);
    resetSelectedPosts();
    router.push(`/admin?selected=${selectedMenuWithDash}&page=${newPage}`);
  };

  const handleBatchUnslide = useCallbackOnce(async () => {
    await patchMultipleSlides(Array.from(selectedPostIds));
    finishRequest();
  });

  return (
    <div>
      <SlideDescription />
      <StraightNode double />
      <TotalPostsCount count={total} />
      <SlideList
        posts={posts}
        selectedPostIds={selectedPostIds}
        setSelectedPostIds={setSelectedPostIds}
      />
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={changePage}
      />
      <BatchAction
        selectedCount={selectedPostIds.size}
        buttonText="일괄 슬라이드쇼 해제"
        onClickButton={() =>
          openModal(
            <AlertModal
              message="정말 선택된 슬라이드쇼를 모두 해제하시겠습니까?"
              confirmText="해제"
              onConfirm={handleBatchUnslide}
              onClose={closeModal}
            />,
          )
        }
      />
    </div>
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

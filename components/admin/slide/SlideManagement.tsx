'use client';

import { useRouter } from 'next/navigation';
import { useReducer } from 'react';
import { useSWRConfig } from 'swr';

import { batchUnslideAction } from '@/actions/adminActions';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import AlertModal from '@/components/modal/AlertModal';

import { ADMIN_MENU, SlidePreview } from '@/types/admin';

import useModal from '@/utils/hooks/useModal';
import { replaceSpaceWithDash } from '@/utils/replaceCharacter';
import { errorToast, successToast } from '@/utils/toast';

import SlideList from './SlideList';
import BatchAction from '../BatchAction';
import TotalPostsCount from '../TotalPostsCount';

interface SlideManagementProps {
  posts: SlidePreview[];
  page: number;
  total: number;
}

const POST_LIMIT = 40;

type ReducerAction =
  | {
      type: 'ADD' | 'DELETE';
      id: number;
    }
  | {
      type: 'RESET';
    };

const reducer = (state: Set<number>, action: ReducerAction) => {
  switch (action.type) {
    case 'ADD':
      return new Set<number>(state.add(action.id));
    case 'DELETE':
      state.delete(action.id);
      return new Set<number>(state);
    case 'RESET':
      return new Set<number>();
    default:
      throw new Error('undefined action');
  }
};

export default function SlideManagement({ posts, page, total }: SlideManagementProps) {
  const [selectedPostIds, changeSelectedIds] = useReducer(reducer, new Set<number>());
  const { openModal } = useModal();
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const resetSelectedPosts = () => changeSelectedIds({ type: 'RESET' });

  const changePage = (newPage: number) => {
    const selectedMenuWithDash = replaceSpaceWithDash(ADMIN_MENU.slide);
    resetSelectedPosts();
    router.push(`/admin?selected=${selectedMenuWithDash}&page=${newPage}`);
  };

  const handleBatchUnslide = async () => {
    const result = await batchUnslideAction(selectedPostIds);
    if (result?.error) {
      errorToast('슬라이드를 해제하지 못했습니다.');
    } else {
      successToast('슬라이드를 해제했습니다.');
      resetSelectedPosts();
      mutate('/admin');
    }
  };

  return (
    <div>
      <SlideDescription />
      <StraightNode double />
      <TotalPostsCount count={total} />
      <SlideList
        posts={posts}
        selectedPostIds={selectedPostIds}
        changeSelectedIds={changeSelectedIds}
      />
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={changePage}
      />
      <BatchAction
        selectedCount={selectedPostIds.size}
        buttonText="일괄 슬라이드 해제"
        onClickButton={() =>
          openModal(
            <AlertModal
              message="정말 선택된 슬라이드를 모두 해제하시겠습니까?"
              confirmText="해제"
              onConfirm={handleBatchUnslide}
            />,
          )
        }
      />
    </div>
  );
}

function SlideDescription() {
  return (
    <p className="font-yoon mb-[2.6875rem] text-sm tracking-wide">
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

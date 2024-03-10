'use client';

import { useRouter } from 'next/navigation';

import { batchUnslideAction } from '@/actions/admin';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import AlertModal from '@/components/modal/AlertModal';

import { ADMIN_MENU_SLIDE, SlidePreview } from '@/types/admin';

import useModal from '@/utils/hooks/useModal';
import { replaceSpaceWithDash } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

import SlideList from './SlideList';
import useSlideSelect from './useSlideSelect';
import BatchAction from '../BatchAction';
import TotalPostsCount from '../TotalPostsCount';

const POST_LIMIT = 40;

interface SlideManagementProps {
  posts: SlidePreview[];
  page: number;
  total: number;
}

export default function SlideManagement({ posts, page, total }: SlideManagementProps) {
  const [ids, dispatchIds] = useSlideSelect();
  const { openModal } = useModal();
  const router = useRouter();

  const resetSelectedPosts = () => dispatchIds({ type: 'RESET' });

  const changePage = (newPage: number) => {
    const selectedMenuWithDash = replaceSpaceWithDash(ADMIN_MENU_SLIDE);
    resetSelectedPosts();
    router.push(`/admin?selected=${selectedMenuWithDash}&page=${newPage}`);
  };

  const handleBatchUnslide = async () => {
    const result = await batchUnslideAction(ids);
    if (result) {
      errorToast('슬라이드를 해제하지 못했습니다.');
    } else {
      successToast('슬라이드를 해제했습니다.');
      resetSelectedPosts();
    }
  };

  return (
    <div>
      <SlideDescription />
      <StraightNode double />
      <TotalPostsCount count={total} />
      <SlideList posts={posts} selectedPostIds={ids} changeSelectedIds={dispatchIds} />
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={changePage}
      />
      <BatchAction
        selectedCount={ids.size}
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
    <p className="mb-[2.6875rem] text-sm tracking-wide">
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

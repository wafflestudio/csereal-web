'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { patchMultipleImportants } from '@/apis/admin';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import AlertModal from '@/components/modal/AlertModal';

import useCallbackOnce from '@/hooks/useCallbackOnce';
import useModal from '@/hooks/useModal';

import { ADMIN_MENU, SimpleImportant } from '@/types/admin';

import { replaceSpaceWithDash } from '@/utils/replaceCharacter';

import ImportantList from './ImportantList';
import BatchAction from '../BatchAction';
import TotalPostsCount from '../TotalPostsCount';

interface ImportantManagementProps {
  posts: SimpleImportant[];
  page: number;
  total: number;
}

export interface ImportantInfo {
  id: number;
  category: string;
}

const POST_LIMIT = 40;

export default function ImportantManagement({ posts, page, total }: ImportantManagementProps) {
  const [selectedPostInfos, setSelectedPostInfos] = useState<ImportantInfo[]>([]);
  const { openModal, closeModal } = useModal();
  const router = useRouter();

  const resetSelectedPosts = () => {
    setSelectedPostInfos([]);
  };

  const finishRequest = () => {
    resetSelectedPosts();
    closeModal();
    // mutate()
  };

  const changePage = (newPage: number) => {
    const selectedMenuWithDash = replaceSpaceWithDash(ADMIN_MENU.slide);
    resetSelectedPosts();
    router.push(`/admin?selected=${selectedMenuWithDash}&page=${newPage}`);
  };

  const handleBatchUnimportant = useCallbackOnce(async () => {
    await patchMultipleImportants(Array.from(selectedPostInfos));
    finishRequest();
  });

  return (
    <div>
      <ImportantDescription />
      <StraightNode double />
      <TotalPostsCount count={total} />
      <ImportantList
        posts={posts}
        selectedPostInfos={selectedPostInfos}
        setSelectedPostInfos={setSelectedPostInfos}
      />
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={changePage}
      />
      <BatchAction
        selectedCount={selectedPostInfos.length}
        buttonText="일괄 중요 안내 해제"
        onClickButton={() =>
          openModal(
            <AlertModal
              message="정말 선택된 중요 안내를 모두 해제하시겠습니까?"
              confirmText="해제"
              onClose={closeModal}
              onConfirm={handleBatchUnimportant}
            />,
          )
        }
      />
    </div>
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

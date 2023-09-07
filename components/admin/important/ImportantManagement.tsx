'use client';

import { useRouter } from 'next/navigation';
import { useReducer } from 'react';

import { batchUnimportant } from '@/actions/adminActions';

import { StraightNode } from '@/components/common/Nodes';
import Pagination from '@/components/common/Pagination';
import { errorToast, successToast } from '@/components/common/toast';
import AlertModal from '@/components/modal/AlertModal';

import useModal from '@/hooks/useModal';

import {
  ADMIN_MENU,
  ImportantCategory,
  ImportantPostIdentifier,
  ImportantPreview,
} from '@/types/admin';

import { replaceSpaceWithDash } from '@/utils/replaceCharacter';

import ImportantList from './ImportantList';
import BatchAction from '../BatchAction';
import TotalPostsCount from '../TotalPostsCount';

interface ImportantManagementProps {
  posts: ImportantPreview[];
  page: number;
  total: number;
}

const POST_LIMIT = 40;

type ReducerAction =
  | {
      type: 'ADD' | 'DELETE';
      identifier: { id: number; category: ImportantCategory };
    }
  | {
      type: 'RESET';
    };

const reducer = (state: ImportantPostIdentifier[], action: ReducerAction) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.identifier];
    case 'DELETE':
      return state.filter(
        (info) =>
          !(info.id === action.identifier.id && info.category === action.identifier.category),
      );
    case 'RESET':
      return [];
    default:
      throw new Error('undefined action');
  }
};

export default function ImportantManagement({ posts, page, total }: ImportantManagementProps) {
  const [selectedPostIdentifiers, changeSelectedIdentifiers] = useReducer(reducer, []);
  const { openModal } = useModal();
  const router = useRouter();

  const resetSelectedPosts = () => changeSelectedIdentifiers({ type: 'RESET' });

  const changePage = (newPage: number) => {
    const selectedMenuWithDash = replaceSpaceWithDash(ADMIN_MENU.slide);
    resetSelectedPosts();
    router.push(`/admin?selected=${selectedMenuWithDash}&page=${newPage}`);
  };

  const handleBatchUnimportant = async () => {
    const result = await batchUnimportant(selectedPostIdentifiers);
    if (result?.error) {
      errorToast('중요 안내를 해제하지 못했습니다.');
      if (result.error instanceof Error) {
        console.error(result.error.message);
      } else {
        throw result.error;
      }
    } else {
      successToast('중요 안내를 해제했습니다.');
      resetSelectedPosts();
    }
  };

  return (
    <div>
      <ImportantDescription />
      <StraightNode double />
      <TotalPostsCount count={total} />
      <ImportantList
        posts={posts}
        selectedPostIdentifiers={selectedPostIdentifiers}
        changeSelectedIdentifiers={changeSelectedIdentifiers}
      />
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={changePage}
      />
      <BatchAction
        selectedCount={selectedPostIdentifiers.length}
        buttonText="일괄 중요 안내 해제"
        onClickButton={() =>
          openModal(
            <AlertModal
              message="정말 선택된 중요 안내를 모두 해제하시겠습니까?"
              confirmText="해제"
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

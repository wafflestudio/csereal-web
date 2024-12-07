'use client';

import { batchUnimportantAction } from '@/actions/admin';
import Pagination from '@/components/common/Pagination';
import AlertModal from '@/components/modal/AlertModal';
import { ImportantPreview } from '@/apis/types/admin';
import useModal from '@/utils/hooks/useModal';
import { errorToast, successToast } from '@/utils/toast';

import BatchAction from '../BatchAction';
import TotalPostsCount from '../TotalPostsCount';
import ImportantList from './ImportantList';
import useImportantSelect from './useImportantSelect';

const POST_LIMIT = 40;

interface ImportantManagementProps {
  posts: ImportantPreview[];
  total: number;
}

export default function ImportantManagement({ posts, total }: ImportantManagementProps) {
  const [ids, dispatchIds] = useImportantSelect();
  const { openModal } = useModal();

  const handleBatchUnimportant = async () => {
    const result = await batchUnimportantAction(ids);
    if (result) {
      errorToast('중요 안내를 해제하지 못했습니다.');
    } else {
      successToast('중요 안내를 해제했습니다.');
      dispatchIds({ type: 'RESET' });
    }
  };

  return (
    <div>
      <ImportantDescription />
      <TotalPostsCount count={total} />
      <ImportantList
        posts={posts}
        selectedPostIdentifiers={ids}
        changeSelectedIdentifiers={dispatchIds}
      />
      <Pagination totalPostsCount={total} postsCountPerPage={POST_LIMIT} />
      <BatchAction
        selectedCount={ids.length}
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
    <p className="mb-10 bg-neutral-100 px-6 py-5 text-md leading-loose">
      메인페이지의 중요 안내에는 <strong>{`소식 > 공지사항, 새 소식, 세미나`}</strong> 중{' '}
      <strong>{`'중요 안내에 표시'`}</strong> 체크박스가 선택된 글들이 올라갑니다.
      <br />
      메인페이지에 보이는 중요 안내 개수 제한은 없지만, 원활한 유지보수를 위하여 주기적인 관리가
      필요합니다.
    </p>
  );
}

'use client';

import NoticeList from '@/app/[locale]/community/notice/components/NoticeList';
import LoginVisible from '@/components/common/LoginVisible';
import Pagination from '@/components/common/Pagination';
import SearchBox from '@/components/common/search/SearchBox';
import { NOTICE_TAGS } from '@/constants/tag';
import { NoticePreviewList } from '@/apis/types/notice';

import AdminFeatures from './components/AdminFeatures';
import { usePostSelect } from './components/usePostSelect';

const POST_LIMIT = 20;

// TODO: edit mode에서 페이지 나가려고 할 때 경고 띄워주기: 변경사항이 저장되지 않았습니다. 정말 나가시겠습니까?
export default function NoticePageContent({
  data: { searchList: posts, total: totalPostsCount },
}: {
  data: NoticePreviewList;
}) {
  const { selectedIds, dispatchIds, editMode, toggleEditMode } = usePostSelect();

  return (
    <>
      <SearchBox tags={NOTICE_TAGS} disabled={editMode} />
      <NoticeList
        posts={posts}
        isEditMode={editMode}
        selectedIds={selectedIds}
        dispatchIds={dispatchIds}
      />
      <Pagination
        totalPostsCount={totalPostsCount}
        postsCountPerPage={POST_LIMIT}
        disabled={editMode}
      />

      <LoginVisible staff>
        <AdminFeatures
          isEditMode={editMode}
          toggleEditMode={toggleEditMode}
          selectedIds={selectedIds}
          dispatchIds={dispatchIds}
        />
      </LoginVisible>
    </>
  );
}

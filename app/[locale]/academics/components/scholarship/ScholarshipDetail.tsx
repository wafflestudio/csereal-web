'use client';

import { deleteScholarshipAction } from '@/actions/academics';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Scholarship, StudentType } from '@/types/academics';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { graduateScholarship, undergraduateScholarship } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const graduatePath = getPath(graduateScholarship);
const undergraduatePath = getPath(undergraduateScholarship);

export default function ScholarshipDetail({
  type,
  scholarship: { name, description, id },
}: {
  type: StudentType;
  scholarship: Scholarship;
}) {
  // 타이틀이 긴 경우 정규표현식으로 괄호 내부 내용을 제거
  // ex) 교외장학금 (현송문화재단, 유한재단, ...) -> 교외장학금
  const shortTitle = name.length > 20 ? name.replace(/\([^)]*\)/g, '') : name;
  const editHref = `${type === 'graduate' ? graduatePath : undergraduatePath}/${id}/edit`;

  const handleDelete = async () => {
    try {
      handleServerAction(await deleteScholarshipAction(type, id));
      successToast('장학금을 삭제했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title={shortTitle} titleType="big" titleMargin="mb-8">
      <LoginVisible staff>
        <div className="mb-2 flex justify-end gap-3">
          <DeleteButton onDelete={handleDelete} />
          <EditButton href={editHref} />
        </div>
      </LoginVisible>
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}

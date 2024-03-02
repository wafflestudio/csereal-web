import { getNoticePostDetail } from '@/actions/noticeServer';

import EditNoticePageContent from '@/components/notice/EditNoticePageContent';

interface EditNoticePageProps {
  params: { id: string };
}

export default async function EditNoticePage({ params: { id: rawId } }: EditNoticePageProps) {
  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getNoticePostDetail(id, {});
  return <EditNoticePageContent id={id} data={data} />;
}

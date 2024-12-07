import { getNoticePostDetail } from '@/apis/v1/notice/[id]';
import EditNoticePageContent from '@/app/[locale]/community/notice/[id]/edit/EditNoticePageContent';

interface EditNoticePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditNoticePage(props: EditNoticePageProps) {
  const params = await props.params;

  const { id: rawId } = params;

  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getNoticePostDetail(id, {});
  return <EditNoticePageContent id={id} data={data} />;
}

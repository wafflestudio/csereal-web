import { getSeminarPost } from '@/apis/v1/seminar/[id]';
import EditSeminarPageContent from '@/app/[locale]/community/seminar/[id]/edit/EditSeminarPageContent';

interface EditNoticePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditSeminarPage(props: EditNoticePageProps) {
  const params = await props.params;

  const { id: rawId } = params;

  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getSeminarPost(id, {});

  return <EditSeminarPageContent id={id} data={data} />;
}

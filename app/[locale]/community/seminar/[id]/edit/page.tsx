import { getSeminarPost } from '@/apis/v1/seminar/[id]';
import EditSeminarPageContent from '@/app/[locale]/community/seminar/[id]/edit/EditSeminarPageContent';

interface EditNoticePageProps {
  params: { id: string };
}

export default async function EditSeminarPage({ params: { id: rawId } }: EditNoticePageProps) {
  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getSeminarPost(id, {});

  return <EditSeminarPageContent id={id} data={data} />;
}

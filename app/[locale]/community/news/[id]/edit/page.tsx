import { getNewsPostDetail } from '@/apis/newsServer';

import EditNewsPageContent from '@/components/news/EditNewsPageContent';

interface EditNewsPageProps {
  params: { id: string };
}

export default async function EditNewsPage({ params: { id: rawId } }: EditNewsPageProps) {
  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getNewsPostDetail(id, {});
  return <EditNewsPageContent id={id} data={data} />;
}

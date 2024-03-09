import { getNewsDetail } from '@/apis/news';

import EditNewsPageContent from './EditNewsPageContent';

interface EditNewsPageProps {
  params: { id: string };
}

export default async function EditNewsPage({ params: { id: rawId } }: EditNewsPageProps) {
  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getNewsDetail(id, {});
  return <EditNewsPageContent id={id} data={data} />;
}

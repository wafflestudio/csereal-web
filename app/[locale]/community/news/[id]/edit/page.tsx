import { getNewsDetail } from '@/apis/v2/news/[id]';

import EditNewsPageContent from './EditNewsPageContent';

interface EditNewsPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditNewsPage(props: EditNewsPageProps) {
  const params = await props.params;

  const { id: rawId } = params;

  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getNewsDetail(id, {});
  return <EditNewsPageContent id={id} data={data} />;
}

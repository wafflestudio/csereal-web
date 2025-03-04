export const dynamic = 'force-dynamic';

import { getInternal } from '@/apis/v1/internal';

import InternalContent from './InternalContent';

export default async function InternalPage() {
  const { description } = await getInternal();

  return (
    <div className="m-10 min-w-[720px]">
      <InternalContent description={description} />
    </div>
  );
}

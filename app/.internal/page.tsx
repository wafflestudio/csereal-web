import React from 'react';

import { getInternal } from '@/apis/internal';

import InternalContent from './InternalContent';

export default async function InternalPage() {
  const { description } = await getInternal();

  return (
    <div className="m-10 min-w-[720px]">
      <InternalContent description={description} />
    </div>
  );
}

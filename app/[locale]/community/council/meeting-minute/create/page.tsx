'use client';

import CouncilMinuteCreateClientPage from '@/app/[locale]/community/council/meeting-minute/create/client';

export default async function CouncilMinuteCreatePage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string; index?: string }>;
}) {
  const { year, index } = await searchParams;
  const yearInNumber = Number(year);
  const indexInNumber = Number(index);

  if (year !== undefined && yearInNumber !== undefined && Number.isNaN(yearInNumber))
    throw new Error('/meeting-minute?year=[year]: year가 숫자가 아닙니다.');
  if (index !== undefined && indexInNumber !== undefined && Number.isNaN(indexInNumber))
    throw new Error('/meeting-minute?index=[index]: index가 숫자가 아닙니다.');

  return <CouncilMinuteCreateClientPage year={yearInNumber} index={indexInNumber} />;
}

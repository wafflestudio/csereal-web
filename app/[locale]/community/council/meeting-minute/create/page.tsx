'use client';

import CouncilMinuteCreateClientPage from '@/app/[locale]/community/council/meeting-minute/create/client';

export default async function CouncilMinuteCreatePage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string }>;
}) {
  const { year } = await searchParams;
  const yearInNumber = Number(year);

  if (year !== undefined && yearInNumber !== undefined && Number.isNaN(yearInNumber))
    throw new Error('/meeting-minute?year=[year]: year가 숫자가 아닙니다.');

  return <CouncilMinuteCreateClientPage year={yearInNumber} />;
}

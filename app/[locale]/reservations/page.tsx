import { Metadata } from 'next';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

import { reservations } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: reservations });
}

export default async function ReservationsPage() {
  return <MajorCategoryPageLayout subtitle="Reserve CSE" />;
}

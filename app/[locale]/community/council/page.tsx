import CouncilClientPage from '@/app/[locale]/community/council/client';
import { council } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: council });
}

export default async function CouncilPage() {
  return <CouncilClientPage />;
}

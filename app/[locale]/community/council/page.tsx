import Header from '@/components/layout/header/Header';
import CategoryGrid from '@/components/layout/pageLayout/CategoryGrid';
import PageTitle from '@/components/layout/pageLayout/PageTitle';
import { council } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: council });
}

export default async function CouncilPage() {
  return (
    <div className="bg-neutral-850">
      <Header />
      <PageTitle
        title={council.name}
        currentPage={council}
        titleType="big"
        margin="mb-6 sm:mb-11"
      />
      <CategoryGrid currentPage={council} theme="light" />
    </div>
  );
}

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function CouncilReport({ params: { id } }: { params: { id: number } }) {
  return <PageLayout titleType="big">CouncilReport {id}</PageLayout>;
}

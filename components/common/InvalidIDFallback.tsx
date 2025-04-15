import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function InvalidIDFallback({ rawID }: { rawID: string }) {
  return (
    <PageLayout titleType="big" titleMargin="mb-5">
      <p>
        <b>{rawID}</b>는 올바르지 않은 id입니다.
      </p>
    </PageLayout>
  );
}

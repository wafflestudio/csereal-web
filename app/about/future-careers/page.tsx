import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GreetingsPage() {
  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={''} />
    </PageLayout>
  );
}

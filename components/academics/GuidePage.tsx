import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

interface GuidePageProps {
  description: string;
  Content: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function GuidePage({ description, Content }: GuidePageProps) {
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <Content />
      <HTMLViewer htmlContent={description} margin="mt-7" />
    </PageLayout>
  );
}

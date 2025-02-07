import { BlackButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/i18n/routing';

export default function AdmissionsPageContent({
  description,
  pathname,
}: {
  description: string;
  pathname: string;
}) {
  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="text-right">
          <Link href={`${pathname}/edit`}>
            <BlackButton title="편집" />
          </Link>
        </div>
      </LoginVisible>
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}

import { BlackButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/i18n/routing';

export default function AdmissionsPageContent({
  description,
  pathname,
  removeBottomPadding,
  htmlWrapperClassName,
}: {
  description: string;
  pathname: string;
  removeBottomPadding?: boolean;
  htmlWrapperClassName?: string;
}) {
  return (
    <PageLayout titleType="big" removeBottomPadding={removeBottomPadding}>
      <LoginVisible staff>
        <div className="pb-8 text-right">
          <Link href={`${pathname}/edit`}>
            <BlackButton title="편집" />
          </Link>
        </div>
      </LoginVisible>
      <HTMLViewer htmlContent={description} wrapperClassName={htmlWrapperClassName} />
    </PageLayout>
  );
}

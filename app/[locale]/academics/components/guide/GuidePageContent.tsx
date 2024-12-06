'use client';

import Attachments from '@/components/common/Attachments';
import { BlackButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/i18n/routing';
import { Guide } from '@/types/academics';

export default function GuidePageContent({ data, pathname }: { data: Guide; pathname: string }) {
  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="text-right">
          <Link href={`${pathname}/edit`}>
            <BlackButton title="편집" />
          </Link>
        </div>
      </LoginVisible>
      <Attachments files={data.attachments} />
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}

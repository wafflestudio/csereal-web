'use client';

import CouncilReportEditor, {
  CouncilReportEditorContent,
} from '@/app/[locale]/community/council/report/components/CouncilReportEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilReport } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { getPath } from '@/utils/page';

const councilReportListPath = getPath(councilReport);

export default function CouncilReportCreatePage() {
  const router = useRouter();

  const onCancel = () => {
    router.push(councilReportListPath);
  };

  const onSubmit = async (content: CouncilReportEditorContent) => {
    console.log(content);
  };

  return (
    <PageLayout title="활동 보고 작성" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <CouncilReportEditor onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

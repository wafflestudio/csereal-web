'use client';

import { putCouncilReportAction } from '@/actions/council';
import CouncilReportEditor, {
  CouncilReportEditorContent,
} from '@/app/[locale]/community/council/report/components/CouncilReportEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilReportList } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';

const councilReportListPath = getPath(councilReportList);

export default function CouncilReportEditPageContent({
  id,
  defaultValues,
}: {
  id: number;
  defaultValues: CouncilReportEditorContent;
}) {
  const router = useRouter();

  const onCancel = () => {
    router.push(`${councilReportListPath}/${id}`);
  };

  const onSubmit = async ({ mainImage: image, ...requestObject }: CouncilReportEditorContent) => {
    const formData = contentToFormData('EDIT', { requestObject, image });
    await putCouncilReportAction(id, formData);
  };

  return (
    <PageLayout title="활동 보고 수정" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <CouncilReportEditor onCancel={onCancel} onSubmit={onSubmit} defaultValues={defaultValues} />
    </PageLayout>
  );
}

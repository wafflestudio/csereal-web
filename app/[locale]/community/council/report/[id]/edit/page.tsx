import { getCouncilReport } from '@/apis/v2/council/report/[id]';
import CouncilReportEditPageContent from '@/app/[locale]/community/council/report/[id]/edit/client';

export default async function CouncilReportEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) throw new Error(`잘못된 아이디: ${id}`);

  const report = await getCouncilReport(parsedId);

  return (
    <CouncilReportEditPageContent
      id={parsedId}
      defaultValues={{ ...report, mainImage: { type: 'UPLOADED_IMAGE', url: report.imageURL } }}
    />
  );
}

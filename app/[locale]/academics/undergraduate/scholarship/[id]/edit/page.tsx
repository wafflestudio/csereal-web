import { putScholarshipAction } from '@/actions/academics';
import { getScholarship } from '@/apis/v2/academics/scholarship/[id]';
import ScholarshipEditor, {
  ScholarshipFormData,
} from '@/app/[locale]/academics/components/scholarship/ScholarshipEditor';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(undergraduateScholarship);

export default async function UndergraduateScholarshipEditPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  try {
    const id = parseInt(params.id);

    const scholarship = await getScholarship(id);

    const onSubmit = async (content: ScholarshipFormData) => {
      'use server';
      await putScholarshipAction('undergraduate', id, {
        ko: { ...scholarship.ko, name: content.koName, description: content.koDescription },
        en: { ...scholarship.en, name: content.enName, description: content.enDescription },
      });
    };

    return (
      <PageLayout title="학부 장학금 수정" titleType="big">
        <ScholarshipEditor
          defaultValues={{
            koName: scholarship.ko.name,
            koDescription: scholarship.ko.description,
            enName: scholarship.en.name,
            enDescription: scholarship.en.description,
          }}
          cancelPath={path}
          onSubmit={onSubmit}
        />
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}

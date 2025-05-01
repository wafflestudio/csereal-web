import { putDegreeRequirementsAction } from '@/actions/academics';
import { getDegreeRequirements } from '@/apis/v2/academics/undergraduate/degree-requirements';
import DegreeRequirementsEditor from '@/app/[locale]/academics/undergraduate/degree-requirements/edit/DegreeRequirementsEditor';

export default async function DegreeRequirementsEditPage() {
  const data = await getDegreeRequirements();

  return (
    <DegreeRequirementsEditor
      defaultValues={{
        description: data.description,
        files: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
      }}
      onSubmit={putDegreeRequirementsAction}
    />
  );
}

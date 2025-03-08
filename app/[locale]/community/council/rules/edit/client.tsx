'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { CouncilRules } from '@/apis/v2/council/rule';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { EditorFile } from '@/types/form';
import { attachmentsToEditorFiles } from '@/utils/formData';

interface FormData {
  constitutionAttachments: EditorFile[];
  bylawAttachments: EditorFile[];
}

interface Props {
  councilRules: CouncilRules;
}

export default function CouncilByLawsEditClientPage({ councilRules }: Props) {
  const methods = useForm<FormData>({
    defaultValues: {
      constitutionAttachments: attachmentsToEditorFiles(councilRules.constitution.attachments),
      bylawAttachments: attachmentsToEditorFiles(councilRules.bylaw.attachments),
    },
  });
  const router = useRouter();

  const { handleSubmit } = methods;

  const onCancel = () => {
    router.back();
  };

  const onSubmit = handleSubmit(async (formData: FormData) => {
    console.log(formData);
  });

  return (
    <FormProvider {...methods}>
      <Form>
        <Form.Section title="학생회칙" mb="mb-10" titleMb="mb-2">
          <Form.File name="constitutionAttachments" multiple />
        </Form.Section>

        <Form.Section title="세칙" titleMb="mb-2">
          <Form.File name="bylawAttachments" multiple />
        </Form.Section>

        <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
      </Form>
    </FormProvider>
  );
}

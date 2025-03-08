'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { putCouncilRulesAction } from '@/actions/council';
import { CouncilRules } from '@/apis/v2/council/rule';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { EditorFile } from '@/types/form';
import {
  attachmentsToEditorFiles,
  contentToFormData,
  getAttachmentDeleteIds,
} from '@/utils/formData';

interface FormData {
  constitutionAttachments: EditorFile[];
  bylawAttachments: EditorFile[];
}

interface Props {
  councilRules: CouncilRules;
}

export default function CouncilByLawsEditClientPage({ councilRules }: Props) {
  const constitutionAttachments = councilRules.constitution.attachments;
  const bylawAttachments = councilRules.bylaw.attachments;

  const methods = useForm<FormData>({
    defaultValues: {
      constitutionAttachments: attachmentsToEditorFiles(constitutionAttachments),
      bylawAttachments: attachmentsToEditorFiles(bylawAttachments),
    },
  });
  const router = useRouter();

  const { handleSubmit } = methods;

  const onCancel = () => {
    router.back();
  };

  const onSubmit = handleSubmit(async (formData: FormData) => {
    const bylawsDeleteIds = getAttachmentDeleteIds(formData.bylawAttachments, bylawAttachments);
    const bylawsFormData = contentToFormData('EDIT', {
      requestObject: { deleteIds: bylawsDeleteIds },
      attachments: formData.bylawAttachments,
    });

    const constitutionDeleteIds = getAttachmentDeleteIds(
      formData.constitutionAttachments,
      constitutionAttachments,
    );
    const constitutionFormData = contentToFormData('EDIT', {
      requestObject: { deleteIds: constitutionDeleteIds },
      attachments: formData.constitutionAttachments,
    });

    await putCouncilRulesAction(bylawsFormData, constitutionFormData);
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

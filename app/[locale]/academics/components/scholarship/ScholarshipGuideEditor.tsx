'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { putScholarshipGuideAction } from '@/actions/academics';
import { StudentType } from '@/apis/types/academics';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { handleServerResponse } from '@/utils/serverActionError';

export type ScholarshipGuideFormData = {
  description: string;
};

type Props = {
  description: string;
  cancelPath: string;
  studentType: StudentType;
};

export default function ScholarshipGuideEditor({ description, studentType, cancelPath }: Props) {
  const formMethods = useForm<ScholarshipGuideFormData>({ defaultValues: { description } });
  const { handleSubmit, formState } = formMethods;
  const router = useRouter();

  const onSubmit = handleSubmit(async ({ description }: ScholarshipGuideFormData) => {
    const resp = await putScholarshipGuideAction(studentType, description);
    handleServerResponse(resp, { successMessage: '장학 제도를 수정했습니다.' });
  });

  const onCancel = () => router.replace(cancelPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset.HTML>
          <Form.HTML name="description" />
        </Fieldset.HTML>
        <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
      </Form>
    </FormProvider>
  );
}

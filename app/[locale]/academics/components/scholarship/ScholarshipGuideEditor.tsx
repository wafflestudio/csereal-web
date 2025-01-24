'use client';

import { FormProvider, useForm } from 'react-hook-form';

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
  onSubmit: (data: ScholarshipGuideFormData) => Promise<void>;
};

export default function ScholarshipGuideEditor({
  description,
  cancelPath,
  onSubmit: _onSubmit,
}: Props) {
  const formMethods = useForm<ScholarshipGuideFormData>({ defaultValues: { description } });
  const { handleSubmit } = formMethods;
  const router = useRouter();

  const onSubmit = async (formData: ScholarshipGuideFormData) => {
    const resp = await _onSubmit(formData);
    handleServerResponse(resp, { successMessage: '장학 제도를 수정했습니다.' });
  };

  const onCancel = () => router.replace(cancelPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset.HTML>
          <Form.HTML name="description" />
        </Fieldset.HTML>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

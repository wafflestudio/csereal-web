'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { EditorFile } from '@/components/form/types';
import { useRouter } from '@/i18n/routing';

export interface GuideFormData {
  description: string;
  file: EditorFile[];
}

interface Props {
  defaultValues: GuideFormData;
  onCancelPath: string;
  onSubmit: (formData: GuideFormData) => Promise<void>;
}

export default function GuideEditor({ defaultValues, onCancelPath, onSubmit }: Props) {
  const formMethods = useForm<GuideFormData>({ defaultValues });
  const { handleSubmit } = formMethods;
  const router = useRouter();
  const onCancel = () => router.push(onCancelPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset.HTML>
          <Form.HTML name="description" />
        </Fieldset.HTML>
        <Fieldset.File>
          <Form.File name="file" />
        </Fieldset.File>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

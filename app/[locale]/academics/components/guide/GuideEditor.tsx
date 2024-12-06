'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import { PostEditorFile } from '@/components/form/PostEditorTypes';
import Form from '@/components/form/Form';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import { useRouter } from '@/i18n/routing';

export interface GuideFormData {
  description: string;
  file: PostEditorFile[];
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
        <Fieldset.Editor>
          <Form.HTML name="description" />
        </Fieldset.Editor>
        <Fieldset.File>
          <Form.File name="file" />
        </Fieldset.File>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

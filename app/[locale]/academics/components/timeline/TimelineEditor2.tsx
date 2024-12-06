'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/editor/common/Fieldset';
import { PostEditorFile } from '@/components/editor/PostEditorTypes';
import Form from '@/components/editor/rhf/Form';
import HTMLEditor from '@/components/editor/SunEditor/HTMLEditor';

export type TimelineFormData = { year: number; description: string; file: PostEditorFile[] };

interface Props {
  defaultValues?: TimelineFormData;
  onCancel: () => void;
  onSubmit: (data: TimelineFormData) => Promise<unknown>;
}

export default function TimelineEditor2({ defaultValues, onSubmit, onCancel }: Props) {
  const formMethods = useForm<TimelineFormData>({
    defaultValues: defaultValues ?? {
      year: new Date().getFullYear() + 1,
      description: '',
      file: [],
    },
  });
  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset title="연도" mb="mb-6" titleMb="mb-2">
          <Form.Text
            name="year"
            maxWidth="w-[55px]"
            disabled={defaultValues !== undefined}
            options={{ required: true, valueAsNumber: true }}
          />
        </Fieldset>
        <Fieldset.Editor>
          <HTMLEditor name="description" options={{ required: true }} />
        </Fieldset.Editor>
        <Fieldset.File>
          <Form.File name="file" />
        </Fieldset.File>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

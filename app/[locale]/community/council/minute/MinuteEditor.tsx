'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { EditorFile, isLocalFile } from '@/types/form';
import { handleServerResponse } from '@/utils/serverActionError';
import { encodeFormDataFileName } from '@/utils/string';
import { postMinutesByYearAction } from '@/actions/council';

export type MinutelineFormData = { year: number; file: EditorFile[] };

interface Props {
  defaultValues?: MinutelineFormData;
  //   onSubmit: (data: FormData) => Promise<unknown>;
  cancelPath: string;
}

export default function MinuteEditor({ defaultValues, cancelPath }: Props) {
  const formMethods = useForm<MinutelineFormData>({
    defaultValues: defaultValues ?? {
      year: new Date().getFullYear() + 1,
      file: [],
    },
  });
  const { handleSubmit } = formMethods;

  const router = useRouter();
  const onCancel = () => router.push(cancelPath);

  const onSubmit = async (requestObject: MinutelineFormData) => {
    const formData = contentToFormData(requestObject.file);

    const resp = await postMinutesByYearAction(requestObject.year, formData);
    handleServerResponse(resp, { successMessage: '저장되었습니다.' });
  };

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
        <Fieldset.File>
          <Form.File name="file" />
        </Fieldset.File>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

const contentToFormData = (attachments: EditorFile[]) => {
  const formData = new FormData();

  if (attachments) {
    encodeFormDataFileName(
      formData,
      'attachments',
      attachments.filter(isLocalFile).map((x) => x.file),
    );
  }

  return formData;
};

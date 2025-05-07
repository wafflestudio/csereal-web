'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { EditorFile, isUploadedFile } from '@/types/form';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export type TimelineFormData = { year: number; description: string; file: EditorFile[] };

interface Props {
  defaultValues?: TimelineFormData;
  onSubmitAction: (data: FormData) => Promise<unknown>;
  cancelPath: string;
}

export default function TimelineEditor({
  defaultValues,
  onSubmitAction: _onSubmit,
  cancelPath,
}: Props) {
  const formMethods = useForm<TimelineFormData>({
    defaultValues: defaultValues ?? {
      year: new Date().getFullYear() + 1,
      description: '',
      file: [],
    },
  });
  const { handleSubmit } = formMethods;

  const router = useRouter();
  const onCancel = () => router.push(cancelPath);

  const onSubmit = async (requestObject: TimelineFormData) => {
    const isEdit = defaultValues !== undefined;

    const formData = isEdit
      ? contentToFormData('EDIT', {
          requestObject: {
            description: requestObject.description,
            deleteIds: getAttachmentDeleteIds(
              requestObject.file,
              defaultValues.file.filter(isUploadedFile).map(({ file: { id } }) => id),
            ),
          },
          attachments: requestObject.file,
        })
      : contentToFormData('CREATE', {
          // TODO: name 제거
          requestObject: {
            year: requestObject.year,
            description: requestObject.description,
            name: '',
          },
          attachments: requestObject.file,
        });

    const resp = await _onSubmit(formData);
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
        <Fieldset.HTML>
          <Form.HTML name="description" options={{ required: true }} />
        </Fieldset.HTML>
        <Fieldset.File>
          <Form.File name="file" />
        </Fieldset.File>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

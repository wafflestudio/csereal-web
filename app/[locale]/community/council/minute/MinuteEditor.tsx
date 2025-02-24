'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { postMinutesByYearAction, putMinuteAction } from '@/actions/council';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { EditorFile, isLocalFile } from '@/types/form';
import { getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';
import { encodeFormDataFileName } from '@/utils/string';

export type MinuteFormData = { year: number; index: number; file: EditorFile[] };

interface Props {
  option:
    | {
        type: 'CREATE';
        defaultValues?: { year: number };
      }
    | {
        type: 'EDIT';
        defaultValues: MinuteFormData;
      };
  cancelPath: string;
}

export default function MinuteEditor({ option, cancelPath }: Props) {
  const formMethods = useForm<MinuteFormData>({
    defaultValues:
      option.type === 'EDIT'
        ? option.defaultValues
        : {
            year: option.defaultValues?.year ?? new Date().getFullYear() + 1,
            file: [],
          },
  });
  const { handleSubmit } = formMethods;

  const router = useRouter();
  const onCancel = () => router.push(cancelPath);

  const onSubmit = async (requestObject: MinuteFormData) => {
    if (option.type === 'CREATE') {
      const formData = contentToCreateFormData(requestObject.file);

      const resp = await postMinutesByYearAction(requestObject.year, formData);
      handleServerResponse(resp, { successMessage: '저장되었습니다.' });
    } else {
      const removeFileIds = getAttachmentDeleteIds(requestObject.file, option.defaultValues.file);
      const formData = contentToEditFormData(removeFileIds, requestObject.file);

      const resp = await putMinuteAction(
        option.defaultValues.year,
        option.defaultValues.index,
        formData,
      );
      handleServerResponse(resp, { successMessage: '저장되었습니다.' });
    }
  };

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset title="연도" mb="mb-6" titleMb="mb-2">
          <Form.Text
            name="year"
            maxWidth="w-[55px]"
            disabled={option.defaultValues !== undefined}
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

const contentToCreateFormData = (attachments: EditorFile[]) => {
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

const contentToEditFormData = (removeFileIds: number[], addFiles: EditorFile[]) => {
  const formData = new FormData();

  formData.append(
    'removeFileIds',
    new Blob([JSON.stringify(removeFileIds)], {
      type: 'application/json',
    }),
  );

  if (addFiles) {
    encodeFormDataFileName(
      formData,
      'addFiles',
      addFiles.filter(isLocalFile).map((x) => x.file),
    );
  }

  return formData;
};

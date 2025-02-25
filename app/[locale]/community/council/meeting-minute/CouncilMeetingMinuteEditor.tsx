'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { postMinutesByYearAction, putMinuteAction } from '@/actions/council';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { EditorFile } from '@/types/form';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

type MinuteFormData = { year: number; index: number; file: EditorFile[] };

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

export default function CouncilMeetingMinuteEditor({ option, cancelPath }: Props) {
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
      const formData = contentToFormData(option.type, { attachments: requestObject.file });

      const resp = await postMinutesByYearAction(requestObject.year, formData);
      handleServerResponse(resp, { successMessage: '저장되었습니다.' });
    } else {
      const removeFileIds = getAttachmentDeleteIds(requestObject.file, option.defaultValues.file);
      const formData = contentToFormData(
        'EDIT',
        { requestObject: removeFileIds, attachments: requestObject.file },
        { request: 'removeFileIdds', attachments: 'addFiles' },
      );

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

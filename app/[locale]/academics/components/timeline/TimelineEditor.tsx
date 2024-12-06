'use client';

import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/editor/common/Fieldset';
import { isUploadedFile, PostEditorFile } from '@/components/editor/PostEditorTypes';
import Form from '@/components/editor/rhf/Form';
import HTMLEditor from '@/components/editor/SunEditor/HTMLEditor';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

export type TimelineFormData = { year: number; description: string; file: PostEditorFile[] };

interface Props {
  defaultValues?: TimelineFormData;
  onSubmit: (data: FormData) => Promise<unknown>;
  cancelPath: string;
}

export default function TimelineEditor({ defaultValues, onSubmit: _onSubmit, cancelPath }: Props) {
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
            ...requestObject,
            deleteIds: getAttachmentDeleteIds(
              requestObject.file,
              defaultValues.file.filter(isUploadedFile).map(({ file: { id } }) => id),
            ),
          },
          attachments: requestObject.file,
        })
      : contentToFormData('CREATE', {
          // TODO: name 제거
          requestObject: { ...requestObject, name: '' },
          attachments: requestObject.file,
        });

    try {
      handleServerAction(await _onSubmit(formData));
      successToast('저장되었습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
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

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { EditorFile } from '@/types/form';
import { handleServerResponse } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

export type MinuteFormData = { year: number; index: number; file: EditorFile[] };

interface Props {
  defaultValues?: MinuteFormData;
  onSubmit: (formData: MinuteFormData) => Promise<void>;
  onCancel: () => void;
}

export default function CouncilMeetingMinuteEditor({
  defaultValues,
  onSubmit: _onSubmit,
  onCancel,
}: Props) {
  const formMethods = useForm<MinuteFormData>({
    defaultValues: defaultValues ?? {
      year: new Date().getFullYear() + 1,
      index: 1,
      file: [],
    },
  });
  const { handleSubmit } = formMethods;

  const onSubmit = async (requestObject: MinuteFormData) => {
    if (requestObject.file.length === 0) {
      errorToast('파일을 선택해주세요.');
      return;
    }
    const resp = await _onSubmit(requestObject);
    handleServerResponse(resp, { successMessage: '저장되었습니다.' });
  };

  return (
    <FormProvider {...formMethods}>
      <Form>
        {!defaultValues && (
          <Fieldset title="연도" mb="mb-6" titleMb="mb-2">
            <Form.Text
              name="year"
              maxWidth="w-[55px]"
              disabled={defaultValues !== undefined}
              options={{ required: true, valueAsNumber: true }}
            />
          </Fieldset>
        )}
        <Fieldset.File>
          <Form.File name="file" />
        </Fieldset.File>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

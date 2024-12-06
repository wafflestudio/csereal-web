'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/editor/common/Fieldset';
import Form from '@/components/editor/rhf/Form';
import HTMLEditor from '@/components/editor/SunEditor/HTMLEditor';
import { useRouter } from '@/i18n/routing';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

export type TimelineFormData = { year: number; description: string };

interface Props {
  defaultValues?: TimelineFormData;
  serverAction: (data: TimelineFormData) => Promise<unknown>;
  onCancelPath: string;
}

export default function TimelineEditor({ defaultValues, serverAction, onCancelPath }: Props) {
  const formMethods = useForm<TimelineFormData>({
    defaultValues: defaultValues ?? { year: new Date().getFullYear() + 1, description: '' },
  });
  const { handleSubmit } = formMethods;

  const router = useRouter();
  const onCancel = () => router.push(onCancelPath);

  const onSubmit = async (formData: TimelineFormData) => {
    try {
      handleServerAction(serverAction(formData));
      successToast('저장했습니다.');
      router.push(onCancelPath);
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
        <HTMLEditor name="description" />
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

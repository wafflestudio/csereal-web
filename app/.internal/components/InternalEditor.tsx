'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

interface FormData {
  description: string;
}

export default function InternalEditor({
  description,
  onSubmitAction: _onSubmit,
}: {
  description: string;
  onSubmitAction: (description: string) => Promise<void>;
}) {
  const formMethods = useForm<FormData>({ defaultValues: { description } });
  const { handleSubmit } = formMethods;

  const router = useRouter();
  const onCancel = () => router.push('/.internal');

  const onSubmit = async ({ description }: FormData) => {
    try {
      handleServerAction(await _onSubmit(description));
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <FormProvider {...formMethods}>
      <div className="m-10 min-w-[720px]">
        <Form>
          <Fieldset.HTML>
            <Form.HTML name="description" />
          </Fieldset.HTML>
          <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
        </Form>
      </div>
    </FormProvider>
  );
}

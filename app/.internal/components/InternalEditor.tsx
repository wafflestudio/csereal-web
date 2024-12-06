'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/fieldset';
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
  onSubmit: _onSubmit,
}: {
  description: string;
  onSubmit: (description: string) => Promise<void>;
}) {
  const formMethods = useForm<FormData>({ defaultValues: { description } });
  const { handleSubmit } = formMethods;

  const router = useRouter();
  const onCancel = () => router.push('.internal');

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
          <Fieldset.Editor>
            <Form.HTML name="description" />
          </Fieldset.Editor>
          <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
        </Form>
      </div>
    </FormProvider>
  );
}

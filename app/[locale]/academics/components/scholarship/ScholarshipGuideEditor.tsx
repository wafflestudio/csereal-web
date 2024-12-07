'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import { useRouter } from '@/i18n/routing';
import { errorToStr } from '@/utils/error';
import { handleServerAction_legacy } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

export type ScholarshipGuideFormData = {
  description: string;
};

type Props = {
  description: string;
  cancelPath: string;
  onSubmit: (data: ScholarshipGuideFormData) => Promise<void>;
};

export default function ScholarshipGuideEditor({
  description,
  cancelPath,
  onSubmit: _onSubmit,
}: Props) {
  const formMethods = useForm<ScholarshipGuideFormData>({ defaultValues: { description } });
  const { handleSubmit } = formMethods;
  const router = useRouter();

  const onSubmit = async (formData: ScholarshipGuideFormData) => {
    try {
      handleServerAction_legacy(await _onSubmit(formData));
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  const onCancel = () => router.replace(cancelPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset.HTML>
          <Form.HTML name="description" />
        </Fieldset.HTML>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

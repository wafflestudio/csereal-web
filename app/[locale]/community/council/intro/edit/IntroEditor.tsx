'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { useRouter } from '@/i18n/routing';
import { EditorImage } from '@/types/form';
import { contentToFormData } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export interface IntroFormData {
  description: string;
  image: EditorImage;
}

interface Props {
  cancelPath: string;
  defaultValues: IntroFormData;
  onSubmit: (formData: FormData) => Promise<unknown>;
}

export default function IntroEditor({ cancelPath, defaultValues, onSubmit: _onSubmit }: Props) {
  const router = useRouter();
  const formMethods = useForm<IntroFormData>({ defaultValues });
  const { handleSubmit } = formMethods;

  const onCancel = () => router.push(cancelPath);

  const onSubmit = handleSubmit(async ({ description, image }) => {
    const requestObject = {
      description,
      removeImage: defaultValues.image !== null && image === null,
    };

    const formData = contentToFormData('EDIT', { requestObject, image });
    const resp = await _onSubmit(formData);
    handleServerResponse(resp, { successMessage: '수정 완료되었습니다.' });
  });

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset.HTML>
          <Form.HTML name="description" options={{ required: true }} />
        </Fieldset.HTML>

        <Fieldset.Image>
          <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
            학생회 구성도
          </label>
          <Form.Image name="image" />
        </Fieldset.Image>

        <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
      </Form>
    </FormProvider>
  );
}

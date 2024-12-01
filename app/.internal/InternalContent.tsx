'use client';

import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { putInternalAction } from '@/actions/internal';
import { GrayButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import Fieldset from '@/components/editor/common/Fieldset';
import HTMLViewer from '@/components/editor/HTMLViewer';
import Form from '@/components/editor/rhf/Form';
import HTMLEditor from '@/components/editor/SunEditor/HTMLEditor';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface FormData {
  description: string;
}

export default function InternalContent({ description }: { description: string }) {
  const formMethods = useForm<FormData>({ defaultValues: { description } });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = formMethods;

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    reset({ description });
  }, [description, isSubmitSuccessful, reset]);

  const onCancel = () => {
    reset();
    setIsEdit(false);
  };

  const onSubmit = handleSubmit(async (formData) => {
    try {
      handleServerAction(await putInternalAction(formData.description));
      successToast('본문을 수정했습니다.');
      setIsEdit(false);
    } catch (e) {
      errorToast(errorToStr(e));
    }
  });

  return isEdit ? (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset.Editor>
          <HTMLEditor name="description" />
        </Fieldset.Editor>
        <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
      </Form>
    </FormProvider>
  ) : (
    <>
      <LoginVisible staff>
        <GrayButton title="편집" onClick={() => setIsEdit(true)} />
      </LoginVisible>
      <HTMLViewer htmlContent={description} />
    </>
  );
}

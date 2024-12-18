'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { degree } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { EditorFile, isUploadedFile } from '@/types/form';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const degreeRequirementsPath = getPath(degree);

type DegreeRequirementsFormData = {
  description: string;
  files: EditorFile[];
};

export default function DegreeRequirementsEditor({
  defaultValues,
  onSubmit: _onSubmit,
}: {
  defaultValues: DegreeRequirementsFormData;
  onSubmit: (formData: FormData) => Promise<void>;
}) {
  const formMethods = useForm<DegreeRequirementsFormData>({ defaultValues });
  const { handleSubmit } = formMethods;

  const router = useRouter();

  const onCancel = () => router.push(degreeRequirementsPath);

  const onSubmit = async (content: DegreeRequirementsFormData) => {
    const formData = contentToFormData('EDIT', {
      requestObject: {
        description: content.description,
        deleteIds: getAttachmentDeleteIds(
          content.files,
          defaultValues.files.filter(isUploadedFile).map((x) => x.file.id),
        ),
      },
      attachments: content.files,
    });

    try {
      handleServerAction(_onSubmit(formData));
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout titleType="big">
      <FormProvider {...formMethods}>
        <Form>
          <Fieldset.HTML>
            <Form.HTML name="description" />
          </Fieldset.HTML>
          <Fieldset.File>
            <Form.File name="files" />
          </Fieldset.File>
          <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
        </Form>
      </FormProvider>
    </PageLayout>
  );
}

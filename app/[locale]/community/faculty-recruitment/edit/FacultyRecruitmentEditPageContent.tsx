'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { putFacultyRecruitmentAction } from '@/actions/recruitment';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { PostEditorImage } from '@/components/form/types';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { GETFacultyRecruitmentResponse } from '@/types/post';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { facultyRecruitment } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface Props {
  data: GETFacultyRecruitmentResponse;
}

interface FormData {
  title: string;
  description: string;
  image: PostEditorImage | null;
}

const recruitPath = getPath(facultyRecruitment);

export default function FacultyRecruitmentEditPageContent({ data }: Props) {
  const formMethods = useForm<FormData>({
    defaultValues: {
      ...data,
      image: data.mainImageUrl ? { type: 'UPLOADED_IMAGE', url: data.mainImageUrl } : null,
    },
  });
  const { handleSubmit } = formMethods;
  const router = useRouter();

  const onCancel = () => router.push(recruitPath);
  const onSubmit = async (_formData: FormData) => {
    const formData = contentToFormData('EDIT', {
      requestObject: {
        title: _formData.title,
        description: _formData.description,
        removeImage: data.mainImageUrl !== null && _formData.image === null,
      },
      image: _formData.image,
    });

    try {
      handleServerAction(await putFacultyRecruitmentAction(formData));
      successToast(`신임교수초빙을 수정했습니다.`);
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="신임교수초빙 편집" titleType="big" hideNavbar>
      <FormProvider {...formMethods}>
        <Form>
          <Fieldset.Title>
            <Form.Text name="title" maxWidth="w-[30rem]" options={{ required: true }} />
          </Fieldset.Title>
          <Fieldset.HTML>
            <Form.HTML name="description" />
          </Fieldset.HTML>
          <Fieldset.Image>
            <Form.Image name="image" />
          </Fieldset.Image>
          <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
        </Form>
      </FormProvider>
    </PageLayout>
  );
}

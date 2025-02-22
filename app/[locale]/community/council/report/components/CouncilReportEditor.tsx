import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { EditorImage } from '@/types/form';

export interface CouncilReportEditorContent {
  title: string;
  description: string;
  mainImage: EditorImage;
  term: number;
  name: string;
}

interface Props {
  onCancel: () => void;
  onSubmit: (content: CouncilReportEditorContent) => Promise<void>;
}

export default function CouncilReportEditor({ onCancel, onSubmit }: Props) {
  const methods = useForm<CouncilReportEditorContent>();
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Form>
        <Fieldset.Title>
          <Form.Text
            name="title"
            placeholder="제목을 입력하세요."
            maxWidth="max-w-[40rem]"
            options={{ required: true }}
          />
        </Fieldset.Title>
        <Fieldset.HTML>
          <Form.HTML name="description" options={{ required: true }} />
        </Fieldset.HTML>
        <Fieldset title="대표 이미지" mb="mb-8" titleMb="mb-[12px]" required>
          <p className="mb-[12px] text-sm font-medium text-neutral-900">
            그리드 목록에 표시됩니다.
          </p>
          <Form.Image name="mainImage" options={{ required: true }} />
        </Fieldset>
        <Fieldset title="게시자" mb="mb-8" titleMb="mb-[12px]" required>
          <div className="flex items-center gap-[8px]">
            제{' '}
            <Form.Text
              name="term"
              maxWidth="w-[39px]"
              placeholder="39"
              options={{ required: true }}
            />{' '}
            대 학생회{' '}
            <Form.Text
              name="name"
              maxWidth="w-[81px]"
              placeholder="학생회 이름"
              options={{ required: true }}
            />
          </div>
        </Fieldset>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} submitLabel="게시하기" />
      </Form>
    </FormProvider>
  );
}

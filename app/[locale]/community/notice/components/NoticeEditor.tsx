import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { EditorFile } from '@/components/form/types';
import { NOTICE_TAGS } from '@/constants/tag';

export interface NoticeFormData {
  title: string;
  titleForMain: string;
  description: string;
  attachments: EditorFile[];
  tags: string[];
  isPrivate: boolean;
  isPinned: boolean;
  isImportant: boolean;
}

interface Props {
  defaultValues?: NoticeFormData;
  onCancel: () => void;
  onSubmit: (formData: NoticeFormData) => Promise<void>;
  onDelete?: () => Promise<void>;
}

export default function NoticeEditor({ defaultValues, onCancel, onSubmit, onDelete }: Props) {
  const formMethods = useForm<NoticeFormData>({
    defaultValues: defaultValues ?? {
      title: '',
      titleForMain: '',
      description: '',
      attachments: [],
      tags: [],
      isPrivate: false,
      isPinned: false,
      isImportant: false,
    },
  });
  const { handleSubmit, setValue } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset title="제목" mb="mb-8" titleMb="mb-2" required>
          <Form.Text
            name="title"
            placeholder="제목을 입력하세요."
            maxWidth="max-w-[40rem]"
            options={{ required: true }}
          />
        </Fieldset>
        <Fieldset title="메인-중요 안내용 제목" mb="mb-8" titleMb="mb-2">
          <Form.Text
            name="titleForMain"
            placeholder="미입력시 제목과 동일하게 표시됩니다."
            maxWidth="max-w-[40rem]"
          />
        </Fieldset>
        <Fieldset title="내용" mb="mb-6" titleMb="mb-2" required>
          <Form.HTML name="description" options={{ required: true }} />
        </Fieldset>
        <Fieldset title="첨부파일" mb="mb-6" titleMb="mb-3">
          <Form.File name="attachments" />
        </Fieldset>
        <Fieldset title="태그" mb="mb-8" titleMb="mb-3">
          <div className="flex grow flex-wrap  gap-x-6 gap-y-2.5">
            {NOTICE_TAGS.map((tag) => (
              <Form.Checkbox key={tag} value={tag} name="tags" />
            ))}
          </div>
        </Fieldset>
        <Fieldset title="게시 설정" mb="mb-6" titleMb="mb-3">
          <div className="flex flex-col gap-2">
            <Form.Checkbox
              label="비공개 글"
              name="isPrivate"
              onChange={(isPrivate) => {
                if (isPrivate) {
                  setValue('isPinned', false);
                  setValue('isImportant', false);
                }
              }}
            />
            <Form.Checkbox label="목록 상단에 고정" name="isFixed" />
            <Form.Checkbox label="메인-중요 안내에 표시" name="isImportant" />
          </div>
        </Fieldset>
        <Form.Action
          onCancel={onCancel}
          onSubmit={handleSubmit(onSubmit)}
          submitLabel="게시하기"
          onDelete={onDelete}
        />
      </Form>
    </FormProvider>
  );
}

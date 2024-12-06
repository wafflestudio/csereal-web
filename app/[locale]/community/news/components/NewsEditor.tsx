import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import { PostEditorFile, PostEditorImage } from '@/components/form/PostEditorTypes';
import Form from '@/components/form/Form';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import { NEWS_TAGS } from '@/constants/tag';

export interface NewsFormData {
  title: string;
  titleForMain: string;
  description: string;
  date: Date;
  image: PostEditorImage | null;
  attachments: PostEditorFile[];
  tags: string[];
  isPrivate: boolean;
  isImportant: boolean;
  isSlide: boolean;
}

interface Props {
  defaultValues?: NewsFormData;
  onCancel: () => void;
  onSubmit: (formData: NewsFormData) => Promise<void>;
  onDelete?: () => Promise<void>;
}

export default function NewsEditor({ defaultValues, onCancel, onSubmit, onDelete }: Props) {
  const formMethods = useForm<NewsFormData>({
    defaultValues: defaultValues ?? {
      title: '',
      titleForMain: '',
      description: '',
      date: new Date(),
      attachments: [],
      tags: [],
      isPrivate: false,
      isImportant: false,
      isSlide: false,
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
        <Fieldset title="시기" mb="mb-8" titleMb="mb-2" required>
          <Form.Calendar name="date" />
        </Fieldset>
        <Fieldset title="내용" mb="mb-6" titleMb="mb-2" required>
          <Form.HTML name="description" options={{ required: true }} />
        </Fieldset>
        <Fieldset title="대표 이미지" mb="mb-6" titleMb="mb-2">
          <label className="mb-3 text-sm font-normal tracking-wide">
            이미지는 글 우측 상단에 표시됩니다.
          </label>
          <Form.Image name="image" />
        </Fieldset>
        <Fieldset title="첨부파일" mb="mb-6" titleMb="mb-3">
          <Form.File name="attachments" />
        </Fieldset>
        <Fieldset title="태그" mb="mb-8" titleMb="mb-3">
          <div className="flex grow flex-wrap  gap-x-6 gap-y-2.5">
            {NEWS_TAGS.map((tag) => (
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
                  setValue('isImportant', false);
                  setValue('isSlide', false);
                }
              }}
            />
            <Form.Checkbox label="메인-중요 안내에 표시" name="isImportant" />
            <Form.Checkbox label="메인-슬라이드쇼에 표시" name="isSlide" />
            <p className="text-xs font-light tracking-wide text-neutral-700">
              * ‘슬라이드쇼에 표시’ 글은 대표이미지가 첨부되어있는지 확인 바랍니다.
            </p>
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

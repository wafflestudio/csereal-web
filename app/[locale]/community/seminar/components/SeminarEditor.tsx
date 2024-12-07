'use client';

import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { EditorFile, EditorImage } from '@/components/form/types';

export interface SeminarFormData {
  title: string;
  titleForMain: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  host: string;

  name: string;
  speakerURL: string;
  speakerTitle: string;
  affiliation: string;
  affiliationURL: string;
  introduction: string;
  image: EditorImage | null;

  attachments: EditorFile[];
  isPrivate: boolean;
  isImportant: boolean;

  // 내부용
  isEndDateVisible: boolean;
}

interface Props {
  defaultValues?: SeminarFormData;
  onCancel: () => void;
  onSubmit: (formData: SeminarFormData) => Promise<void>;
  onDelete?: () => Promise<void>;
}

export default function SeminarEditor({ defaultValues, onCancel, onSubmit, onDelete }: Props) {
  const formMethods = useForm<SeminarFormData>({
    defaultValues: defaultValues ?? {
      title: '',
      titleForMain: '',
      description: '',
      location: '',
      startDate: new Date(),
      endDate: new Date(),
      host: '',
      name: '',
      speakerURL: '',
      speakerTitle: '',
      affiliation: '',
      affiliationURL: '',
      introduction: '',
      image: null,
      attachments: [],
      isPrivate: false,
      isImportant: false,
      isEndDateVisible: true,
    },
  });
  const { handleSubmit } = formMethods;

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

        <Fieldset title="요약" mb="mb-10" titleMb="mb-2">
          <Form.HTML name="description" />
        </Fieldset>

        <Fieldset title="장소" mb="mb-4" titleMb="mb-2" required>
          <Form.Text
            name="location"
            placeholder="장소를 입력하세요."
            maxWidth="max-w-[24.625rem]"
            options={{ required: true }}
          />
        </Fieldset>

        <ScheduleFieldset />

        <Fieldset title="주최" mb="mb-10" titleMb="mb-2">
          <Form.Text name="host" maxWidth="max-w-[24.625rem]" />
        </Fieldset>

        <div className="mb-10">
          <legend className="mb-3 text-base font-medium tracking-wide">연사 정보</legend>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <Fieldset title="이름" titleMb="mb-2" required>
                <Form.Text name="name" maxWidth="max-w-[24.625rem]" options={{ required: true }} />
              </Fieldset>
              <Fieldset title="이름 링크(url)" titleMb="mb-2">
                <Form.Text name="speakerURL" maxWidth="max-w-[24.625rem]" />
              </Fieldset>
            </div>
            <Fieldset title="직함" titleMb="mb-2">
              <Form.Text name="speakerTitle" maxWidth="max-w-[24.625rem]" />
            </Fieldset>
            <div className="flex gap-5">
              <Fieldset title="소속" titleMb="mb-2" required>
                <Form.Text
                  name="affiliation"
                  maxWidth="max-w-[24.625rem]"
                  options={{ required: true }}
                />
              </Fieldset>
              <Fieldset title="소속 링크(url)" titleMb="mb-2">
                <Form.Text name="affiliationURL" maxWidth="max-w-[24.625rem]" />
              </Fieldset>
            </div>
          </div>
        </div>

        <Fieldset title="연사 소개" mb="mb-10" titleMb="mb-2">
          <Form.HTML name="introduction" />
        </Fieldset>

        <Fieldset title="연사 사진" mb="mb-6" titleMb="mb-2">
          <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
            필수는 아니지만, 없을 경우 대체 이미지가 표시되니 가급적 첨부 바랍니다. 이미지는 글 우측
            상단에 표시됩니다.
          </label>
          <Form.Image name="image" />
        </Fieldset>

        <Fieldset title="첨부파일" mb="mb-6" titleMb="mb-3">
          <Form.File name="attachments" />
        </Fieldset>

        <Fieldset title="게시 설정" titleMb="mb-3" mb="mb-11">
          <div className="flex flex-col gap-1">
            <Form.Checkbox label="비공개 글" name="isPrivate" />
            <Form.Checkbox label="메인-중요 안내에 표시" name="isImportant" />
          </div>
        </Fieldset>

        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} onDelete={onDelete} />
      </Form>
    </FormProvider>
  );
}

function ScheduleFieldset() {
  const { control, setValue } = useFormContext<SeminarFormData>();
  const [startDate, endDate] = useWatch({ name: ['startDate', 'endDate'], control });

  const midnight = new Date(new Date(startDate).setHours(0, 0, 0, 0));
  const allDay = startDate.getTime() === midnight.getTime() && endDate === null;

  const onChangeAllDay = (isChecked: boolean) => {
    if (isChecked) {
      setValue('endDate', null);
      const newStartDate = new Date(startDate);
      newStartDate.setHours(0, 0, 0, 0);
      setValue('startDate', newStartDate);
    } else {
      setValue('startDate', new Date());
      setValue('endDate', new Date());
    }
  };

  const onChangeShowEndDate = (isChecked: boolean) => {
    if (isChecked) {
      setValue('endDate', startDate);
    } else {
      setValue('endDate', null);
    }
  };

  return (
    <div className="mb-6">
      <div className="mb-2 mt-4 flex gap-2">
        <Form.Checkbox label="하루 종일" name="tmp1" onChange={onChangeAllDay} />
        <Form.Checkbox
          label="종료 일시 표시"
          name="isEndDateVisible"
          onChange={onChangeShowEndDate}
        />
      </div>
      <div className="mb-4 flex gap-8">
        <Fieldset title="시작 일시" titleMb="mb-[.54rem]" required grow={false}>
          <Form.Date name="startDate" hideTime={allDay} />
        </Fieldset>
        {endDate !== null && (
          <Fieldset title="종료 일시" titleMb="mb-[.54rem]" required grow={false}>
            <Form.Date name="endDate" hideTime={allDay} />
          </Fieldset>
        )}
      </div>
    </div>
  );
}

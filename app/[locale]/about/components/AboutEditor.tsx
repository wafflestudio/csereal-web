'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  putContactAction,
  putGreetingsAction,
  putHistoryAction,
  putOverviewAction,
} from '@/actions/about';
import Fieldset from '@/components/editor/common/Fieldset';
import LanguagePicker from '@/components/editor/common/LanguagePicker';
import { PostEditorFile, PostEditorImage } from '@/components/editor/PostEditorTypes';
import Form from '@/components/editor/rhf/Form';
import HTMLEditor from '@/components/editor/SunEditor/HTMLEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { AboutContent } from '@/types/about';
import { Language, WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { contact, greetings, history, overview, SegmentNode } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface Props {
  data: WithLanguage<AboutContent>;
  node: SegmentNode;
  showAttachments?: boolean;
}

interface FormData {
  htmlKo: string;
  htmlEn: string;
  image: PostEditorImage;
  files: PostEditorFile[];
}

export default function AboutEditor({ data, node, showAttachments = false }: Props) {
  const router = useRouter();
  const formMethods = useForm<FormData>({
    defaultValues: {
      htmlKo: data.ko.description,
      htmlEn: data.en.description,
      image: data.ko.imageURL ? { type: 'UPLOADED_IMAGE', url: data.ko.imageURL } : null,
      files: data.ko.attachments.map((attachment) => ({ file: attachment, type: 'UPLOADED_FILE' })),
    },
  });
  const { handleSubmit } = formMethods;

  const [language, setLanguage] = useState<Language>('ko');

  const onCancel = () => router.push(getPath(node));

  const onSubmit = handleSubmit(async ({ htmlKo, htmlEn, image, files }) => {
    try {
      const submitAction = ABOUT_SUBMIT_ACTION[node.segment];

      const requestObject = {
        ko: {
          description: htmlKo,
          deleteIds: getAttachmentDeleteIds(files, data.ko.attachments),
        },
        en: {
          description: htmlEn,
          deleteIds: getAttachmentDeleteIds(files, data.en.attachments),
        },
        removeImage: data.ko.imageURL !== null && image === null,
      };

      const formData = contentToFormData('EDIT', { requestObject, image, attachments: files });

      handleServerAction(submitAction(formData));
      successToast(`${node.name}을(를) 수정했습니다.`);
    } catch (e) {
      errorToast(errorToStr(e));
    }
  });

  return (
    <PageLayout title={`${node.name} 편집`} titleType="big" hideNavbar>
      <FormProvider {...formMethods}>
        <Form>
          <LanguagePicker onChange={setLanguage} selected={language} />

          <Fieldset.Editor>
            {language === 'ko' && <HTMLEditor name="htmlKo" options={{ required: true }} />}
            {language === 'en' && <HTMLEditor name="htmlEn" />}
          </Fieldset.Editor>

          <Fieldset.Image>
            <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
              글 우측 상단에 들어가는 이미지입니다.
            </label>
            <Form.Image name="image" />
          </Fieldset.Image>

          {showAttachments && (
            <Fieldset.File>
              <Form.File name="files" />
            </Fieldset.File>
          )}

          <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
        </Form>
      </FormProvider>
    </PageLayout>
  );
}

const ABOUT_SUBMIT_ACTION = {
  [overview.segment]: putOverviewAction,
  [greetings.segment]: putGreetingsAction,
  [history.segment]: putHistoryAction,
  [contact.segment]: putContactAction,
};

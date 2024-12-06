'use client';

import { AcademicsCommon } from '@/apis/v1/academics/types';
import TimelineEditor2, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor2';
import { useRouter } from '@/i18n/routing';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { CustomError, handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

export default function Bridge({
  data,
  action,
  cancelPath,
}: {
  data: AcademicsCommon;
  action: (formData: FormData) => Promise<CustomError | void>;
  cancelPath: string;
}) {
  const router = useRouter();

  const onCancel = () => router.push(cancelPath);

  const onSubmit = async (requestObject: TimelineFormData) => {
    try {
      const formData = contentToFormData('EDIT', {
        requestObject: {
          ...requestObject,
          deleteIds: getAttachmentDeleteIds(requestObject.file, data.attachments),
        },
        attachments: requestObject.file,
      });
      handleServerAction(await action(formData));
      successToast('저장되었습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  const defaultValues: TimelineFormData = {
    year: data.year,
    description: data.description,
    file: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
  };

  return <TimelineEditor2 onCancel={onCancel} onSubmit={onSubmit} defaultValues={defaultValues} />;
}

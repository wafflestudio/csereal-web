'use client';

import { postAcademicsAction } from '@/actions/academics';
import TimelineEditor2, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor2';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { undergraduateCourseChanges } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const courseChangesPath = getPath(undergraduateCourseChanges);

export default function UndergraduateCourseChangesCreatePage() {
  const router = useRouter();

  const onCancel = () => router.push(courseChangesPath);

  const onSubmit = async ({ file, ...requestObject }: TimelineFormData) => {
    const formData = contentToFormData('CREATE', {
      // TODO: name 제거
      requestObject: { ...requestObject, name: '' },
      attachments: file,
    });

    try {
      handleServerAction(await postAcademicsAction('undergraduate', 'course-changes', formData));
      router.push(courseChangesPath);
      successToast('저장되었습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="학부 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor2 onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

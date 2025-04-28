'use client';

import { postFacultyAction } from '@/actions/people';
import { FacultyStatus } from '@/apis/types/people';
import { SimpleResearchLab } from '@/apis/types/research';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { emeritusFaculty, faculty } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import FacultyEditor, { FacultyFormData } from '../components/FacultyEditor';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export default function FacultyCreatePageContent({
  status,
  language,
  labs,
}: {
  status: FacultyStatus;
  language: Language;
  labs: WithLanguage<SimpleResearchLab[]>;
}) {
  const router = useRouter();

  const onCancel = () => router.push(status === 'INACTIVE' ? emeritusFacultyPath : facultyPath);

  const onSubmit = async (content: FacultyFormData) => {
    const startDate = content.ko.startDate.toISOString();
    const endDate = content.ko.endDate.toISOString();
    const image = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

    const formData = contentToFormData('CREATE', {
      requestObject: {
        ko: { ...content.ko, image, startDate, endDate },
        en: { ...content.en, image, startDate, endDate },
      },
      image: content.ko.image,
    });

    try {
      handleServerAction(await postFacultyAction(formData, language));
      successToast('교수진을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="교수진 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <FacultyEditor initialStatus={status} labs={labs} onCancel={onCancel} onSubmit={onSubmit} />
    </PageLayout>
  );
}

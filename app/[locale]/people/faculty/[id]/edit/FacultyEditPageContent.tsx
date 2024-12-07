'use client';

import { putFacultyAction } from '@/actions/people';
import FacultyEditor, {
  FacultyFormData,
} from '@/app/[locale]/people/faculty/components/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { Faculty } from '@/types/people';
import { SimpleResearchLab } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export default function FacultyEditPageContent({
  language,
  data,
  labs,
}: {
  language: Language;
  data: WithLanguage<Faculty>;
  labs: WithLanguage<SimpleResearchLab[]>;
}) {
  const router = useRouter();

  const onCancel = () => {
    const path = data.ko.status === 'INACTIVE' ? emeritusFacultyPath : facultyPath;
    const id = data[language].id;
    router.push(`${path}/${id}`);
  };

  const onSubmit = async (content: FacultyFormData) => {
    // startDate, endDate는 한영 동일
    const startDate = content.ko.startDate.toISOString();
    const endDate = content.ko.endDate.toISOString();
    const image = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

    const removeImage = data.ko.imageURL !== null && content.ko.image === null;
    const requestObject = {
      ko: { ...content.ko, image, startDate, endDate, removeImage },
      en: { ...content.en, image, startDate, endDate, removeImage },
    };

    const formData = contentToFormData('EDIT', { requestObject, image: content.ko.image });

    try {
      handleServerAction(
        await putFacultyAction(
          { ko: data.ko.id, en: data.en.id },
          formData,
          language,
          data.ko.status,
        ),
      );
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="교수진 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <FacultyEditor
        defaultValues={{
          ko: {
            ...data.ko,
            startDate: new Date(data.ko.startDate),
            endDate: new Date(data.ko.endDate),
            image: data.ko.imageURL ? { type: 'UPLOADED_IMAGE', url: data.ko.imageURL } : null,
          },
          en: {
            ...data.en,
            startDate: new Date(data.en.startDate),
            endDate: new Date(data.en.endDate),
            image: data.en.imageURL ? { type: 'UPLOADED_IMAGE', url: data.en.imageURL } : null,
          },
        }}
        labs={labs}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </PageLayout>
  );
}

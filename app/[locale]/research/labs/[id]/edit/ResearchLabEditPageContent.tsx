'use client';

import { putResearchLabAction } from '@/actions/research';
import ResearchLabEditor, {
  ResearchLabFormData,
} from '@/app/[locale]/research/labs/components/ResearchLabEditor';
import { isLocalFile } from '@/components/form/types';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { WithLanguage } from '@/types/language';
import { SimpleFaculty } from '@/apis/types/people';
import { ResearchGroup, ResearchLab } from '@/apis/types/research';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { encodeFormDataFileName } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

interface ResearchLabEditPageContentProps {
  lab: WithLanguage<ResearchLab>;
  groups: WithLanguage<ResearchGroup[]>;
  professors: WithLanguage<SimpleFaculty[]>;
}

export default function ResearchLabEditPageContent({
  lab,
  groups,
  professors,
}: ResearchLabEditPageContentProps) {
  const onSubmit = async ({ ko, en, ...common }: ResearchLabFormData) => {
    const removePdf = lab.ko.pdf !== null && common.pdf.length === 0;

    const formData = new FormData();
    formData.append(
      'request',
      new Blob(
        [
          JSON.stringify({
            ko: {
              ...ko,
              ...common,
              professorIds: ko.professorId ? [ko.professorId] : [],
              removePdf,
            },
            en: {
              ...en,
              ...common,
              professorIds: en.professorId ? [en.professorId] : [],
              removePdf,
            },
          }),
        ],
        { type: 'application/json' },
      ),
    );

    encodeFormDataFileName(
      formData,
      'pdf',
      common.pdf.filter(isLocalFile).map((x) => x.file),
    );

    try {
      handleServerAction(await putResearchLabAction({ ko: lab.ko.id, en: lab.en.id }, formData));
      successToast('연구실을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  const defaultValues: ResearchLabFormData = {
    ko: {
      name: lab.ko.name,
      description: lab.ko.description,
      groupId: lab.ko.group.id,
      professorId: lab.ko.professors[0]?.id,
      location: lab.ko.location,
    },
    en: {
      name: lab.en.name,
      description: lab.en.description,
      groupId: lab.en.group.id,
      professorId: lab.en.professors[0]?.id,
      location: lab.en.location,
    },
    acronym: lab.ko.acronym,
    tel: lab.ko.tel,
    websiteURL: lab.ko.websiteURL || '',
    youtube: lab.ko.youtube,
    pdf: lab.ko.pdf ? [{ type: 'UPLOADED_FILE', file: lab.ko.pdf }] : [],
  };

  return (
    <PageLayout title="연구실 편집" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchLabEditor
        groups={groups}
        professors={professors}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      />
    </PageLayout>
  );
}

'use client';

import { postResearchLabAction } from '@/actions/research';
import ResearchLabEditor, {
  ResearchLabFormData,
} from '@/app/[locale]/research/labs/components/ResearchLabEditor';
import { isLocalFile } from '@/components/form/types';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { WithLanguage } from '@/types/language';
import { SimpleFaculty } from '@/apis/types/people';
import { ResearchGroup } from '@/apis/types/research';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { encodeFormDataFileName } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

interface ResearchLabCreatePageContentProps {
  groups: WithLanguage<ResearchGroup[]>;
  professors: WithLanguage<SimpleFaculty[]>;
}

export default function ResearchLabCreatePageContent({
  groups,
  professors,
}: ResearchLabCreatePageContentProps) {
  const onSubmit = async ({ ko, en, ...common }: ResearchLabFormData) => {
    const formData = new FormData();
    formData.append(
      'request',
      new Blob(
        [
          JSON.stringify({
            ko: { ...ko, ...common, professorIds: ko.professorId ? [ko.professorId] : [] },
            en: { ...en, ...common, professorIds: en.professorId ? [en.professorId] : [] },
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
      handleServerAction(await postResearchLabAction(formData));
      successToast('연구실을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구실 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchLabEditor professors={professors} groups={groups} onSubmit={onSubmit} />
    </PageLayout>
  );
}

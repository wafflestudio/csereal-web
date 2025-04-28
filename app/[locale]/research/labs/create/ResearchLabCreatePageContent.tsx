'use client';

import { postResearchLabAction } from '@/actions/research';
import { SimpleFaculty } from '@/apis/types/people';
import { ResearchGroup } from '@/apis/types/research';
import ResearchLabEditor, {
  ResearchLabFormData,
} from '@/app/[locale]/research/labs/components/ResearchLabEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { isLocalFile } from '@/types/form';
import { WithLanguage } from '@/types/language';
import { handleServerResponse } from '@/utils/serverActionError';
import { encodeFormDataFileName } from '@/utils/string';

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

    // attachment가 아닌 특수한 key('pdf')라서 conentToFormData 사용하지 않고 직접 별도 처리
    encodeFormDataFileName(
      formData,
      'pdf',
      common.pdf.filter(isLocalFile).map((x) => x.file),
    );

    const resp = await postResearchLabAction(formData);
    handleServerResponse(resp, { successMessage: '연구실을 추가했습니다.' });
  };

  return (
    <PageLayout title="연구실 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchLabEditor professors={professors} groups={groups} onSubmit={onSubmit} />
    </PageLayout>
  );
}

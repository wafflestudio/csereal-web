import { getGeneralStudiesRequirements } from '@/apis/academicsServer';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateGeneralStudiesRequirementsPage() {
  const { overview, subjectChanges, description } = await getGeneralStudiesRequirements();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <div className="flex flex-col">
        <p className="text-sm leading-[26px]">{overview}</p>
        <div className="flex flex-col mt-12">
          <ContentTitle content={'교양 교과과정 변경 내역'} />
          <div className="mt-5">
            {subjectChanges?.map((change) => (
              <SubjectChanges
                key={change.time}
                status={change.status}
                time={change.time}
                additionalInfos={change.additionalInfos}
                changes={change.changes}
                progress={change.progress}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <ContentTitle content={'[학번별] 영역별 교양과목 학점 배분 구조표'} />
          <HTMLViewer htmlContent={description} margin="mt-3" />
        </div>
      </div>
    </PageLayout>
  );
}

function ContentTitle({ content }: { content: string }) {
  return (
    <div className="flex flex-row leading-8 items-center">
      <div className="border border-main-orange rounded-full w-2.5 h-2.5" />
      <h3 className="font-noto font-bold text-base pl-3">{content}</h3>
    </div>
  );
}

interface SubjectChangesProps {
  status: 'new' | 'change';
  time: string;
  additionalInfos?: string[] | undefined;
  changes: string[];
  progress: string;
}

function SubjectChanges({ status, time, additionalInfos, changes, progress }: SubjectChangesProps) {
  return (
    <div key={time} className="font-noto flex flex-col border-l-4 border-neutral-300 pl-5 mb-9">
      <p className="font-bold text-sm text-neutral-400">{time} 시행 교양 교과과정 변경</p>
      <h3 className="font-bold text-base mt-3">
        {status === 'new' ? '교과목 신설' : '교과목 변경'}
      </h3>
      <div className="flex flex-col mt-2">
        {additionalInfos &&
          additionalInfos.map((info, index) => (
            <p key={index} className="text-sm font-normal ">
              {info}
            </p>
          ))}
      </div>
      <ul className="list-inside list-disc">
        {changes.map((change, index) => (
          <li className="text-sm font-normal pl-2 leading-[26px] mt-[6px]" key={index}>
            {change}
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-base mt-6">경과 조치</h3>
      <p className="text-sm font-normal">{progress}</p>
    </div>
  );
}

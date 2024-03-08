import { getGeneralStudiesRequirements } from '@/apis/academicsServer';

import Accordion from '@/components/common/Accordion';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateGeneralStudiesRequirementsPage() {
  const { overview, subjectChanges, generalStudies } = await getGeneralStudiesRequirements();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col">
        <p className="mb-10 bg-neutral-100 px-6 py-5 text-md leading-loose">{overview}</p>
        <div className="flex flex-col">
          <ContentTitle title={'교양 교과과정 변경 내역'} />
          <div className="mt-2.5">
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
        <div className="mt-5 flex flex-col">
          <ContentTitle title={'[학번별] 영역별 교양과목 학점 배분 구조표'} />
          <div className="mt-5 flex flex-col gap-3">
            {generalStudies.map((information) => (
              <Accordion
                key={information.id}
                title={`${information.year}학번부터 적용`}
                content={information.description}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function ContentTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center leading-8">
      <div className="h-2.5 w-2.5 rounded-full border border-main-orange" />
      <h3 className="ml-2.5 text-[17px] font-bold leading-loose">{title}</h3>
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
    <div key={time} className="mb-9 flex flex-col border-l-4 border-neutral-200 pl-5 leading-loose">
      <p className="text-[15px] font-semibold text-neutral-400">{time} 시행 교양 교과과정 변경</p>
      <h3 className="mt-3 text-[17px] font-bold">
        {status === 'new' ? '교과목 신설' : '교과목 변경'}
      </h3>
      <div className="mt-2 flex flex-col">
        {additionalInfos &&
          additionalInfos.map((info, index) => (
            <p key={index} className="text-md">
              {info}
            </p>
          ))}
      </div>
      <ul className="list-inside list-disc">
        {changes.map((change, index) => (
          <li className="mt-[6px] pl-2 text-md" key={index}>
            {change}
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-[17px] font-bold">경과 조치</h3>
      <p className="text-md font-normal">{progress}</p>
    </div>
  );
}

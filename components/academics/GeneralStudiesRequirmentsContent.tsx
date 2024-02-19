import { useReducer } from 'react';

import { GeneralStudiesRequirements } from '@/types/academics';

import HTMLViewer from '../editor/HTMLViewer';
import PageLayout from '../layout/pageLayout/PageLayout';

export default function GeneralStudiesRequirementsPageContent({
  overview,
  subjectChanges,
  description,
}: GeneralStudiesRequirements) {
  return (
    <PageLayout titleType="big">
      <div className="flex flex-col">
        <p className="text-md leading-loose bg-neutral-100 mb-10 px-6 py-5">{overview}</p>
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
        <div className="flex flex-col mt-5">
          <ContentTitle title={'[학번별] 영역별 교양과목 학점 배분 구조표'} />
          <Accordion title="2020학번부터 적용" />
          <HTMLViewer htmlContent={description} margin="mt-5" />
        </div>
      </div>
    </PageLayout>
  );
}

function ContentTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-row leading-8 items-center">
      <div className="border border-main-orange rounded-full w-2.5 h-2.5" />
      <h3 className="font-bold text-[17px] ml-2.5 leading-loose">{title}</h3>
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
    <div key={time} className="flex flex-col border-l-4 border-neutral-200 pl-5 mb-9 leading-loose">
      <p className="font-semibold text-[15px] text-neutral-400">{time} 시행 교양 교과과정 변경</p>
      <h3 className="font-bold text-[17px] mt-3">
        {status === 'new' ? '교과목 신설' : '교과목 변경'}
      </h3>
      <div className="flex flex-col mt-2">
        {additionalInfos &&
          additionalInfos.map((info, index) => (
            <p key={index} className="text-md">
              {info}
            </p>
          ))}
      </div>
      <ul className="list-inside list-disc">
        {changes.map((change, index) => (
          <li className="text-md pl-2 mt-[6px]" key={index}>
            {change}
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-[17px] mt-6">경과 조치</h3>
      <p className="text-md font-normal">{progress}</p>
    </div>
  );
}

interface AccordionProps {
  title: string;
}

function Accordion({ title }: AccordionProps) {
  const [isExpanded, toggleExpand] = useReducer((x) => !x, false);

  return (
    <div className="rounded overflow-hidden border-b border-neutral-200">
      <h4 className="bg-neutral-100 px-4 py-[6px] flex items-center gap-1" onClick={toggleExpand}>
        <span className="material-symbols-outlined font-light text-[36px] text-main-orange">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
        <span className="font-medium tracking-[0.02em]">{title}</span>
      </h4>
    </div>
  );
}

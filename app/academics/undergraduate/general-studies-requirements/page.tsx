import { getGeneralStudiesRequirements } from '@/apis/academics';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateGeneralStudiesRequirementsPage() {
  const { overview, subjectChanges, description } = await getGeneralStudiesRequirements();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <div className="flex flex-col font-noto">
        <p className="font-normal text-sm leading-[26px]">{overview}</p>
        <div className="flex flex-col">
          <div className="flex flex-row leading-8 items-center mb-5 mt-12">
            <div className="border border-main-orange rounded-full w-2.5 h-2.5" />
            <h3 className="font-bold text-base pl-3">교양 교과과정 변경 내역</h3>
          </div>
          {subjectChanges?.map((change) => (
            <div
              key={change.time}
              className="flex flex-col border-l-4 border-neutral-300 pl-5 mb-9"
            >
              <p className="font-bold text-sm text-neutral-400">
                {change.time}학년도 1학기 시행 교양 교과과정 변경
              </p>
              <h3 className="font-bold text-base mt-3">
                {change.status === 'new' ? '교과목 신설' : '교과목 변경'}
              </h3>
              <div className="flex flex-col mt-2">
                {change.additionalInfos &&
                  change.additionalInfos.map((info, index) => (
                    <p key={index} className="text-sm font-normal ">
                      {info}
                    </p>
                  ))}
              </div>
              {change.changes.map((change, index) => (
                <li className="text-sm font-normal pl-2 ledaing-[26px] mt-[6px]" key={index}>
                  {change}
                </li>
              ))}
              <h3 className="font-bold text-base mt-6">경과 조치</h3>
              <p className="text-sm font-normal">{change.progress}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex flex-row leading-8 items-center">
            <div className="border border-main-orange rounded-full w-2.5 h-2.5" />
            <h3 className="font-bold text-base pl-3">[학번별] 영역별 교양과목 학점 배분 구조표</h3>
          </div>
          <HTMLViewer htmlContent={description} margin="mt-3" />
        </div>
      </div>
    </PageLayout>
  );
}

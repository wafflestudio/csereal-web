'use client';

import { useState } from 'react';

import { deleteMinuteAction } from '@/actions/council';
import { CouncilMeetingMinute } from '@/apis/types/council';
import Timeline from '@/app/[locale]/academics/components/timeline/Timeline';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { handleServerResponse } from '@/utils/serverActionError';

import CouncilAttachment from '../components/CouncilAttachments';

const minutePath = getPath(councilMinute);
const THIS_YEAR = new Date().getFullYear();

export default function MinutePageContent({
  contents,
}: {
  contents: { [year: string]: CouncilMeetingMinute[] };
}) {
  const [selectedYear, setSelectedYear] = useState(THIS_YEAR);
  const timeLineYears = Object.keys(contents)
    .map(Number)
    .sort((a, b) => b - a);
  const selectedContents = contents[selectedYear.toString()] ?? [];

  return (
    <PageLayout titleType="big">
      <YearAddButton />
      <Timeline
        times={timeLineYears}
        selectedTime={selectedYear}
        setSelectedTime={setSelectedYear}
      />
      <div className="mt-7">
        {selectedContents.map((minute, i) => {
          return (
            <Minutes
              minute={minute}
              key={`${minute.year}_${minute.index}`}
              isLast={i === selectedContents.length - 1}
            />
          );
        })}
      </div>
      <MinuteAddButton year={selectedYear} />
    </PageLayout>
  );
}

function MinuteAddButton({ year }: { year: number }) {
  return (
    <LoginVisible role={['ROLE_COUNCIL', 'ROLE_STAFF']}>
      <Link
        href={`${minutePath}/create?year=${year}`}
        className="mt-3 flex w-[220px] items-center gap-1.5 rounded-sm border border-main-orange px-2 py-2.5 text-main-orange duration-200 hover:bg-main-orange hover:text-white"
      >
        <span className="material-symbols-outlined font-light">add</span>
        <span className="text-base font-medium">회의록 추가</span>
      </Link>
    </LoginVisible>
  );
}

function YearAddButton() {
  return (
    <LoginVisible role={['ROLE_COUNCIL', 'ROLE_STAFF']}>
      <Link
        href={`${minutePath}/create`}
        className="mb-7 ml-0.5 flex h-[30px] w-fit items-center rounded-2xl border border-main-orange pl-0.5 pr-2 pt-px text-md text-main-orange duration-200 hover:bg-main-orange hover:text-white"
      >
        <span className="material-symbols-outlined text-xl font-light">add</span>
        <span className="font-semibold">연도 추가</span>
      </Link>
    </LoginVisible>
  );
}

function Minutes({ minute, isLast }: { minute: CouncilMeetingMinute; isLast: boolean }) {
  const handleDelete = async () => {
    const resp = await deleteMinuteAction(minute.year, minute.index);
    handleServerResponse(resp, {
      successMessage: `${minute.year}년 ${minute.index}차 회의록을 삭제했습니다.`,
    });
  };

  return (
    <div className="mb-10 w-full border-b border-neutral-200 pb-10">
      <div className="flex items-center justify-between gap-2.5 ">
        <div className="font-semibold">{minute.index}차 회의 회의록</div>
        <LoginVisible role={['ROLE_COUNCIL', 'ROLE_STAFF']}>
          <div className="flex justify-end gap-3">
            {isLast && <DeleteButton onDelete={handleDelete} />}
            <EditButton href={`${minutePath}/edit?year=${minute.year}&index=${minute.index}`} />
          </div>
        </LoginVisible>
      </div>
      {minute.attachments.map((file) => (
        <CouncilAttachment {...file} key={file.id} />
      ))}
    </div>
  );
}

'use client';

import { useState } from 'react';

import { deleteMinuteAction } from '@/actions/council';
import { Minute } from '@/apis/types/council';
import Timeline from '@/app/[locale]/academics/components/timeline/Timeline';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { Link, usePathname } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { refreshPage } from '@/utils/refreshPage';
import { CustomError, handleServerResponse } from '@/utils/serverActionError';

import CouncilAttachment from '../components/CouncilAttachments';

const minutePath = getPath(councilMinute);

export default function MinutePageContent({
  contents,
}: {
  contents: { [year: string]: Minute[] };
}) {
  const [selectedYear, setSelectedYear] = useState(2025);
  const timeLineYears = Object.keys(contents)
    .map(Number)
    .sort((a, b) => b - a);
  const selectedContents = contents[selectedYear.toString()] ?? [];
  const pathname = usePathname();

  // const getEditHref = (year: number) => `${pathname}/edit?year=${year}`;

  return (
    <PageLayout titleType="big">
      <AddButton pathname={pathname} />
      <Timeline
        times={timeLineYears}
        selectedTime={selectedYear}
        setSelectedTime={setSelectedYear}
      />
      <div className="mt-7">
        {selectedContents.map((minute) => {
          return <Minutes minute={minute} key={`${minute.year}_${minute.index}`} />;
        })}
      </div>
    </PageLayout>
  );
}

function AddButton({ pathname }: { pathname: string }) {
  return (
    <LoginVisible staff>
      <Link
        href={`${pathname}/create`}
        className="mb-7 ml-0.5 flex h-[30px] w-fit items-center rounded-2xl border border-main-orange pl-0.5 pr-2 pt-px text-md text-main-orange duration-200 hover:bg-main-orange hover:text-white"
      >
        <span className="material-symbols-outlined text-xl font-light">add</span>
        <span className="font-semibold">연도 추가</span>
      </Link>
    </LoginVisible>
  );
}

function Buttons({
  onDelete,
  editHref,
}: {
  onDelete: () => Promise<CustomError | void>;
  editHref: string;
}) {
  return (
    <LoginVisible staff>
      <div className="flex justify-end gap-3">
        <DeleteButton onDelete={onDelete} />
        <EditButton href={editHref} />
      </div>
    </LoginVisible>
  );
}

function Minutes({ minute }: { minute: Minute }) {
  const handleDelete = async () => {
    const resp = await deleteMinuteAction(minute.year, minute.index);
    handleServerResponse(resp, {
      successMessage: `${minute.year}년 ${minute.index}차 회의록을 삭제했습니다.`,
      onSuccess: refreshPage,
    });
  };

  return (
    <div className="mb-10 w-fit border-b border-neutral-200 pb-10">
      <div className="flex items-center justify-between gap-2.5 ">
        <div className="font-semibold">{minute.index}차 회의 회의록</div>
        <Buttons
          onDelete={handleDelete}
          editHref={`${minutePath}/edit/${minute.year}/${minute.index}`}
        />
      </div>
      {minute.attachments.map((file) => (
        <CouncilAttachment {...file} key={file.id} />
      ))}
    </div>
  );
}

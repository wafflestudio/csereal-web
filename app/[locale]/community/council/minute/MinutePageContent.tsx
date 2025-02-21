'use client';

import { useReducer, useState } from 'react';

import { deleteMinuteAction } from '@/actions/council';
import Timeline from '@/app/[locale]/academics/components/timeline/Timeline';
import Attachments, { Attachment } from '@/components/common/Attachments';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link, usePathname } from '@/i18n/routing';
import { refreshPage } from '@/utils/refreshPage';
import { CustomError, handleServerResponse } from '@/utils/serverActionError';
import { councilMinute } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const YEAR_LIMIT_COUNT = 10;

interface MinuteContent {
  year: number;
  index: number;
  attachments: Attachment[];
}

const TIME_LINE_YEARS = [2025, 2024, 2023]; // temp

const minutePath = getPath(councilMinute);

export default function MinutePageContent({ contents }: { contents: MinuteContent[] }) {
  const [selectedYear, setSelectedYear] = useState(contents[0].year);
  // const timeLineYears = contents.map((change) => change.year).slice(0, YEAR_LIMIT_COUNT);
  const timeLineYears = TIME_LINE_YEARS;
  const yearLimit = timeLineYears.at(-1) ?? 0;
  // const selectedContents = getSelectedContents(selectedYear, yearLimit, contents);
  const selectedContents = contents;
  const pathname = usePathname();

  const handleDelete = async (year: number) => {
    const index = 1;

    const resp = await deleteMinuteAction(year, index);
    handleServerResponse(resp, {
      successMessage: `${year}년 ${index}차 회의록을 삭제했습니다.`,
      onSuccess: refreshPage,
    });
  };

  const getEditHref = (year: number) => `${pathname}/edit?year=${year}`;

  return (
    <PageLayout titleType="big">
      <AddButton pathname={pathname} />
      <Timeline
        times={timeLineYears}
        selectedTime={selectedYear}
        setSelectedTime={setSelectedYear}
      />
      <div className="mt-7">
        <ContentViewer contents={selectedContents} />
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

function ContentViewer({ contents }: { contents: MinuteContent[] }) {
  return (
    <div className="mb-5">
      {contents.map((minute) => {
        return (
          <div className="mb-7 border-b border-neutral-200">
            <div className="flex items-center justify-between gap-2.5">
              <div className="font-semibold">{minute.index}차 회의 회의록</div>
              <Buttons
                onDelete={() => deleteMinuteAction(minute.year, minute.index)}
                editHref={`${minutePath}/edit/${minute.year}/${minute.index}`}
              />
            </div>
            {minute.attachments.map((file) => (
              <Attachments files={[file]} margin="mt-3 sm:mt-6 mb-3 sm:mb-6" />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function TogglableContentViewer({
  expandDefault = false,
  attachments,
  onDelete,
  editHref,
}: {
  expandDefault?: boolean;
  attachments: Attachment[];
  onDelete: () => Promise<CustomError | void>;
  editHref: string;
}) {
  const [isExpanded, toggleContent] = useReducer((x) => !x, expandDefault);

  return (
    <div className="mb-5">
      <button onClick={toggleContent} className="mb-4 flex items-center hover:text-main-orange">
        <span className="material-symbols-outlined text-2xl font-light">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      {isExpanded && (
        <>
          <Attachments files={attachments} />
          <Buttons onDelete={onDelete} editHref={editHref} />
        </>
      )}
    </div>
  );
}

const getSelectedContents = (year: number, yearLimit: number, data: MinuteContent[]) => {
  if (year <= yearLimit) return data.filter((d) => d.year <= yearLimit);

  const change = data.find((d) => d.year === year);
  return change ? [change] : [{ year, attachments: [] }];
};

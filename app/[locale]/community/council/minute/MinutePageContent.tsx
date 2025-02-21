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

const YEAR_LIMIT_COUNT = 10;

interface MinuteContent {
  year: number;
  attachments: Attachment[];
}

export default function MinutePageContent({ contents }: { contents: MinuteContent[] }) {
  const [selectedYear, setSelectedYear] = useState(contents[0].year);
  const timeLineYears = contents.map((change) => change.year).slice(0, YEAR_LIMIT_COUNT);
  const yearLimit = timeLineYears.at(-1) ?? 0;
  const selectedContents = getSelectedContents(selectedYear, yearLimit, contents);
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
        {selectedContents.length === 1 ? (
          <ContentViewer
            attachments={selectedContents[0].attachments}
            onDelete={() => handleDelete(selectedYear)}
            editHref={getEditHref(selectedYear)}
          />
        ) : (
          selectedContents.map((change, i) => (
            <TogglableContentViewer
              expandDefault={i === 0}
              attachments={change.attachments}
              onDelete={() => handleDelete(change.year)}
              editHref={getEditHref(change.year)}
              key={change.year}
            />
          ))
        )}
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
        <span className="font-semibold">학생회 추가</span>
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
      <div className="mt-7 flex justify-end gap-3">
        <DeleteButton onDelete={onDelete} />
        <EditButton href={editHref} />
      </div>
    </LoginVisible>
  );
}

function ContentViewer({
  attachments,
  onDelete,
  editHref,
}: {
  attachments: Attachment[];
  onDelete: () => Promise<CustomError | void>;
  editHref: string;
}) {
  return (
    <div className="mb-5">
      <Attachments files={attachments} />
      <Buttons onDelete={onDelete} editHref={editHref} />
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

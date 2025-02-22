'use client';

import { useReducer, useState } from 'react';

import { TimelineContent } from '@/apis/types/academics';
import { Attachment } from '@/apis/types/attachment';
import Attachments from '@/components/common/Attachments';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { Link, usePathname } from '@/i18n/routing';
import { refreshPage } from '@/utils/refreshPage';
import { CustomError, handleServerResponse } from '@/utils/serverActionError';

import Timeline from './Timeline';

interface TimelineViewerProps<T> {
  contents: T[];
  title: { text: string; unit: string };
  deleteAction: (year: number) => Promise<CustomError | void>;
  yearLimitCount?: number;
}

export default function TimelineViewer<T extends TimelineContent>({
  contents,
  title,
  deleteAction,
  yearLimitCount = 10,
}: TimelineViewerProps<T>) {
  const [selectedYear, setSelectedYear] = useState(contents[0].year);
  const timeLineYears = contents.map((change) => change.year).slice(0, yearLimitCount);
  const yearLimit = timeLineYears.at(-1) ?? 0;
  const selectedContents = getSelectedContents(selectedYear, yearLimit, contents);
  const pathname = usePathname();

  const handleDelete = async (year: number) => {
    const resp = await deleteAction(year);
    handleServerResponse(resp, {
      successMessage: '삭제했습니다.',
      onSuccess: refreshPage,
    });
  };

  const getEditHref = (year: number) => `${pathname}/edit?year=${year}`;

  return (
    <>
      <AddButton pathname={pathname} />
      <Timeline
        times={timeLineYears}
        selectedTime={selectedYear}
        setSelectedTime={setSelectedYear}
      />
      <div className="mt-7">
        {selectedContents.length === 1 ? (
          <ContentViewer
            description={selectedContents[0].description}
            title={`${selectedContents[0].year}${title.unit} ${title.text}`}
            attachments={selectedContents[0].attachments}
            onDelete={() => handleDelete(selectedYear)}
            editHref={getEditHref(selectedYear)}
          />
        ) : (
          selectedContents.map((change, i) => {
            const isLast = i !== 0 && i === selectedContents.length - 1;
            return (
              <TogglableContentViewer
                description={change.description}
                expandDefault={i === 0}
                title={`${change.year}${title.unit}${isLast ? ' 이하' : ''} ${title.text}`}
                attachments={change.attachments}
                onDelete={() => handleDelete(change.year)}
                editHref={getEditHref(change.year)}
                key={change.year}
              />
            );
          })
        )}
      </div>
    </>
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
      <div className="mt-7 flex justify-end gap-3">
        <DeleteButton onDelete={onDelete} />
        <EditButton href={editHref} />
      </div>
    </LoginVisible>
  );
}

function ContentViewer({
  description,
  title,
  attachments,
  onDelete,
  editHref,
}: {
  description: string;
  title: string;
  attachments: Attachment[];
  onDelete: () => Promise<CustomError | void>;
  editHref: string;
}) {
  return (
    <div className="mb-5">
      <div className="mb-4 font-semibold">{title}</div>
      <Attachments files={attachments} />
      <ContentHTMLViewer description={description} />
      <Buttons onDelete={onDelete} editHref={editHref} />
    </div>
  );
}

function TogglableContentViewer({
  description,
  expandDefault = false,
  title,
  attachments,
  onDelete,
  editHref,
}: {
  description: string;
  expandDefault?: boolean;
  title: string;
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
        <span className="font-semibold">{title}</span>
      </button>
      {isExpanded && (
        <>
          <Attachments files={attachments} />
          <ContentHTMLViewer description={description} />
          <Buttons onDelete={onDelete} editHref={editHref} />
        </>
      )}
    </div>
  );
}

function ContentHTMLViewer({ description }: { description: string }) {
  return <HTMLViewer htmlContent={description} wrapperClassName="bg-neutral-75 p-5" />;
}

const getSelectedContents = <T extends TimelineContent>(
  year: number,
  yearLimit: number,
  data: T[],
): T[] | TimelineContent[] => {
  if (year <= yearLimit) return data.filter((d) => d.year <= yearLimit);

  const change = data.find((d) => d.year === year);
  return change
    ? [change]
    : [{ year, description: `${year}학년도 내용은 없습니다.`, attachments: [] }];
};

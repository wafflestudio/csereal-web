import { useTranslations } from 'next-intl';

interface ConferenceListTableProps {
  id: number;
  abbreviation: string;
  name: string;
}

interface ConferenceRowProps {
  index: number;
  conference: ConferenceListTableProps;
}

export default function ConferenceListTable({
  conferenceList,
}: {
  conferenceList: ConferenceListTableProps[];
}) {
  const t = useTranslations('Content');

  return (
    <div className="overflow-x-scroll">
      <div className="mt-8 flex w-[720px] flex-col text-sm">
        <div className="flex h-10 w-full flex-row border-y-[1px] border-y-neutral-200">
          <div className="flex w-12 items-center justify-center px-3">{t('연번')}</div>
          <div className="flex w-28 items-center px-3">{t('약칭')}</div>
          <div className="flex w-[540px] items-center px-3">{t('학술대회 명칭')}</div>
        </div>
        {conferenceList.map((conference, index) => (
          <ConferenceRow conference={conference} index={index + 1} key={conference.id} />
        ))}
      </div>
    </div>
  );
}

function ConferenceRow({ conference, index }: ConferenceRowProps) {
  return (
    <div
      className={`flex w-full flex-row items-center break-words text-sm leading-[18px] even:bg-neutral-100`}
    >
      <div className="flex w-12 items-center justify-center px-3 py-2.5">{index}</div>
      <div className="flex w-28 items-center px-3 py-2.5">{conference.abbreviation}</div>
      <div className="flex w-[540px] items-center px-3 py-2.5">{conference.name}</div>
    </div>
  );
}

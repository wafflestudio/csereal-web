export interface ConferenceListTableProps {
  id: number;
  code: string;
  abbreviation: string;
  name: string;
}

export interface ConferenceRowProps {
  conference: ConferenceListTableProps;
  index: number;
}

export default function ConferenceListTable({
  conferenceList,
}: {
  conferenceList: ConferenceListTableProps[];
}) {
  return (
    <div className="w-[780px] flex flex-col text-xs mt-10">
      <div className="flex flex-row w-full h-10 border-y-[1px] border-y-neutral-200">
        <div className="flex items-center px-3 w-12">연번</div>
        <div className="flex items-center px-3 w-20">코드</div>
        <div className="flex items-center px-3 w-28">약칭</div>
        <div className="flex items-center px-3 w-[540px]">학술대회명칭</div>
      </div>
      {conferenceList.map((conference, index) => (
        <ConferenceRow conference={conference} key={index} index={index} />
      ))}
    </div>
  );
}

function ConferenceRow({ conference, index }: ConferenceRowProps) {
  return (
    <div
      className={`flex flex-row w-full h-auto break-words items-center leading-[18px] ${
        index % 2 === 1 ? 'bg-neutral-50' : null
      }`}
    >
      <div className="flex px-3 py-2 w-12 h-10 items-center">{conference.id}</div>
      <div className="flex px-3 py-2 w-20 items-center">{conference.code}</div>
      <div className="flex px-3 py-2 w-28 items-center">{conference.abbreviation}</div>
      <div className="flex px-3 py-2 w-[540px] items-center">{conference.name}</div>
    </div>
  );
}

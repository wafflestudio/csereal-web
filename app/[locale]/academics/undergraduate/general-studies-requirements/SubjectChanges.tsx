interface SubjectChangesProps {
  status: 'new' | 'change';
  time: string;
  additionalInfos?: string[] | undefined;
  changes: string[];
  progress: string;
}

export default function SubjectChanges({
  status,
  time,
  additionalInfos,
  changes,
  progress,
}: SubjectChangesProps) {
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

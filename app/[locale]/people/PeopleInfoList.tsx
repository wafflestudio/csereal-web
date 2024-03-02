export interface PeopleInfoListProps {
  title: string;
  infoList: string[];
}

export default function PeopleInfoList({ title, infoList }: PeopleInfoListProps) {
  return (
    <article className="text-neutral-700 flex flex-col mb-7">
      <h3 className="text-base font-noto font-bold leading-8">{title}</h3>
      <ul className="list-inside list-disc">
        {infoList.map((info, i) => (
          <li key={i} className="flex items-center space-x-2 px-2 text-sm leading-[26px] mr-[1px]">
            <div className="w-[3px] h-[3px] bg-neutral-700 rounded-full"></div>
            <p>{info}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

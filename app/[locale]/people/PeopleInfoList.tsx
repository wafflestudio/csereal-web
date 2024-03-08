export interface PeopleInfoListProps {
  title: string;
  infoList: string[];
}

export default function PeopleInfoList({ title, infoList }: PeopleInfoListProps) {
  return (
    <article className="mb-7 flex flex-col text-neutral-700">
      <h3 className="font-noto text-base font-bold leading-8">{title}</h3>
      <ul className="list-inside list-disc">
        {infoList.map((info, i) => (
          <li key={i} className="mr-[1px] flex items-center space-x-2 px-2 text-sm leading-[26px]">
            <div className="h-[3px] w-[3px] rounded-full bg-neutral-700"></div>
            <p>{info}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

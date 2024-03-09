import BulletRow from './BulletRow';

export interface PeopleInfoListProps {
  header: string;
  list: string[];
}

export default function HeaderAndList({ header, list }: PeopleInfoListProps) {
  if (list.length === 0) return <></>;

  return (
    <article className="mb-7 flex flex-col text-neutral-700">
      <h3 className="text-base font-bold leading-8">{header}</h3>
      <ul className="list-inside list-disc">
        {list.map((info, i) => (
          <BulletRow key={i}>{info}</BulletRow>
        ))}
      </ul>
    </article>
  );
}

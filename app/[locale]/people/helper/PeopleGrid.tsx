import PeopleCell, { PeopleCellProps } from './PeopleCell';

export default function PeopleGrid({ contentList }: { contentList: PeopleCellProps[] }) {
  return (
    <div className="grid gap-14 sm:grid-cols-[repeat(auto-fit,_144px)]">
      {contentList.map((content, idx) => (
        <PeopleCell key={idx} {...content} />
      ))}
    </div>
  );
}

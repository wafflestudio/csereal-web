import PeopleCell, { PeopleCellProps } from '@/app/[locale]/people/components/PeopleCell';

export default function PeopleGrid({ contentList }: { contentList: PeopleCellProps[] }) {
  return (
    <div className="grid max-w-[800px] gap-16 sm:grid-cols-[repeat(auto-fit,_144px)]">
      {contentList.map((content, idx) => (
        <PeopleCell key={idx} {...content} />
      ))}
    </div>
  );
}

import PeopleCell, { PeopleCellProps, PeopleType } from './PeopleCell';

export default function PeopleGrid<T extends Partial<PeopleCellProps>>({
  people,
  peopleType,
}: {
  people: T[];
  peopleType: PeopleType;
}) {
  return (
    <div className="grid gap-14 sm:grid-cols-[repeat(auto-fit,_144px)]">
      {people.map((person) => (
        <PeopleCell
          type={peopleType}
          key={person.id!}
          id={person.id!}
          name={person.name!}
          role={person.role}
          office={person.office}
          academicRank={person.academicRank}
          email={person.email}
          phone={person.phone}
          imageURL={person.imageURL!}
          labId={person.labId}
          labName={person.labName}
        />
      ))}
    </div>
  );
}

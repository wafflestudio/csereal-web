export default function PageTitle({ name, academicRank }: { name: string; academicRank: string }) {
  return (
    <div className="flex flex-row items-end">
      <p>{name}</p>
      <p className="ml-2 text-md font-normal leading-7 text-neutral-500">{academicRank}</p>
    </div>
  );
}

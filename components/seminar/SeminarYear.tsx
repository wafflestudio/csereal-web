export interface SeminarYearProps {
  index: number;
  startDate: string;
}

export default function SeminarYear({ index, startDate }: SeminarYearProps) {
  const seminarYear = new Date(startDate).getFullYear();
  return (
    <div className={`border-b-2 border-neutral-700 ${index !== 0 ? 'mt-12' : null}`}>
      <h3 className="text-[1.25rem] font-bold pb-2.5">{seminarYear}</h3>
    </div>
  );
}

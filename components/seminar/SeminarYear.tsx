export interface SeminarYearProps {
  index: number;
  startDate: string;
}

export default function SeminarYear({ index, startDate }: SeminarYearProps) {
  const seminarYear = new Date(startDate).getFullYear();
  return (
    <div className={`border-b-[1px] border-neutral-500 ${index !== 0 ? 'mt-12' : null}`}>
      <h3 className="text-neutral-700 font-noto text-[1.25rem] font-bold pb-[.69rem] w-[4.5rem] text-center leading-7">
        {seminarYear}
      </h3>
    </div>
  );
}

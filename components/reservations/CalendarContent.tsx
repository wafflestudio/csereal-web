export default function CalendarContent({
  ymd,
}: {
  ymd: { year: number; month: number; day: number };
}) {
  return (
    <div className="flex">
      <RowIndex />
    </div>
  );
}

const RowIndex = () => {
  const rows = [
    ...Array(5)
      .fill(0)
      .map((_, x) => x + 8 + 'AM'),
    ...Array(10)
      .fill(0)
      .map((_, x) => x + 1 + 'PM'),
  ];

  return (
    <div className="flex flex-col items-stretch w-[3.75rem]">
      <div className="h-[4.0625rem] border border-x-neutral-200 border-b-neutral-200 border-t-neutral-300 bg-neutral-100" />
      {rows.map((x) => (
        <div
          key={x}
          className="h-12 border-x border-b border-neutral-200 flex items-center justify-center"
        >
          <p className="font-yoon text-xs text-neutral-700 font-medium text-center">{x}</p>
        </div>
      ))}
    </div>
  );
};



const ymdToDate = (ymd: { year: number; month: number; day: number }) => {
  return new Date(ymd.year, ymd.month - 1, ymd.day);
};

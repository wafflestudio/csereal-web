import { Dispatch, SetStateAction } from 'react';

interface TimeLineProps {
  timeSpots: { year: number; margin?: string; isLast?: boolean }[];
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
}

export default function TimeLine({ timeSpots, selectedYear, setSelectedYear }: TimeLineProps) {
  return (
    <div className="relative flex h-[38px] w-full max-w-4xl">
      <div className="absolute ml-[14px] mt-[7px] h-[0.8px] w-[calc(100%-14px)] bg-main-orange" />
      {timeSpots.map((spot) => (
        <TimeSpot
          year={spot.year}
          isSelected={spot.year === selectedYear}
          onChange={() => setSelectedYear(spot.year)}
          margin={spot.margin}
          isLast={spot.isLast}
          key={spot.year}
        />
      ))}
    </div>
  );
}

interface TimeSpotProps {
  year: number;
  isSelected: boolean;
  onChange: () => void;
  margin?: string;
  isLast?: boolean;
}

function TimeSpot({ year, isSelected, onChange, margin, isLast }: TimeSpotProps) {
  return (
    <label
      htmlFor={`${year}`}
      className={`group top-0 z-10 flex h-full w-[1.875rem] flex-col items-center justify-between ${margin} ${
        isSelected ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <Circle highlight={isSelected} />
      <span className="flex items-center text-sm tracking-[0.02em] text-main-orange">
        {year}
        {isLast && (
          <span className="material-symbols-rounded text-base font-light">arrow_downward</span>
        )}
      </span>
      <input
        type="radio"
        id={`${year}`}
        name="year"
        className="hidden"
        value={year}
        checked={isSelected}
        onChange={onChange}
      />
    </label>
  );
}

function Circle({ highlight }: { highlight: boolean }) {
  const highlightStyle = 'bg-main-orange w-3.5 h-3.5 mt-0';
  const defaultStyle =
    'bg-white w-2.5 h-2.5 mt-[2px] group-hover:w-3.5 group-hover:h-3.5 group-hover:mt-0';

  return (
    <span
      className={`inline-block rounded-full border border-main-orange duration-200 ${
        highlight ? highlightStyle : defaultStyle
      }`}
    />
  );
}

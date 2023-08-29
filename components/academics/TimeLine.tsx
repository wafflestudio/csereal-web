import { Dispatch, SetStateAction } from 'react';

interface TimeLineProps {
  timeSpots: { year: number; margin?: string; isLast?: boolean }[];
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
}

export default function TimeLine({ timeSpots, selectedYear, setSelectedYear }: TimeLineProps) {
  return (
    <div className="relative h-[38px] w-[48.75rem] flex">
      <div className="absolute w-[calc(100%-14px)] h-[0.8px] bg-main-orange mt-[7px] ml-[14px] bg-gradient-to-r from-main-orange from-90% to-white" />
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
      className={`z-10 group top-0 w-[1.875rem] h-full flex flex-col justify-between items-center ${margin} ${
        isSelected ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <Circle highlight={isSelected} />
      <span className="flex items-center font-yoon text-main-orange text-sm tracking-[0.02em]">
        {year}
        {isLast && (
          <span className="material-symbols-rounded font-light text-base">arrow_downward</span>
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

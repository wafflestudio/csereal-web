import { Dispatch, SetStateAction } from 'react';

interface TimeLineProps {
  spots: number[];
  selectedSpot: number;
  setSelectedSpot: Dispatch<SetStateAction<number>>;
}

export default function TimeLine({ spots, selectedSpot, setSelectedSpot }: TimeLineProps) {
  return (
    <div className="relative flex h-[38px] w-full max-w-4xl">
      <div className="absolute ml-[14px] mt-[7px] h-[0.8px] w-[calc(100%-14px)] bg-main-orange" />
      {spots.map((spot, i) => (
        <TimeSpot
          spot={spot}
          isSelected={spot === selectedSpot}
          onChange={() => setSelectedSpot(spot)}
          isLast={i === spots.length - 1}
          key={spot}
        />
      ))}
    </div>
  );
}

interface TimeSpotProps {
  spot: number;
  isSelected: boolean;
  onChange: () => void;
  isLast?: boolean;
}

function TimeSpot({ spot, isSelected, onChange, isLast }: TimeSpotProps) {
  return (
    <label
      htmlFor={spot.toString()}
      className={`group top-0 z-10 mr-7 flex h-full w-[1.875rem] flex-col items-center justify-between ${
        isSelected ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <Circle highlight={isSelected} />
      <span className="flex items-center text-sm tracking-[0.02em] text-main-orange">
        {spot}
        {isLast && (
          <span className="material-symbols-rounded text-base font-light">arrow_downward</span>
        )}
      </span>
      <input
        type="radio"
        id={`${spot}`}
        name="year"
        className="hidden"
        value={spot}
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

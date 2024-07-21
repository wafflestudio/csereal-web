interface TimeLineProps {
  spots: number[];
  selectedSpot: number;
  setSelectedSpot: (year: number) => void;
}

export default function TimeLine({ spots, selectedSpot, setSelectedSpot }: TimeLineProps) {
  return (
    <div className="relative flex w-full max-w-4xl flex-wrap">
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
      className={`group relative mb-7 mr-7 flex h-[38px] items-center ${
        isSelected ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <div className="flex h-full w-[1.875rem] flex-col items-center justify-between">
        <Circle highlight={isSelected} />
        <span className="flex items-center text-sm tracking-[0.02em] text-main-orange">
          {spot}
          {isLast && (
            <span className="material-symbols-rounded text-base font-light">arrow_downward</span>
          )}
        </span>
      </div>
      <div className="absolute left-5 top-1.5 h-px w-12 bg-main-orange" />
      <input
        type="radio"
        name="spot"
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
    'bg-white w-2.5 h-2.5 mt-[2px] group-hover:w-3.5 group-hover:h-3.5 group-hover:mt-0 z-10';

  return (
    <span
      className={`inline-block rounded-full border border-main-orange duration-200 ${
        highlight ? highlightStyle : defaultStyle
      }`}
    />
  );
}

interface TimelineProps {
  times: number[];
  selectedTime: number;
  setSelectedTime: (year: number) => void;
  hideDownArrow?: boolean;
}

export default function Timeline({
  times,
  selectedTime,
  setSelectedTime,
  hideDownArrow,
}: TimelineProps) {
  return (
    <div className="relative flex w-full max-w-4xl flex-wrap">
      {times.map((time, i) => (
        <TimeSpot
          time={time}
          isSelected={time === selectedTime}
          onChange={() => setSelectedTime(time)}
          isLast={!hideDownArrow && i === times.length - 1}
          key={time}
        />
      ))}
    </div>
  );
}

interface TimeSpotProps {
  time: number;
  isSelected: boolean;
  onChange: () => void;
  isLast?: boolean;
}

function TimeSpot({ time, isSelected, onChange, isLast }: TimeSpotProps) {
  return (
    <label
      className={`group relative mb-7 mr-11 flex h-[38px] items-center ${
        isSelected ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <div className="flex h-full w-9 flex-col items-center justify-between">
        <Circle highlight={isSelected} />
        <span className="flex items-center text-sm tracking-[0.02em] text-main-orange">
          {time}
          {isLast && (
            <span className="material-symbols-rounded text-base font-light">arrow_downward</span>
          )}
        </span>
      </div>
      <div className="absolute left-5 top-1.5 h-px w-[72px] bg-main-orange" />
      <input
        type="radio"
        name="time"
        className="hidden"
        value={time}
        checked={isSelected}
        onChange={onChange}
      />
    </label>
  );
}

function Circle({ highlight }: { highlight: boolean }) {
  const highlightStyle = 'bg-main-orange w-4 h-4 mt-0';
  const defaultStyle =
    'bg-white w-3 h-3 mt-[2px] group-hover:w-3.5 group-hover:h-3.5 group-hover:mt-0 z-10';

  return (
    <span
      className={`inline-block rounded-full border border-main-orange duration-200 ${
        highlight ? highlightStyle : defaultStyle
      }`}
    />
  );
}

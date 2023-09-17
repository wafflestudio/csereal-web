interface IndicatorProps {
  total: number;
  currentIndex: number;
  changeIndex: (index: number) => void;
}

export default function Indicator({ total, currentIndex, changeIndex }: IndicatorProps) {
  return (
    <div className="flex gap-2">
      {Array(total)
        .fill(0)
        .map((v, i) => i)
        .map((index) => (
          <Dot key={index} index={index} fill={index === currentIndex} changeIndex={changeIndex} />
        ))}
    </div>
  );
}

interface DotProps {
  index: number;
  fill: boolean;
  changeIndex: (index: number) => void;
}

function Dot({ index, fill, changeIndex }: DotProps) {
  return (
    <button
      className={`w-2.5 h-2.5 rounded-full ${fill ? 'bg-main-orange' : 'bg-neutral-300'}`}
      onClick={() => changeIndex(index)}
    />
  );
}

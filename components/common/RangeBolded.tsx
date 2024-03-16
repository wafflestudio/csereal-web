export default function RangeBolded({
  partialDescription,
  boldStartIndex,
  boldEndIndex,
}: {
  partialDescription: string;
  boldStartIndex: number;
  boldEndIndex: number;
}) {
  return (
    <p className="truncate text-md font-normal text-neutral-500">
      {partialDescription.slice(0, boldStartIndex)}
      <span className="font-bold text-neutral-950">
        {partialDescription.slice(boldStartIndex, boldEndIndex)}
      </span>
      {partialDescription.slice(boldEndIndex)}
    </p>
  );
}

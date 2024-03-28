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
    <p className="truncate-multi sm:truncate-single text-md font-normal text-neutral-700">
      {partialDescription.slice(0, boldStartIndex)}
      <span className="font-semibold text-neutral-950">
        {partialDescription.slice(boldStartIndex, boldEndIndex)}
      </span>
      {partialDescription.slice(boldEndIndex)}
    </p>
  );
}

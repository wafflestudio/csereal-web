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
    <p className="line-clamp-1 text-md font-normal text-neutral-700">
      {partialDescription.slice(0, boldStartIndex)}
      <span className="font-bold">{partialDescription.slice(boldStartIndex, boldEndIndex)}</span>
      {partialDescription.slice(boldEndIndex)}
    </p>
  );
}

// 기존 사용 시간을 최대한 유지한 채 새로운 startDate에 맞는 새로운 endDate를 반환
export default function getOptimalEndTime({
  prevStart,
  prevEnd,
  newStart,
}: {
  prevStart: Date;
  prevEnd: Date;
  newStart: Date;
}): Date {
  // 사용 시간을 가능한 유지시킴
  const previousDiff = newStart.getTime() + prevEnd.getTime() - prevStart.getTime();
  let newEnd = new Date(previousDiff);

  // 유지시켰는데 오후 11시 이후면 오후 11시로 고정
  if (
    newEnd.getDate() != newStart.getDate() ||
    (23 <= newEnd.getHours() && 0 < newEnd.getMinutes())
  ) {
    newEnd = new Date(newStart);
    newEnd.setHours(23);
    newEnd.setMinutes(0);
  }

  return newEnd;
}

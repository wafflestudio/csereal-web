// 기존 사용 시간을 최대한 유지한 채 새로운 startDate에 맞는 새로운 endDate를 반환
export default function getOptimalEndTime(
  prevStartDate: Date,
  prevEndDate: Date,
  newStartDate: Date,
): Date {
  // 사용 시간을 가능한 유지시킴
  const previousDiff = prevEndDate.getTime() - prevStartDate.getTime();
  let newEndDate = new Date(newStartDate);
  newEndDate.setTime(newStartDate.getTime() + previousDiff);

  // 유지시켰는데 오후 11시 이후면 오후 11시로 고정
  if (
    newEndDate.getDate() != newStartDate.getDate() ||
    (23 <= newEndDate.getHours() && 0 < newEndDate.getMinutes())
  ) {
    newEndDate = new Date(newStartDate);
    newEndDate.setHours(23);
    newEndDate.setMinutes(0);
  }

  return newEndDate;
}

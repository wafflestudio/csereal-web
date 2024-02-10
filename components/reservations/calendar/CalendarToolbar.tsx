import {
  ChangeDateButton,
  MakeReservationButton,
  SelectDayButton,
  TodayButton,
} from './NavigateButtons';

export default function Toolbar({ date, roomId }: { date: Date; roomId: number }) {
  const today = new Date();
  const showTodayButton =
    today.getFullYear() !== date.getFullYear() ||
    today.getMonth() !== date.getMonth() ||
    today.getDate() !== date.getDate();

  return (
    <div className="flex items-stretch justify-between h-[1.875rem] mb-6">
      <div className="flex items-stretch gap-2">
        <SelectDayButton date={date} />
        <ChangeDateButton targetDate={addDayToDate(date, -7)} symbolName="navigate_before" />
        <ChangeDateButton targetDate={addDayToDate(date, 7)} symbolName="navigate_next" />
        {showTodayButton && <TodayButton />}
      </div>
      {/* TODO: 권한 있는 계정 얻을 때까지 주석 처리 */}
      {/* <LoginUserVisible> */}
      <MakeReservationButton roomId={roomId} />
      {/* </LoginUserVisible> */}
    </div>
  );
}

const addDayToDate = (date: Date, day: number) => {
  const ret = new Date(date);
  ret.setDate(ret.getDate() + day);
  return ret;
};

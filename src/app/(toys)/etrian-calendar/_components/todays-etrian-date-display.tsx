import { toEtrianDate } from "../_utils/etrian-utils";

function TodaysEtrianDateDisplay() {
  const today = new Date();
  const todaysEtrianDate = toEtrianDate(today);

  return (
    <div className="flex items-end gap-2">
      <p className="mt-0">本日は</p>
      <p className="mt-0">
        <span className="text-xs text-muted-foreground">
          {todaysEtrianDate.month.kana}
        </span>
        <br />
        <span className="font-bold">{`${todaysEtrianDate.month.name} ${todaysEtrianDate.day && `${todaysEtrianDate.day} 日`}`}</span>
      </p>
      <p className="mt-0">です！</p>
    </div>
  );
}

export { TodaysEtrianDateDisplay };

"use client";

import { toEtrianDate } from "@/app/(toys)/etrian-calendar/_utils/etrian-utils";

function TodaysEtrianDateDisplay() {
  const today = new Date();
  const todaysEtrianDate = toEtrianDate(today);

  return (
    <div className="flex items-end gap-2">
      <p className="mt-0">今日は</p>
      <p className="mt-0 font-bold">
        <ruby>
          <span
            className={
              todaysEtrianDate.month.name === "鬼乎ノ日" ? "text-red-800" : ""
            }
          >
            {todaysEtrianDate.month.name}
          </span>
          <rt className="font-normal">{todaysEtrianDate.month.kana}</rt>
        </ruby>{" "}
        {`${todaysEtrianDate.day && `${todaysEtrianDate.day} 日`}`}
      </p>
      <p className="mt-0">です！</p>
    </div>
  );
}

export { TodaysEtrianDateDisplay };

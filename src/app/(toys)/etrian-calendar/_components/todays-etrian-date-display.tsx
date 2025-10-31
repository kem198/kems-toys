"use client";

import { toEtrianDate } from "@/app/(toys)/etrian-calendar/_utils/etrian-utils";

function TodaysEtrianDateDisplay() {
  const today = new Date();
  const todaysEtrianDate = toEtrianDate(today);

  return (
    <p className="flex items-end gap-1">
      <span>今日は</span>
      <span
        className={`mt-0 font-bold ${todaysEtrianDate.month.name === "鬼乎ノ日" ? "text-red-700" : ""}`}
      >
        <ruby>
          {todaysEtrianDate.month.name}
          <rt className="font-normal">{todaysEtrianDate.month.kana}</rt>
        </ruby>
        {`${todaysEtrianDate.day ? ` ${todaysEtrianDate.day} 日` : ""}`}
      </span>
      <span>です！</span>
    </p>
  );
}

export { TodaysEtrianDateDisplay };

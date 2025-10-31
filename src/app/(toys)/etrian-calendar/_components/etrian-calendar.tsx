"use client";

import { toEtrianDate } from "../_utils/etrian-utils";

function EtrianCalendar() {
  const today = new Date();
  const todaysEtrianDate = toEtrianDate(today);

  return (
    <div>{`本日は ${todaysEtrianDate.month.name} ${todaysEtrianDate.day} 日です！`}</div>
  );
}

export { EtrianCalendar };

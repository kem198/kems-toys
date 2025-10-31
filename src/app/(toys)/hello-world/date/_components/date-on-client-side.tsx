"use client";

import { format } from "date-fns";

function DateOnClientSide() {
  return <div>{format(new Date(), "yyyy-MM-dd HH:mm:ss")}</div>;
}

export { DateOnClientSide };

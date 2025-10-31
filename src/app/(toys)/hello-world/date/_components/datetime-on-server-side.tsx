import { format } from "date-fns";

export function DatetimeOnServerSide() {
  return <div>{format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS")}</div>;
}

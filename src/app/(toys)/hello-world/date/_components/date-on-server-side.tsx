import { format } from "date-fns";

function DateOnServerSide() {
  return <div>{format(new Date(), "yyyy-MM-dd HH:mm:ss")}</div>;
}

export { DateOnServerSide };

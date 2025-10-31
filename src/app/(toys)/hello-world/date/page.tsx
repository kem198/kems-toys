import { DatetimeOnClientSide } from "@/app/(toys)/hello-world/date/_components/datetime-on-client-side";
import { DatetimeOnServerSide } from "@/app/(toys)/hello-world/date/_components/datetime-on-server-side";

function DatePage() {
  return (
    <div>
      <h1>Date</h1>

      <h2>Datetime on Client side</h2>
      <DatetimeOnClientSide />

      <h2>Datetime on Server side</h2>
      <DatetimeOnServerSide />
    </div>
  );
}

export default DatePage;

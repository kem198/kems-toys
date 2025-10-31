import { DateOnClientSide } from "./_components/date-on-client-side";
import { DateOnServerSide } from "./_components/date-on-server-side";

function DatePage() {
  return (
    <div>
      <h1>Date</h1>

      <h2>Date on Client side</h2>
      <DateOnClientSide />

      <h2>Date on Server side</h2>
      <DateOnServerSide />
    </div>
  );
}

export default DatePage;

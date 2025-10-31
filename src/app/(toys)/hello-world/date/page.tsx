import { DateOnClientSide } from "./_components/date-on-client-side";
import { DateOnServerSide } from "./_components/date-on-server-side";

function DatePage() {
  return (
    <>
      <h1>Date</h1>

      <div className="flex flex-col gap-4">
        <DateOnClientSide />
        <DateOnServerSide />
      </div>
    </>
  );
}

export default DatePage;

import { format } from "date-fns";

function DateOnServerSide() {
  return (
    // https://zenn.dev/luvmini511/articles/71f65df05716ca
    <div suppressHydrationWarning>
      {format(new Date(), "yyyy-MM-dd HH:mm:ss")}
    </div>
  );
}

export { DateOnServerSide };

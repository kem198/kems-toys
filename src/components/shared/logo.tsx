import Image from "next/image";

function Logo() {
  return (
    <div className="flex gap-1">
      <Image src="/icons/icon-192x192.png" alt="icon" width={24} height={24} />
      <span>{`KeM's Toys`}</span>
    </div>
  );
}

export { Logo };

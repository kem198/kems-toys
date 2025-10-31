import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type ColorProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function Color({ children, className }: ColorProps) {
  return (
    <div
      className={cn(
        `flex h-12 w-40 items-center justify-center text-sm`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Colors() {
  return (
    <div className="flex flex-wrap">
      <Color className="bg-primary text-primary-foreground">primary</Color>
    </div>
  );
}

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function ResultDisplay({ children, className }: Props) {
  return (
    <div
      className={`flex min-h-20 flex-col place-items-center items-center justify-center rounded bg-zinc-200 p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export { ResultDisplay };

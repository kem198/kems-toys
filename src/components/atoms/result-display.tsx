import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const ResultDisplay = ({ children, className }: Props) => (
  <div
    className={`rounded-box bg-base-200 my-4 flex min-h-20 flex-col place-items-center items-center justify-center p-4 ${className}`}
  >
    {children}
  </div>
);

export { ResultDisplay };

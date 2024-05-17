interface ResultDisplayProps {
  result: string | number;
}
const ResultDisplay = ({ result }: ResultDisplayProps) => (
  <div className="my-4 flex h-20 place-items-center items-center justify-center rounded-box bg-base-200 p-4">
    <p>{result}</p>
  </div>
);

export { ResultDisplay };

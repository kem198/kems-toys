import { ChangeEvent } from 'react';

interface LabeledNumberInputProps {
  labelText: string;
  count: number | null;
  setCount: (num: number | null) => void;
}

const LabeledNumberInputOld = ({
  labelText,
  count,
  setCount,
}: LabeledNumberInputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt(event.target.value, 10);
    if (!Number.isNaN(newNum)) {
      setCount(newNum);
    } else {
      setCount(null);
    }
  };

  return (
    <label className="input input-bordered flex items-center gap-2">
      {labelText}
      <input
        value={count === null ? '' : count}
        onChange={handleInputChange}
        className="grow text-right"
        placeholder="0"
        type="number"
      />
    </label>
  );
};

export { LabeledNumberInputOld };

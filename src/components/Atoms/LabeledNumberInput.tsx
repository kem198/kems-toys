import { ChangeEvent } from 'react';

interface LabeledNumberInputProps {
  labelText: string;
  count: number | '';
  setCount: (num: number | '') => void;
}

const LabeledNumberInput = ({
  labelText,
  count,
  setCount,
}: LabeledNumberInputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt(event.target.value, 10);
    if (!Number.isNaN(newNum)) {
      setCount(newNum);
    } else {
      setCount('');
    }
  };

  return (
    <label className="input input-bordered flex items-center gap-2">
      {labelText}
      <input
        value={count === '' ? '' : count}
        onChange={handleInputChange}
        className="grow text-right"
        placeholder="0"
        type="number"
      />
    </label>
  );
};

export { LabeledNumberInput };

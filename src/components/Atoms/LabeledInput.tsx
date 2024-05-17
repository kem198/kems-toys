import { ChangeEvent } from 'react';

interface LabeledInputProps {
  labelText: string;
  count: number | '';
  setCount: (num: number | '') => void;
  inputType: string;
}

const LabeledInput = ({
  labelText,
  count,
  setCount,
  inputType,
}: LabeledInputProps) => {
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
        type={inputType}
        value={count === '' ? '' : count}
        onChange={handleInputChange}
        className="grow text-right"
        placeholder="0"
      />
    </label>
  );
};

export { LabeledInput };

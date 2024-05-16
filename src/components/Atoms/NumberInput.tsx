interface Props {
  labelText: string;
  count: number | '';
  setCount: (num: number | '') => void;
}

const NumberInput = ({ labelText, count, setCount }: Props) => {
  /**
   * 入力フィールドの値を更新する関数
   * @param {React.ChangeEvent<HTMLInputElement>} event - 入力イベント
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt(event.target.value, 10);
    if (!Number.isNaN(newNum)) {
      setCount(newNum);
    } else {
      setCount('');
    }
  };

  return (
    <label className="input input-bordered flex items-center gap-2">
      {labelText} =
      <input
        type="number"
        value={count === '' ? '' : count}
        onChange={handleInputChange}
        className="grow text-right"
        placeholder="0"
      />
    </label>
  );
};

export { NumberInput };

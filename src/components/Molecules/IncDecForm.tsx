interface Props {
  labelText: string;
  count: number;
  setCount: (num: number) => void;
  decrementNum: number;
  incrementNum: number;
}

const IncDecForm = ({
  labelText,
  count,
  setCount,
  decrementNum,
  incrementNum,
}: Props) => {
  /**
   * count を指定された数値分だけ増加させる関数
   * @param {number} amount - 増加させる数値
   */
  const updateCount = (amount: number) => {
    setCount(count + amount);
  };

  /**
   * 入力フィールドの値を更新する関数
   * @param {React.ChangeEvent<HTMLInputElement>} event - 入力イベント
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNum = parseInt(event.target.value, 10);
    if (!Number.isNaN(newNum)) {
      setCount(newNum);
    }
  };

  return (
    <div className="join">
      <button
        type="button"
        className="btn btn-primary join-item w-24"
        onClick={() => updateCount(decrementNum)}
      >
        {decrementNum}
      </button>
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        className="join-item mx-auto flex w-32 place-items-center items-center justify-center rounded-box bg-base-200"
      />
      {labelText} = {count}
      <button
        type="button"
        className="btn btn-primary join-item w-24"
        onClick={() => updateCount(incrementNum)}
      >
        +{incrementNum}
      </button>
    </div>
  );
};

export { IncDecForm };

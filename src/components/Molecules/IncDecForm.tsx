interface Props {
  formNum: number;
  setFormNum: (num: number) => void;
  decrementNum: number;
  incrementNum: number;
}

export default function IncDecForm({
  formNum,
  setFormNum,
  decrementNum,
  incrementNum,
}: Props) {
  /**
   * count を指定された数値分だけ増加させる関数
   * @param {number} amount - 増加させる数値
   */
  const updateCount = (amount: number) => {
    setFormNum(formNum + amount);
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
      <div className="join-item mx-auto flex w-24 place-items-center items-center justify-center rounded-box bg-base-200">
        {formNum}
      </div>
      <button
        type="button"
        className="btn btn-primary join-item w-24"
        onClick={() => updateCount(incrementNum)}
      >
        +{incrementNum}
      </button>
    </div>
  );
}

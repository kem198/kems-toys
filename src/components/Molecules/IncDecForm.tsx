import { LabeledNumberInput } from '@/components/Atoms/LabeledNumberInput';

interface Props {
  labelText: string;
  count: number;
  setCount: (num: number | '') => void;
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

  return (
    <div className="join">
      <button
        type="button"
        className="btn btn-primary join-item w-16"
        onClick={() => updateCount(decrementNum)}
      >
        {decrementNum}
      </button>
      <div className="grow">
        <LabeledNumberInput
          labelText={labelText}
          count={count}
          setCount={setCount}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary join-item w-16"
        onClick={() => updateCount(incrementNum)}
      >
        +{incrementNum}
      </button>
    </div>
  );
};

export { IncDecForm };

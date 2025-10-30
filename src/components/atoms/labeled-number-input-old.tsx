import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { ChangeEvent } from "react";

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
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText> {labelText}</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        value={count === null ? "" : count}
        onChange={handleInputChange}
        className="text-right"
        placeholder="0"
        type="number"
      />
    </InputGroup>
  );
};

export { LabeledNumberInputOld };

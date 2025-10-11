import { useState } from "react";
import CustomButton from "../atoms/CustomButton";

type Props = {
  onIncrement?: () => void;
  onDecrement?: () => void;
};

const Counter = (props: Props) => {
  const { onIncrement, onDecrement } = props;
  const [increment, setIncrement] = useState<number>(0);
  const [decrement, setDecrement] = useState<number>(0);
  return (
    <div className="counter">
      <CustomButton
        label="+"
        onClick={(prevState: number) => {
          setIncrement(prevState + 1);
        }}
      />
      <CustomButton
        label="-"
        onClick={(prevState: number) => {
          setDecrement(prevState - 1);
        }}
      />
    </div>
  );
};

export default Counter;

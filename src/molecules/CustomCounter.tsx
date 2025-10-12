import { useState } from "react";
import CustomButton from "../atoms/CustomButton";
import "../styles/CustomCounter.scss";
import { Button } from "primereact/button";

type Props = {
  onIncrement?: () => void;
  onDecrement?: () => void;
  defaultCount: number;
};

const CustomCounter = (props: Props) => {
  const { defaultCount, onIncrement, onDecrement } = props;
  const [count, setCount] = useState(defaultCount);
  console.log("countttt", count);
  return (
    <div className="counter-element">
      <CustomButton
        label=""
        rounded={true}
        onClick={() => setCount(count + 1)}
        icon="pi pi-plus"
        classname="counter-btn"
      />
      {count}
      <CustomButton
        label=""
        rounded={true}
        onClick={() => setCount(count - 1)}
        icon="pi pi-minus"
        classname="counter-btn"
      />
    </div>
  );
};

export default CustomCounter;

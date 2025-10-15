import { useEffect, useState } from "react";
import CustomButton from "../atoms/CustomButton";
import "../styles/CustomCounter.scss";

type Props = {
  setCountHandler: (count: number) => void;
  minCount: number;
  defaultCount: number;
};

const CustomCounter = (props: Props) => {
  const { defaultCount, minCount, setCountHandler } = props;
  const [count, setCount] = useState(defaultCount);
  const decrementCount = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    setCountHandler(count);
  }, [count, setCountHandler]);
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
        onClick={decrementCount}
        icon="pi pi-minus"
        classname="counter-btn"
      />
    </div>
  );
};

export default CustomCounter;

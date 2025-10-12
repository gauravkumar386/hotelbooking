import { Button } from "primereact/button";

type Props = {
  label?: string;
  classname?: string;
  disabled?: boolean;
  onClick?: any;
  icon?: string;
  rounded?: boolean;
  text?: boolean;
};

const CustomButton = (props: Props) => {
  const { label, text, classname, disabled, onClick, icon, rounded=false } = props;

  return (
    <div className={`submit-button ${classname}`} style={{padding:"0 15px"}}>
      <Button
        icon={icon}
        label={label}
        text={text}
        onClick={onClick}
        disabled={disabled}
        rounded={rounded}
        style={{fontSize:"12px"}}
      />
    </div>
  );
};

export default CustomButton;

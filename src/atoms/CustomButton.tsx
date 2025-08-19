import { Button } from "primereact/button";

type Props = {
  label?: string;
  classname?: string;
  disabled?: boolean;
  onClick?: any;
  icon?: string;
};

const CustomButton = (props: Props) => {
  const { label, classname, disabled, onClick, icon } = props;

  return (
    <div className={`submit-button ${classname}`}>
      <Button icon={icon} label={label} onClick={onClick} disabled={disabled} />
    </div>
  );
};

export default CustomButton;

import { InputText } from "primereact/inputtext";
import IconLabel from "./IconLabel";
import "../styles/CustomInput.scss";

type Props = {
  value?: string;
  name: string;
  type: string;
  variant?: "filled" | "outlined";
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange?: any;
  setFieldValue?: any;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  setInputValue: (value: string) => void;
};

const CustomInput = (props: Props) => {
  const {
    value = "",
    name,
    type,
    variant,
    label,
    placeholder = "",
    className = "",
    disabled = false,
    onBlur,
    onMouseOverHandler,
    onMouseOutHandler,
    setInputValue,
  } = props;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="input-element">
      {label && <label htmlFor={name}>{label}</label>}
      <InputText
        id={name}
        value={value}
        name={name}
        type={type}
        variant={variant}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={(e) => inputHandler(e)}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
      />
      {value && (
        <IconLabel
          classname="pi-times"
          onClickHandler={() => setInputValue("")}
        />
      )}
    </div>
  );
};

export default CustomInput;

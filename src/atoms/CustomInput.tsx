import { InputText } from "primereact/inputtext";
import IconLabel from "./IconLabel";
import "../styles/CustomInput.scss";
import { FloatLabel } from "primereact/floatlabel";

type Props = {
  value?: string;
  name: string;
  type: string;
  variant?: "filled" | "outlined";
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  setFieldValue?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
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
    onChange,
    onBlur,
    onClear,
  } = props;

  return (
    <div className="input-element">
      {label && <label htmlFor={name}>{label}</label>}
      <FloatLabel>
        <InputText
          id={name}
          value={value}
          name={name}
          type={type}
          variant={variant}
          className={className}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
        />
        {value && onClear && (
          <IconLabel classname="pi-times" onClickHandler={onClear} />
        )}
        <label htmlFor={name}>{placeholder}</label>
      </FloatLabel>
    </div>
  );
};

export default CustomInput;

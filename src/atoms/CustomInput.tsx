import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import IconLabel from "./IconLabel";
import "../styles/CustomInput.scss";

type Props = {
  value?: string;
  variant?: "filled" | "outlined";
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange?: any;
  setFieldValue?: any;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  setInputValue: (e: any) => void;
};

const CustomInput = (props: Props) => {
  const {
    value,
    variant,
    label,
    placeholder,
    className,
    disabled,
    onMouseOverHandler,
    onMouseOutHandler,
    setInputValue,
  } = props;

  const inputHandler = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="input-element">
      <label>{label}</label>
      <InputText
        value={value}
        variant={variant}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => inputHandler(e)}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
      />
      {value && (
        <IconLabel
          classname="pi pi-times"
          onClickHandler={() => setInputValue("")}
        />
      )}
    </div>
  );
};

export default CustomInput;

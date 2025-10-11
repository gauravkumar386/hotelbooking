import React from "react";
import { AutoComplete } from "primereact/autocomplete";
import "../styles/AutoComplete.scss";
import IconLabel from "./IconLabel";

type Props = {
  label?: string;
  value?: string;
  suggestions?: any[];
  placeholder?: string;
  searchIcon?: boolean;
  searchMethod?: any;
  setOnChange?: any;
  setLocationData?: any;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  setInputValue?: (e: any) => void;
};

const AutoCompleteInput = (props: Props) => {
  const {
    label,
    value,
    suggestions,
    placeholder,
    searchIcon = false,
    searchMethod,
    setOnChange,
    onMouseOverHandler,
    onMouseOutHandler,
    setInputValue,
  } = props;
  return (
    <div className="autocomplete-element card flex justify-content-center">
      {searchIcon && (
        <IconLabel
          classname="pi-search"
          onMouseOverHandler={onMouseOverHandler}
          onMouseOutHandler={onMouseOutHandler}
        />
      )}
      {label && <div className="autocomplete-label">{label}</div>}
      <AutoComplete
        value={value}
        suggestions={suggestions}
        placeholder={placeholder}
        completeMethod={searchMethod}
        onChange={(e) => setOnChange(e.value)}
        className="custom-autocomplete"
      />
      {value && (
        <IconLabel
          classname="pi-times"
          // onClickHandler={() => setInputValue("")}
        />
      )}
    </div>
  );
};

export default AutoCompleteInput;

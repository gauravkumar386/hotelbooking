import React from "react";
import { AutoComplete } from "primereact/autocomplete";
import "../styles/AutoComplete.scss";
import IconLabel from "./IconLabel";

type Props = {
  value?: string;
  suggestions?: any[];
  placeholder?: string;
  searchMethod?: any;
  setOnChange?: any;
  setLocationData?: any;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  setInputValue?: (e: any) => void;
};

const AutoCompleteInput = (props: Props) => {
  const {
    value,
    suggestions,
    placeholder,
    searchMethod,
    setOnChange,
    onMouseOverHandler,
    onMouseOutHandler,
    setInputValue
  } = props;
  return (
    <div className="input-element card flex justify-content-center">
      <IconLabel
        classname="pi pi-search"
        onMouseOverHandler={onMouseOverHandler}
        onMouseOutHandler={onMouseOutHandler}
      />
      <AutoComplete
        value={value}
        suggestions={suggestions}
        placeholder={placeholder}
        completeMethod={searchMethod}
        onChange={(e) => setOnChange(e.value)}
      />
      {value && (
        <IconLabel
          classname="pi pi-times"
          // onClickHandler={() => setInputValue("")}
        />
      )}
    </div>
  );
};

export default AutoCompleteInput;

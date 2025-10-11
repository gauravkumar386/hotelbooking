import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { ChevronRightIcon } from "primereact/icons/chevronright";
import IconLabel from "./IconLabel";
import "../styles/CustomDropdown.scss";

type SelectedValue = {
  selectedValueName: string;
  selectedValueCode: string;
};
type Props = {
  label: string;
  dropdownData: SelectedValue[];
  selectDropdownHandler: () => void;
  selectedOptionIconName: string;
  listOptionIconName: string;
};

const CustomDropdown = (props: Props) => {
  const {
    label,
    dropdownData,
    selectDropdownHandler,
    selectedOptionIconName,
    listOptionIconName,
  } = props;
  const [selectedValue, setSelectedValue] = useState<SelectedValue>();

  const selectedValueTemplate = (option: SelectedValue, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center justify-content-center">
          <IconLabel classname={selectedOptionIconName} />
          <div>{option.selectedValueName}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const dropdownOptionTemplate = (option: SelectedValue) => {
    return (
      <div className="flex align-items-center justify-content-center">
        <IconLabel classname={listOptionIconName} />
        <div>{option.selectedValueName}</div>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <div className="label">{label}</div>
      <Dropdown
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.value)}
        options={dropdownData}
        optionLabel="name"
        placeholder={dropdownData[0].selectedValueName}
        valueTemplate={selectedValueTemplate}
        itemTemplate={dropdownOptionTemplate}
        className="w-full md:w-14rem"
        dropdownIcon={(opts: any) => {
          return opts.iconProps["data-pr-overlay-visible"] ? (
            <ChevronRightIcon />
          ) : (
            <ChevronDownIcon />
          );
        }}
      />
    </div>
  );
};

export default CustomDropdown;

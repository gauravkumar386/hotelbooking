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
  label?: string;
  dropdownData: SelectedValue[];
  value: SelectedValue | null;
  onChange: (value: SelectedValue | null) => void;
  selectedOptionIconName?: string;
  listOptionIconName?: string;
  customClassname?: string;
  placeholder?: string;
};

const CustomDropdown = (props: Props) => {
  const {
    label,
    dropdownData,
    value,
    onChange,
    selectedOptionIconName = "",
    listOptionIconName = "",
    customClassname,
    placeholder,
  } = props;

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
      {label && <div className="label">{label}</div>}
      <Dropdown
        value={value}
        onChange={(e) => onChange(e.value)}
        options={dropdownData}
        optionLabel="selectedValueName"
        placeholder={placeholder}
        valueTemplate={selectedValueTemplate}
        itemTemplate={dropdownOptionTemplate}
        className={`w-full md:w-14rem ${customClassname}`}
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

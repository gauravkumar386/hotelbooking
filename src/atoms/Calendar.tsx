import { Calendar } from "primereact/calendar";
import { useState } from "react";
import IconLabel from "./IconLabel";
import { FloatLabel } from "primereact/floatlabel";

type Props = {
  inline?: boolean;
  showWeek?: boolean;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  label: string;
  classname: string;
  showTime?: boolean;
  value: Date | null;
  onChange: (date: Date | null) => void;
};

const CustomCalendar = (props: Props) => {
  const {
    inline,
    showWeek,
    disabled,
    minDate,
    maxDate,
    label,
    classname,
    showTime,
    value,
    onChange,
  } = props;

  return (
    <div
      className="card flex justify-content-center"
      style={{ minWidth: "10rem" }}
    >
      <div className="label">{label}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconLabel classname={classname} style={{ marginRight: "0.5rem" }} />
        <FloatLabel>
          <Calendar
            value={value}
            onChange={(e) => onChange(e.value as Date | null)}
            dateFormat="dd/mm/yy"
            minDate={minDate}
            maxDate={maxDate}
            showTime={showTime}
            inline={inline}
            showWeek={showWeek}
            disabled={disabled}
            hourFormat="24"
            inputId="calendar-input"
          />
          {!value && <label htmlFor="calendar-input">dd/mm/yyyy</label>}
        </FloatLabel>
      </div>
    </div>
  );
};

export default CustomCalendar;

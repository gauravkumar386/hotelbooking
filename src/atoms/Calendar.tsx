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
  minMonth?: number;
  maxMonth?: number;
  label: string;
  classname: string;
  showTime?: boolean;
};

const CustomCalendar = (props: Props) => {
  const {
    inline,
    showWeek,
    disabled,
    minDate,
    maxDate,
    minMonth,
    maxMonth,
    label,
    classname,
    showTime,
  } = props;
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div
      className="card flex justify-content-center"
      style={{ minWidth: "10rem" }}
    >
      <div className="label">{label}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconLabel classname={classname} />
        <FloatLabel>
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value as Date)}
            dateFormat="dd/mm/yy"
            minDate={minDate}
            maxDate={maxDate}
            showTime={showTime}
            inline={inline}
            showWeek={showWeek}
            disabled={disabled}
            hourFormat="24"
          />
          {!date && <label htmlFor="date_range">dd/mm/yyyy</label>}
        </FloatLabel>
      </div>
    </div>
  );
};

export default CustomCalendar;

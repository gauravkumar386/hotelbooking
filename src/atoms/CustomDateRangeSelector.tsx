import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { FloatLabel } from "primereact/floatlabel";
import IconLabel from "./IconLabel";

type DateRange = [Date | null, Date | null] | null;
type Props = {
  label: string;
  classname: string;
};

const CustomDateRangeSelector = (props: Props) => {
  const { label, classname } = props;
  const [dates, setDates] = useState<DateRange>(null);

  return ( 
    <div className="card flex justify-content-center" style={{minWidth:"10rem"}}>
      <div className="label">{label}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconLabel classname={classname} />
        <FloatLabel>
          <Calendar
            value={dates}
            onChange={(e: any) => setDates(e.value)}
            selectionMode="range"
            readOnlyInput
            hideOnRangeSelection
            inputId="date_range"
          />
          {!dates && <label htmlFor="date_range">dd/mm/yyyy</label>}
        </FloatLabel>
      </div>
    </div>
  );
};

export default CustomDateRangeSelector;

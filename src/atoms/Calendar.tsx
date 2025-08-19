import { Calendar } from "primereact/calendar";
import { useState } from "react";

type Props = {
  inline?: boolean;
  showWeek?: boolean;
  disabled?: boolean;
  minDay?: number;
  maxDay?: number;
  minMonth?: number;
  maxMonth?: number;
};

const CustomCalendar = (props: Props) => {
  const { inline, showWeek, disabled, minDay, maxDay, minMonth, maxMonth } = props;
  const [date, setDate] = useState<Date | null>(null);

  const dateTemplate = (date: any) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <strong style={{ textDecoration: "line-through" }}>{date.day}</strong>
      );
    }
    return date.day;
  };

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value as Date)}
        inline={inline}
        showWeek={showWeek}
        disabled={disabled}
        dateTemplate={dateTemplate}
      />
    </div>
  );
};

export default CustomCalendar;

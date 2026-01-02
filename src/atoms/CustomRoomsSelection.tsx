import { useRef, useState } from "react";
import CustomCounter from "../molecules/CustomCounter";
import CustomButton from "./CustomButton";
import CustomOverlayPanel, { ChildRef } from "./CustomOverlayPanel";
import IconLabel from "./IconLabel";

type RoomsGuests = {
  rooms: number;
  adults: number;
  children: number;
};

type Props = {
  label: string;
  value: RoomsGuests;
  onChange: (value: RoomsGuests) => void;
};

const CustomRoomsGuestsSelection = (props: Props) => {
  const { label, value, onChange } = props;
  const childRef = useRef<ChildRef>(null);

  const handleApply = () => {
    onChange(value);
    childRef.current?.childMethod();
  };

  const setRoomCountHandler = (count: number) => {
    onChange({
      ...value,
      rooms: count,
    });
  };

  const setGuestCountHandler = (count: number) => {
    onChange({
      ...value,
      adults: count,
    });
  };

  return (
    <div
      className="card flex"
      style={{ minWidth: "18rem", position: "relative" }}
    >
      <div className="label">{label}</div>
      <CustomOverlayPanel
        ref={childRef}
        selectedViewChildren={
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              padding: "12px 12px 12px 0",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <IconLabel fontSize={20} classname="pi-building" />
            <div style={{ fontSize: "18px", opacity: "0.6" }}>
              <span style={{ fontSize: "25px" }}>
                {value.rooms < 10 ? "0" : ""}
                {value.rooms}
              </span>
              Room
              {`${value.rooms > 1 ? "s" : ""}`}
              &nbsp;
              <span style={{ fontSize: "25px" }}>
                {value.adults < 10 ? "0" : ""}
                {value.adults}
              </span>
              Guest
              {`${value.adults > 1 ? "s" : ""}`}
            </div>
            <IconLabel fontSize={20} classname="pi-angle-down" />
          </div>
        }
      >
        <div className="room-count">
          <div>No. of Rooms</div>
          <CustomCounter
            minCount={1}
            defaultCount={value.rooms}
            setCountHandler={setRoomCountHandler}
          />
        </div>
        <div className="guest-count">
          <div>No. of Guests</div>
          <CustomCounter
            minCount={2}
            defaultCount={value.adults}
            setCountHandler={setGuestCountHandler}
          />
        </div>
        <CustomButton
          label="Apply"
          classname="apply-btn"
          onClick={handleApply}
        />
      </CustomOverlayPanel>
    </div>
  );
};

export default CustomRoomsGuestsSelection;

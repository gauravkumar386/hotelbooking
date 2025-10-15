import { useRef, useState } from "react";
import CustomCounter from "../molecules/CustomCounter";
import CustomButton from "./CustomButton";
import CustomOverlayPanel, { ChildRef } from "./CustomOverlayPanel";
import IconLabel from "./IconLabel";

type Props = {
  label: string;
};

const CustomRoomsGuestsSelection = (props: Props) => {
  const { label } = props;
  const [roomCount, setRoomCount] = useState<number>(1);
  const [guestCount, setGuestCount] = useState<number>(2);
  const childRef = useRef<ChildRef>(null);
  const handleCallChild = () => {
    childRef.current?.childMethod();
  };
  const setRoomCountHandler = (count: number) => {
    console.log("room-count", count);
    setRoomCount(count);
  };
  const setGuestCountHandler = (count: number) => {
    console.log("guest-count", count);
    setGuestCount(count);
  };
  // console.log("counttttt",roomCount,guestCount)
  return (
    <div
      className="card flex"
      style={{ minWidth: "18rem", position: "relative" }}
    >
      <div className="label">{label}</div>
      <CustomOverlayPanel
        selectedViewChildren={
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              padding: "12px 12px 12px 0",
              cursor: "pointer",
            }}
          >
            <IconLabel fontSize={20} classname="pi-building" />
            <div style={{ fontSize: "18px", opacity: "0.6" }}>
              <span style={{ fontSize: "25px" }}>
                {roomCount < 10 ? "0" : ""}
                {roomCount}
              </span>
              Room
              {`${roomCount > 1 ? "s" : ""}`}
              &nbsp;
              <span style={{ fontSize: "25px" }}>
                {guestCount < 10 ? "0" : ""}
                {guestCount}
              </span>
              Guest
              {`${guestCount > 1 ? "s" : ""}`}
            </div>
            <IconLabel fontSize={20} classname="pi-angle-down" />
          </div>
        }
        ref={childRef}
      >
        <div className="room-count">
          <div>No. of Rooms</div>
          <CustomCounter
            minCount={1}
            defaultCount={roomCount}
            setCountHandler={setRoomCountHandler}
          />
        </div>
        <div className="guest-count">
          <div>No. of Guests</div>
          <CustomCounter
            minCount={2}
            defaultCount={guestCount}
            setCountHandler={setGuestCountHandler}
          />
        </div>
        <CustomButton
          label="Apply"
          classname="apply-btn"
          onClick={handleCallChild}
        />
      </CustomOverlayPanel>
    </div>
  );
};

export default CustomRoomsGuestsSelection;
